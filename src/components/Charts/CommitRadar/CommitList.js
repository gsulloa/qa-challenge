import React, { Component } from "react"
import { connect } from "react-redux"
import { List, ListItem } from "material-ui/List"
import ActionInfo from "material-ui/svg-icons/action/info"
import Divider from "material-ui/Divider"
import Subheader from "material-ui/Subheader"
import Avatar from "material-ui/Avatar"
import FileFolder from "material-ui/svg-icons/file/folder"
import ActionAssignment from "material-ui/svg-icons/action/assignment"
import { blue500, yellow600 } from "material-ui/styles/colors"
import EditorInsertChart from "material-ui/svg-icons/editor/insert-chart"
import Paper from "material-ui/Paper"
import CommitItem from "./CommitItem"
import _ from "lodash"

import {
  selectCommit,
  deselectCommit,
  getCommits,
} from "../../../redux/modules/commits"

class CommitList extends Component {
  static defaultProps = {
    selectCommit: [],
    commits: [],
  }

  componentWillMount = () => {
    this.props.getCommits()
  }

  render() {
    console.log(this.props)
    return (
      <List>
        <Subheader>Latest commits</Subheader>
        {this.props.commits.map(commit => {
          const selected = this.props.selectedCommit.findIndex(e => e === 1) >= 0
          return (
            <CommitItem
              key={commit.id}
              id={commit.id}
              selected={selected}
              commit={commit.message}
              score={commit.score}
              handleSelect={
                selected
                  ? () => this.props.deselectCommit(1)
                  : () => this.props.selectCommit(1)
              }
            />
          )
        })}
      </List>
    )
  }
}

const mapStateToProps = state => {
  return {
    repositories: state.repositories.data,
    selectedCommit: state.commits.selected,
    commits: state.commits.data[state.repositories.selected],
  }
  //contributors: state.contributors.data[state.repositories.selected] esto es lo esperado
}

const mapDispatchToProps = dispatch => ({
  selectCommit: commitId => dispatch(selectCommit({ commitId })),
  deselectCommit: commitId => dispatch(deselectCommit({ commitId })),
  getCommits: () => dispatch(getCommits()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CommitList)
