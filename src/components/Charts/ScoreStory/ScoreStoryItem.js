import React, { Component } from "react"
import { connect } from 'react-redux'
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import Checkbox from 'material-ui/Checkbox';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionStars from 'material-ui/svg-icons/action/stars';
import {greenA700, yellow500, deepOrangeA700} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import FolderSharedAsset from 'material-ui/svg-icons/file/folder-shared';

class ScoreStoryItem extends Component {
  constructor(props) {
      super(props);
      this.state = {
        checked: false,
      };
    }

    render() {
      return (
        <ListItem
          leftCheckbox={
            <Checkbox
              checked={this.props.selected}
              onCheck={this.props.handleSelect}
            />}
          primaryText= {this.props.name}
        />
      );
    }
}



export default ScoreStoryItem;
