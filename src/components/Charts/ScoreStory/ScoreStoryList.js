import React, { Component } from "react"
import { connect } from "react-redux"
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
import ScoreStoryItem from './ScoreStoryItem'
import _ from "lodash"

import { selectStoryContributor, deselectStoryContributor } from "../../../redux/modules/contributors"

class ScoreStoryList extends Component {
  static defaultProps = {
    selectContributor: [],
    contributors: [],
  }

  render() {
    return (
        <List>
        <Subheader>Contributors</Subheader>
          {this.props.contributors.map(contributor => (
              <ScoreStoryItem key={contributor.id} id={contributor.id} selected={this.props.selectedContributor.findIndex(e => e === contributor.id) >= 0} name={contributor.name} score={contributor.score} handleSelect={
                this.props.selectedContributor.findIndex(e => e === contributor.id) >= 0 ? () => this.props.deselectStoryContributor(contributor.id) : () => this.props.selectStoryContributor(contributor.id)
              }/>
          ))}
      </List>
    );
  }
}

const mapStateToProps = state => {
  return {
    repositories: state.repositories.data,
    contributors: state.contributors.data.contributors,
    selectedContributor: state.contributors.selected,
  }
}

const mapDispatchToProps = dispatch => ({
  selectStoryContributor: (contributorId) => dispatch(selectStoryContributor({ contributorId })),
  deselectStoryContributor: (contributorId) => dispatch(deselectStoryContributor({ contributorId }))
})

export default connect(mapStateToProps, mapDispatchToProps)(ScoreStoryList);
