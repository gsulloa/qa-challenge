import { newError } from "./error"

const SELECT_COMMIT = 'SELECT_COMMIT'
const DESELECT_COMMIT = 'DESELECT_COMMIT'

const type = "GRIDCOMMITS"
const initialState = {
  fetching: false,
  error: false,
  data: {},
  selected: [1]
}
export default function commits(state = initialState, action) {
  switch (action.type) {
    case SELECT_COMMIT:
      return {
        ...state, // state anterior
        selected: [
          ...state.selected,
          action.payload.id
        ]
      }
    case DESELECT_COMMIT: {
      const index = state.selected.findIndex(e => e === action.payload.id)
      return {
        ...state, // state anterior
        selected: [
          ...state.selected.slice(0, index),
            ...state.selected.slice(index + 1),
        ]
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
export function selectCommit({ commitId }) {
  return {
    type: SELECT_COMMIT,
    payload: {
      id: commitId,
    }
  }
}
export function deselectCommit({ commitId }) {
  return {
    type: DESELECT_COMMIT,
    payload: {
      id: commitId,
    }
  }
}
