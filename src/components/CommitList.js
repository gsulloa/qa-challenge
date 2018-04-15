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
import CommitItem from './CommitItem'

class CommitList extends Component {

  render() {
    return (
        <List>
        <Subheader>Latest commits</Subheader>
          <CommitItem id={1} commit='[FIX] Change tabs to spaces' score={13}/>
          <CommitItem id={2} commit='new view' score={2}/>
          <CommitItem id={3} commit='Added that new feature' score={7}/>
          <CommitItem id={4} commit='[DB] New migrations' score={10}/>
      </List>
    );
  }
}


export default CommitList;
