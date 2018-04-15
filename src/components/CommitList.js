import React, { Component } from "react"
import List from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import CommitItem from './CommitItem'

class CommitList extends Component {

  render() {
    return (
      <Paper>
        <List>
        <Subheader>Latest commits</Subheader>
          <CommitItem id={1} commit='[FIX] Change tabs to spaces' score={13}/>
          <CommitItem id={2} commit='new view' score={2}/>
          <CommitItem id={3} commit='Added that new feature' score={7}/>
          <CommitItem id={4} commit='[DB] New migrations' score={10}/>
      </List>
      </Paper>
    );
  }
}


export default CommitList;
