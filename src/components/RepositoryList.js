import React, { Component } from "react"
import { connect } from 'react-redux'
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Add from 'material-ui/svg-icons/content/add';
import Paper from 'material-ui/Paper';
import RepositoryItem from './RepositoryItem'
import CreateRepositoryDialog from './CreateRepositoryDialog'
import {devlog} from '../utils/log'
import { getRepositories } from "../redux/modules/repositories"

class RepositoryList extends Component {
  state = {
    createRepositoryDialog: false,
  };

  componentWillMount = () => {
    this.props.getRepositories()
  }

  handleCreateRepositoryClick = () => {
    this.setState({createRepositoryDialog: true});
  }

    handleClose = () => {
      this.setState({createRepositoryDialog: false});
      console.log('this is:');
    };

  render() {
    devlog("RepositoryList", this.props)
    return (
      <Paper>
      <List>
        <Subheader>Repositories you own</Subheader>
        {this.props.repositories.map(repository => (
          <RepositoryItem key={repository.name} name={repository.name}/>
        ))}
          <ListItem
            onClick={this.handleCreateRepositoryClick}
            leftIcon={<Add/>}
            primaryText="Add new repository"/>
        <Divider />
        <Subheader>Repositories you contribute</Subheader>
        <RepositoryItem name="React"/>
        <RepositoryItem name="Litho"/>
        <CreateRepositoryDialog open={this.state.createRepositoryDialog} handleClose={this.handleClose}/>
      </List>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  repositories: state.repositories.data,
  //contributors: state.contributors.data[state.repositories.selected] esto es lo esperado
})

const mapDispatchToProps = dispatch => ({
  getRepositories: () => dispatch(getRepositories())
})

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
