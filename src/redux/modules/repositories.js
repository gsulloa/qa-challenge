import { newError } from "./error"
import { doFetch } from "./fetching"
const SET_REPOSITORIES = "SET_REPOSITORIES"
const SELECT_REPO = "SELECT_REPO"
const ADD_REPOSITORIE = "ADD_REPOSITORIE"

const type = "REPOSITORY"
const initialState = {
  fetching: false,
  error: false,
  data: [],
  selected: undefined,
}
export default function repositories(state = initialState, action) {
  switch (action.type) {
    case SET_REPOSITORIES:
      return {
        ...state, // state anterior
        data: action.payload.data,
      }
    case ADD_REPOSITORIE:
      return {
        ...state,
        data: [
          ...state.data,
          action.payload.repo,
        ]
      }
    case SELECT_REPO:
      return {
        ...state,
        selected: action.payload.selected,
      }
    case `${type}_FETCH_START`:
      return {
        ...state,
        fetching: true,
      }
    case `${type}_FETCH_END`:
      return {
        ...state,
        fetching: false,
      }
    case `${type}_SET_ERROR`:
      return {
        ...state,
        error: action.payload,
        fetching: false,
      }
    default:
      return state
  }
}
/*
   api Fetchs
 */
function fetchRepos(api) {
  return api.get("/repositories")
}

function fetchCreateRepo(api, name) {
  return api.post("/repositories", { name })
}

/*
  before Actions
*/
export function getRepositories() {
  return async (dispatch, getState, api) => {
    try {
      const response = await doFetch(
        dispatch,
        fetchRepos(api.api.withToken(getState().authentication.data.token)),
        type
      )
      dispatch(setRepositories({ repositories: response }))
    } catch (e) {
      newError(dispatch, type, { e })
    }
  }
}

export function createRepo(name) {
  return async (dispatch, getState, api) => {
    try {
      const response = await doFetch(
        dispatch,
        fetchCreateRepo(api.api.withToken(getState().authentication.data.token), name),
        type
      )
      dispatch(getRepositories())
    } catch (e) {
      newError(dispatch, type, { e })
    }
  }
}

function setRepositories({ repositories }) {
  return {
    type: SET_REPOSITORIES,
    payload: {
      data: repositories,
    },
  }
}
function addRepository(response) {
  return {
    type: ADD_REPOSITORIE,
    payload: {
      repo: response,
    }
  }
}

export function selectRepository({ repoId }) {
  return {
    type: SELECT_REPO,
    payload: {
      selected: repoId,
    },
  }
}
