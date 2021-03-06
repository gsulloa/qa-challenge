import { push } from "react-router-redux"
import { newError } from "./error"
import { doFetch } from "./fetching"
import { devlog } from "../../utils/log"
import routes from "../../routes"
import { userInfo } from "os";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"

const type = "LOGIN"
const initialState = {
  fetching: false,
  error: false,
  isAuthenticated: false,
  data: {},
}
export default function authentication(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        data: action.data,
        isAuthenticated: true,
        error: false,
        token: action.token,
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
function login(api, body) {
  return new Promise(resolve => {
    devlog("Creds send: ", body)
    return resolve({ token: "jsonweb.eyJ1c2VySWQiOjF9.token" })
  })
  //return api.post("/session", body)
}

function requestToken(api, { code }) {
  return api.post("/auth/github", {
    code,
  })
}
/*
  before Actions
*/
export function loginUser(creds) {
  return async (dispatch, getState, api) => {
    const response = await doFetch(dispatch, login(api.api, creds), type)
    if (response.error) {
      newError(dispatch, type, { e: response.error })
    } else {
      const data = response.token.split(".")
      const userInfo = JSON.parse(atob(data[1]))
      dispatch(
        receiveLogin(
          {
            userId: userInfo.userId,
            role: "user",
            token: response.token
          },
        )
      )
      dispatch(push(routes.homePath))
    }
  }
}

export function loginWithGithub({ code }) {
  return async (dispatch, getState, api) => {
    try {
      const { jwt, ...userInfo } = await doFetch(
        dispatch,
        requestToken(api.api, { code }),
        type
      )
      const doLogin = () => dispatch(receiveLogin({
        data: userInfo,
        token: jwt,
      }))
      doLogin()
    } catch (e) {
      newError(dispatch, type, e)
    }
  }
}

export function logoutUser() {
  return async dispatch => {
    dispatch({ type: "RESET" })
    dispatch(push(routes.loginPath))
  }
}

function receiveLogin({ data, token }) {
  return {
    type: LOGIN_SUCCESS,
    data,
    token,
  }
}
