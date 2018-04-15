import React, { Component } from "react"
import List from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
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
