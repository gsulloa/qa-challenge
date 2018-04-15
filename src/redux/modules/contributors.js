import { newError } from "./error"

const SET_CONTRIBUTORS = 'SET_CONTRIBUTORS'

const type = "CONTRIBUTOR"
const initialState = {
  fetching: false,
  error: false,
  data: {

  },
}
export default function contributors(state = initialState, action) {
  switch (action.type) {
    case SET_CONTRIBUTORS:
      return {
        ...state, // state anterior
        data: action.payload.data,
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

/*
  before Actions
*/
export function getContributors(repositoyId) {
  return async (dispatch, getState, api) => {
    try {
      //const response = await doFetch(dispatch, login(api.api, creds), type)
      const response = [{ name: 'repo'}]
      dispatch(setContributors({ repositories: response }))
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