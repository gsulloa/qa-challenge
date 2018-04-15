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
import ContributorItem from './ContributorItem'
import _ from "lodash"

import { selectContributor, deselectContributor } from "../../../redux/modules/contributors"

class ContributorList extends Component {
  static defaultProps = {
    selectContributor: [],
    contributors: [],
  }

  render() {
    return (
        <List>
        <Subheader>Contributors</Subheader>
          {this.props.contributors.map(contributor => (
              <ContributorItem key={contributor.id} id={contributor.id} selected={this.props.selectedContributor.findIndex(e => e === contributor.id) >= 0} name={contributor.name} score={contributor.score} handleSelect={
                this.props.selectedContributor.findIndex(e => e === contributor.id) >= 0 ? () => this.props.deselectContributor(contributor.id) : () => this.props.selectContributor(contributor.id)
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
  selectContributor: (contributorId) => dispatch(selectContributor({ contributorId })),
  deselectContributor: (contributorId) => dispatch(deselectContributor({ contributorId }))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContributorList);
