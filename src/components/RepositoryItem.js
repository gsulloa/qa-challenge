import React, { Component } from "react"
import ListItem from 'material-ui/List';
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
