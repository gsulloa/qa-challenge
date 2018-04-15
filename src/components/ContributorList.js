import React, { Component } from "react"
import { connect } from "react-redux"
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import {yellow400, grey400, brown400} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import ContributorItem from './ContributorItem'
import { getContributors } from "../redux/modules/contributors";

class ContributorList extends Component {
  static defaultProps = {
    contributors: []
  }

  componentWillMount = () => {
    this.props.getContributors()
  }
  render() {
    console.log("CONTRIBUTORS", this.props)
    return (
      <List>
        <Subheader>Contributors</Subheader>
        {this.props.contributors.map(contributor => (
          <ContributorItem name={contributor.name}/>
        ))}
      </List>
    );
  }
}

const mapStateToProps = state => ({
  contributors: state.contributors.data[state.repositories.selected],
})
const mapDispatchToProps = dispatch => ({
  getContributors: () => dispatch(getContributors())
})


export default connect(mapStateToProps, mapDispatchToProps)(ContributorList);
