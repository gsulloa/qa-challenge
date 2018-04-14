import React, { Component } from "react"
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500, yellow600} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import Paper from 'material-ui/Paper';

import RepositoryItem from './RepositoryItem'

class RepositoryList extends Component {
  render() {
    return (
      <Paper>
      <List>
        <Subheader>Repositories</Subheader>
        <RepositoryItem/>
        <RepositoryItem/>
        <RepositoryItem/>
      </List>
      </Paper>
    );
  }
}


export default RepositoryList;
