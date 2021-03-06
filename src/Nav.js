import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Route as RouteDom, Link, Switch, withRouter } from "react-router-dom"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import renderIf from "render-if"

import { logoutUser } from "./redux/modules/authentication"
import Authentication from "./components/Authentication"

import Home from "./screens/Home"
import Login from "./screens/Login"
import NotFound from "./screens/NotFound"

import routes from "./routes"

const siteTitle = title => (title ? `RT | ${title}` : "React Template")

const App = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Nav = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  background-color: #3f51b5;
  color: White;
`

const NavSection = styled.div`
  display: flex;
  flex-flow: row;
`

const NavLeft = styled(NavSection)``

const NavRight = styled(NavSection)``

const NavHref = styled(Link)`
  padding: 0 12px;
  color: ${props => (props.className === "active" ? "black" : "white")};
  text-decoration: none;
  font-weight: lighter;
  cursor: pointer;
  text-transform: uppercase;

  :hover {
    color: black;
  }
`
const NavButton = styled.button`
  padding: 0 12px;
  color: ${props => (props.className === "active" ? "black" : "white")};
  background: transparent;
  text-decoration: none;
  font-weight: lighter;
  cursor: pointer;
  box-shadow: none;
  border: none;
  font-size: 17px;
  :hover {
    color: black;
  }
`

const NavLink = ({ to, label, exact, ignore = false }) => (
  <RouteDom path={to} exact={exact}>
    {({ match }) => {
      return (
        <NavHref to={to} className={!ignore && match ? "active" : ""}>
          {label}
        </NavHref>
      )
    }}
  </RouteDom>
)

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  ignore: PropTypes.bool,
}

const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const Route = ({ marginTop = true, center = false, ...props }) => (
  <Body marginTop={marginTop} center={center}>
    <Helmet>
      <title>{siteTitle(props.title)}</title>
    </Helmet>
    <RouteDom {...props} />
  </Body>
)

Route.propTypes = {
  title: PropTypes.string,
  marginTop: PropTypes.bool,
  center: PropTypes.bool,
}

const Authed = Authentication({
  redirectURL: routes.loginPath,
})
const Anon = Authentication({
  anon: true,
  redirectURL: routes.homePath,
})



const mapStateToProps = state => ({
  isAuthenticated: state.authentication.isAuthenticated,
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser()),
})
class Navigator extends Component {
  static propTypes = {
    logout: PropTypes.func,
    isAuthenticated: PropTypes.bool,
  }
  logout = () => {
    this.props.logout()
  }
  render = () => {
    const { isAuthenticated } = this.props
    return (
      <App>
        <Switch>
          <Route exact path={routes.homePath} component={Authed(Home)} />
          <Route exact path={routes.loginPath} component={Anon(Login)} marginTop={false} />
          <Route component={NotFound} title="Not found" />
        </Switch>
      </App>
    )
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Navigator)
)
