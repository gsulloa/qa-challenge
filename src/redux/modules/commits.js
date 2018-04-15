import { newError } from "./error"
import { doFetch } from "./fetching"

const SELECT_COMMIT = "SELECT_COMMIT"
const DESELECT_COMMIT = "DESELECT_COMMIT"
const SET_COMMITS = "SET_COMMITS"

const type = "GRIDCOMMITS"
const initialState = {
  fetching: false,
  error: false,
  data: {},
  selected: [1],
}
export default function commits(state = initialState, action) {
  switch (action.type) {
    case SET_COMMITS:
      return {
        ...state,
        data: action.payload.data,
      }
    case SELECT_COMMIT:
      return {
        ...state, // state anterior
        selected: [...state.selected, action.payload.id],
      }
    case DESELECT_COMMIT: {
      const index = state.selected.findIndex(e => e === action.payload.id)
      return {
        ...state, // state anterior
        selected: [
          ...state.selected.slice(0, index),
          ...state.selected.slice(index + 1),
        ],
      }
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

function fetchCommits(api) {
  return api.get("/commits/all")
}

export function getCommits() {
  return async (dispatch, getState, api) => {
    try {
      const response = await doFetch(
        dispatch,
        fetchCommits(api.api.withToken(getState().authentication.data.token)),
        type
      )
      dispatch(dispatch(setCommits({ data: response })))
    } catch (e) {
      newError(dispatch, type, { e })
    }
  }
}

function setCommits({ data }) {
  return {
    type: SET_COMMITS,
    payload: {
      data,
    },
  }
}

export function selectCommit({ commitId }) {
  return {
    type: SELECT_COMMIT,
    payload: {
      id: commitId,
    },
  }
}
export function deselectCommit({ commitId }) {
  return {
    type: DESELECT_COMMIT,
    payload: {
      id: commitId,
    },
  }
}
