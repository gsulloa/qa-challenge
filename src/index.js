import React from "react"
import ReactDOM from "react-dom"
import createHistory from "history/createBrowserHistory"

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"

import App from "./App"
import Api from "./Api"
import configureStore from "./redux/store"
import { devlog } from "./utils/log"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"

const history = createHistory()
const api = new Api(process.env.REACT_APP_API || "http://localhost:3000")
const github = new Api("https://github.com")

// Redux required objects
const initialState = {}
const { store, persistor } = configureStore(initialState, history, {
  api,
  github,
})

devlog("index.js", "store", store, "persistor", persistor)

export default ReactDOM.render(
  <MuiThemeProvider>
    <App store={store} history={history} persistor={persistor} />
  </MuiThemeProvider>,
  document.getElementById("root") || document.createElement("root")
)
