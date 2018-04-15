import React, { Component } from "react"
import {List,ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500, yellow600} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import FolderSharedAsset from 'material-ui/svg-icons/file/folder-shared';

class RepositoryItem extends Component {
  render() {
    return (
      <ListItem
        leftIcon={<FolderSharedAsset/>}
        primaryText= {this.props.name}
        secondaryText= {this.props.date}
      />
    );
  }
}


export default RepositoryItem;
