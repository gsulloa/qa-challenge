import React, { Component } from "react"
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import Add from 'material-ui/svg-icons/content/add';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500, yellow600} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import Paper from 'material-ui/Paper';
import RepositoryItem from './RepositoryItem'
import CreateRepositoryDialog from './CreateRepositoryDialog'

class RepositoryList extends Component {
  state = {
    createRepositoryDialog: false,
  };

  handleCreateRepositoryClick = () => {
    this.setState({createRepositoryDialog: true});
  }

    handleClose = () => {
      this.setState({createRepositoryDialog: false});
      console.log('this is:');
    };

  render() {
    return (
      <Paper>
      <List>
        <Subheader>Repositories you own</Subheader>
        <RepositoryItem name="Facebook Hackathon"/>
        <RepositoryItem name="Tournament Generator"/>
        <RepositoryItem name="Presents"/>
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


export default RepositoryList;
