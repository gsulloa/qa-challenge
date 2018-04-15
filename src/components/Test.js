import React, { Component } from "react"
import { connect } from "react-redux"
import { List, ListItem } from "material-ui/List"
import Divider from "material-ui/Divider"
import Subheader from "material-ui/Subheader"
import Add from "material-ui/svg-icons/content/add"
import Paper from "material-ui/Paper"
import RepositoryItem from "./RepositoryItem"
import CreateRepositoryDialog from "./CreateRepositoryDialog"
import { devlog } from "../utils/log"
import { getRepositories, selectRepository } from "../redux/modules/repositories"
import { getGHRepositories } from "../redux/modules/ghRepositories"
import renderIf from "render-if"

class RepositoryList extends Component {
  static defaultProps = {
    repository: {},
  }
  render() {
    devlog("RepositoryList", this.props)
    return (
      renderIf(this.props.repository.score)(() => (
      <Paper>
        <h3>Score: {this.props.repository.score}</h3>
      </Paper>
      ))
    )
  }
}

const mapStateToProps = state => ({
  repository: state.repositories.data[state.repositories.selected],
  //contributors: state.contributors.data[state.repositories.selected] esto es lo esperado
})

export default connect(mapStateToProps)(RepositoryList)
