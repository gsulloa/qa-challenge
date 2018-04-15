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
import ContributorItem from './ContributorItem'

class ContributorList extends Component {
  render() {
    return (
      <Paper>
      <List>
        <Subheader>Contributors</Subheader>
        <ContributorItem name='Gabo'/>
        <ContributorItem name='Hielo'/>
        <ContributorItem name='Roy'/>
        <ContributorItem name='Thom'/>
      </List>
      </Paper>
    );
  }
}


export default ContributorList;
