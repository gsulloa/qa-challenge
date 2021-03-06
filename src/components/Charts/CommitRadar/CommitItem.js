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

function getColor(score){
  if(score >= 10){
    return greenA700;
  } else if (score < 10 && score > 6){
    return yellow500;
  } else if (score < 5){
    return deepOrangeA700;
  } else {
    return null;
  }
}

class CommitItem extends Component {
  constructor(props) {
      super(props);
      this.state = {
        color: getColor(this.props.score),
        checked: false,
      };
    }

    updateCheck() {
      this.setState((oldState) => {
        return {
          checked: !oldState.checked,
        };
      });
  }

    render() {
      return (
        <ListItem
          leftCheckbox={
            <Checkbox
              checked={this.props.selected}
              onCheck={this.props.handleSelect}
            />}
          primaryText= {this.props.commit}
          secondaryText= {'Score: ' + this.props.score}
          rightIcon={<ActionStars color={this.state.color}/>}
        />
      );
    }
}



export default CommitItem;
