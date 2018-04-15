import { newError } from "./error"
import { doFetch } from "./fetching"

const type = "GH_REPOS"

const SET_REPOS = "SET_REPOS"

const initialState = {
  fetching: false,
  error: false,
  data: [],
}
export default function ghRepositories(state = initialState, action) {
  switch (action.type) {
    case SET_REPOS:
      return {
        ...state, // state anterior
        data: action.payload.repos,
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
  before Actions
*/

function fetchRepos(api) {
  return api.get("/user/repos")
}

export function getGHRepositories() {
  return async (dispatch, getState, api) => {
    try {
      const response = await doFetch(
        dispatch,
        fetchRepos(
          api.github.withToken(getState().authentication.data.access_token)
        ),
        type
      )
      dispatch(dispatch(setRepos({ repos: response })))
    } catch (e) {
      newError(dispatch, type, { e })
    }
  }
}

function setRepos({ repos }) {
  return {
    type: SET_REPOS,
    payload: {
      repos,
    },
  }
}
