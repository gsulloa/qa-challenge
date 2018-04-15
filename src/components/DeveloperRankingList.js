import React, { Component } from "react"
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import DeveloperRankingItem from './DeveloperRankingItem'

class DeveloperRankingList extends Component {
  render() {
    return (
      <Paper>
      <List>
        <Subheader>Top Developers</Subheader>
        <DeveloperRankingItem ranking={1} name='Gabo'/>
        <DeveloperRankingItem ranking={2} name='Hielo'/>
        <DeveloperRankingItem ranking={3} name='Roy'/>
        <Divider/>
        <DeveloperRankingItem ranking={4} name='Thom'/>
      </List>
      </Paper>
    );
  }
}


export default DeveloperRankingList;
