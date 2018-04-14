import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import Paper from "material-ui/Paper"
import Card from "material-ui/Card/Card"
import CardTitle from "material-ui/Card/CardTitle"
import TextField from "material-ui/TextField"

import {
  ContainerCenter,
  SpacedRow as Row,
  PaddedBox,
} from "../components/Container"
import Form, { Button } from "../components/Form"

import { loginUser } from "../redux/modules/authentication"
import { push } from "react-router-redux"

const mapStateToProps = state => ({
  authenticated: state.authentication.isAuthenticated,
  fetching: state.authentication.fetching,
})
const mapDispatchToProps = dispatch => ({
  loginUser: creds => dispatch(loginUser(creds)),
  goIndex: () => dispatch(push("/")),
})
class Login extends Component {
  state = {
    email: "",
    password: "",
  }
  handleEmail = e => {
    this.setState({
      email: e.target.value,
    })
  }
  handlePassword = e => {
    this.setState({
      password: e.target.value,
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.loginUser({ ...this.state })
    this.setState({
      password: "",
    })
  }
  componentWillMount = () => {
    if (this.props.authenticated) {
      this.props.goIndex()
    }
  }
  render = () => {
    return (
      <ContainerCenter>
        <Paper zDepth={4}>
          <Card>
            <PaddedBox>
              <CardTitle>Login</CardTitle>
              <Form onSubmit={this.handleSubmit}>
                <Row>
                  <TextField
                    type="email"
                    hintText="user@email.com"
                    floatingLabelText="Enter your email:"
                    value={this.state.email}
                    onChange={this.handleEmail}
                  />
                </Row>
                <Row>
                  <TextField
                    type="password"
                    hintText="••••••••••••"
                    floatingLabelText="Enter your password:"
                    value={this.state.password}
                    onChange={this.handlePassword}
                  />
                </Row>
                <Row>
                  <Button
                    type="submit"
                    disabled={this.props.fetching}
                    primary={true}
                    fullWidth={true}
                  >
                    Sign in
                  </Button>
                  <Button fullWidth={true}>Sign up</Button>
                </Row>
              </Form>
            </PaddedBox>
          </Card>
        </Paper>
      </ContainerCenter>
    )
  }
}
Login.propTypes = {
  loginUser: PropTypes.func,
  authenticated: PropTypes.bool,
  goIndex: PropTypes.func,
  fetching: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
