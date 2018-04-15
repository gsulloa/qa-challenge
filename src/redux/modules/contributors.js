import { newError } from "./error"
import  { doFetch } from "./fetching"

const SET_CONTRIBUTORS = 'SET_CONTRIBUTORS'
const SELECT_CONTRIBUTOR = 'SELECT_CONTRIBUTOR'
const DESELECT_CONTRIBUTOR = 'DESELECT_CONTRIBUTOR'

const type = "CONTRIBUTOR"
const initialState = {
  fetching: false,
  error: false,
  data: {

  },
  selected: [],
}
export default function contributors(state = initialState, action) {
  switch (action.type) {
    case SET_CONTRIBUTORS:
      return {
        ...state, // state anterior
        data: action.payload.data,
      }
      case SELECT_CONTRIBUTOR:
        return {
          ...state, // state anterior
          selected: [
            ...state.selected,
            action.payload.id
          ]
        }
      case DESELECT_CONTRIBUTOR: {
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
   api Fetchs
 */
function fetchContributors(api) {
  return api.get("/repositories/contributors")
}

/*
  before Actions
*/
export function getContributors(repositoyId) {
  return async (dispatch, getState, api) => {
    try {
      const response = await doFetch(dispatch, fetchContributors(api.api.withToken(getState().authentication.data.token)), type)
      dispatch(setContributors({ contributors: response }))
    } catch (e) {
        newError(dispatch, type, { e })
    }
  }
}


function setContributors({ contributors }) {
  return {
    type: SET_CONTRIBUTORS,
    payload: {
      data: contributors,
    }
  }
}

export function selectContributor({ contributorId }) {
  return {
    type: SELECT_CONTRIBUTOR,
    payload: {
      id: contributorId,
    }
  }
}
export function deselectContributor({ contributorId }) {
  return {
    type: DESELECT_CONTRIBUTOR,
    payload: {
      id: contributorId,
    }
  }
}
