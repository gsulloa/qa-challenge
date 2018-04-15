import React, { Component } from "react"
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import Checkbox from 'material-ui/Checkbox';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500, yellow600} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import FolderSharedAsset from 'material-ui/svg-icons/file/folder-shared';

class ContributorItem extends Component {
  render() {
    return (
      <ListItem
        rightIcon={<Avatar src={this.props.image} />}
        leftCheckbox={<Checkbox />}
        primaryText= {this.props.name}
      />
    );
  }
}


export default ContributorItem;
