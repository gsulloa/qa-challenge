import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { replace } from "react-router-redux"

const Authentication = ({
  anon = false,
  text = true,
  redirectURL = undefined,
}) => WrappedComponent => {
  class WithAuthentication extends Component {
    static propTypes = {
      doRedirect: PropTypes.func.isRequired,
      isAuthenticated: PropTypes.bool,
    }

    componentDidMount = () => {
      if (
        (!this.props.isAuthenticated && !anon) ||
        (this.props.isAuthenticated && anon)
      ) {
        this.props.doRedirect(redirectURL)
      }
    }
    render = () => {
      if (
        (!this.props.isAuthenticated && !anon) ||
        (this.props.isAuthenticated && anon)
      ) {
        if (text) {
          return <h1>Forbidden</h1>
        }
        return null
      } else {
        return <WrappedComponent {...this.props} />
      }
    }
  }
  const mapStateToProps = state => {
    return {
      isAuthenticated: state.authentication.isAuthenticated,
    }
  }
  const mapDispatchToProps = dispatch => ({
    doRedirect: redirect => dispatch(replace(redirect)),
  })
  return connect(mapStateToProps, mapDispatchToProps)(WithAuthentication)
}

export default Authentication
