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

class RepositoryList extends Component {
  static defaultProps = {
    repositories: [],
    ghRepos: [],
  }

  state = {
    createRepositoryDialog: false,
  }

  componentWillMount = () => {
    this.props.getRepositories()
    this.props.getGhRespo()
  }

  handleCreateRepositoryClick = () => {
    this.setState({ createRepositoryDialog: true })
  }

  handleClose = () => {
    this.setState({ createRepositoryDialog: false })
    console.log("this is:")
  }

  render() {
    devlog("RepositoryList", this.props)
    return (
      <Paper>
        <List>
          <Subheader>Repositories you own</Subheader>
          {this.props.repositories.map(repository => (
            <RepositoryItem key={repository.id} name={repository.name} onClick={() => this.props.selectRepo(repository.id)} />
          ))}
          <Divider />
          <ListItem
            onClick={this.handleCreateRepositoryClick}
            leftIcon={<Add />}
            primaryText="Add new repository"
          />
          <CreateRepositoryDialog
            open={this.state.createRepositoryDialog}
            handleClose={this.handleClose}
          />
        </List>
      </Paper>
    )
  }
}

const mapStateToProps = state => ({
  repositories: state.repositories.data,
  //contributors: state.contributors.data[state.repositories.selected] esto es lo esperado
})

const mapDispatchToProps = dispatch => ({
  getRepositories: () => dispatch(getRepositories()),
  getGhRespo: () => dispatch(getGHRepositories()),
  selectRepo: id => dispatch(selectRepository({ repoId: id }))
})

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList)
