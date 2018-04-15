import { newError } from "./error"

const SET_SELECTED_REPO = 'SET_SELECTED_REPO'

const type = "SELECTEDREPOSITORY"
const initialState = {
  fetching: false,
  error: false,
  data: {
  },
}
export default function selectedRepository(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_REPO:
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
export function getSelectedRepository(repositoryId) {
  return async (dispatch, getState, api) => {
    //const response = await doFetch(dispatch, login(api.api, creds), type)
    try {
      const response = [
        { name: 'repo'}
      ]
      dispatch(setSelectedRepository({ selectedRepository: response }))
    } catch (e) {
        newError(dispatch, type, { e })
    }
  }
}


function setSelectedRepository({ selectedRepository }) {
  return {
    type: SET_SELECTED_REPO,
    payload: {
      data: selectedRepository,
    }
  }
}
