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
import CommitItem from './CommitItem'
import _ from "lodash"

import { selectCommit, deselectCommit } from "../../../redux/modules/commits"

class CommitList extends Component {
  static defaultProps = {
    selectCommit: []
  }

  render() {
    console.log(this.props)
    return (
        <List>
        <Subheader>Latest commits</Subheader>
          <CommitItem id={1} selected={this.props.selectedCommit.findIndex(e => e === 1) >= 0} commit='[FIX] Change tabs to spaces' score={13} handleSelect={
              this.props.selectedCommit.findIndex(e => e === 1) >= 0 ? () => this.props.deselectCommit(1) : () => this.props.selectCommit(1)
            }/>
          <CommitItem id={2} commit='new view' score={2}/>
          <CommitItem id={3} commit='Added that new feature' score={7}/>
          <CommitItem id={4} commit='[DB] New migrations' score={10}/>
      </List>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.commits.selected)
  return {
    repositories: state.repositories.data,
    selectedCommit: state.commits.selected,
  }
  //contributors: state.contributors.data[state.repositories.selected] esto es lo esperado
}

const mapDispatchToProps = dispatch => ({
  selectCommit: (commitId) => dispatch(selectCommit({ commitId })),
  deselectCommit: (commitId) => dispatch(deselectCommit({ commitId }))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommitList);
