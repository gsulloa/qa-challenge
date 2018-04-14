import React, { Component } from "react"
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import {yellow400, grey400, brown400} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import Paper from 'material-ui/Paper';
import Developer from './Developer'

class TopDevelopers extends Component {
  render() {
    return (
      <Paper>
      <List>
        <Subheader>Top Developers</Subheader>
        <Developer ranking={1} name='Gabo'/>
        <Developer ranking={2} name='Hielo'/>
        <Developer ranking={3} name='Roy'/>
        <Divider/>
        <Developer ranking={4} name='Thom'/>
      </List>
      </Paper>
    );
  }
}


export default TopDevelopers;
