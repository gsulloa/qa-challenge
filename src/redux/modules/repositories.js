import { newError } from "./error"

const SET_REPOSITORIES = 'SET_REPOSITORIES'

const type = "REPOSITORY"
const initialState = {
  fetching: false,
  error: false,
  data: [],
}
export default function repositories(state = initialState, action) {
  switch (action.type) {
    case SET_REPOSITORIES:
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
export function getRepositories() {
  return async (dispatch, getState, api) => {
    //const response = await doFetch(dispatch, login(api.api, creds), type)
    try {
      const response = [
        { name: 'repo'}
      ]
      dispatch(setRepositories({ repositories: response }))
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
    }
  }
}
