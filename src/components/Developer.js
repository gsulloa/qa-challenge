import React, { Component } from "react"
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import {yellow400, grey400, brown400} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import Paper from 'material-ui/Paper';

function getColor(i){
  if(i == 1){
    return yellow400;
  } else if (i == 2){
    return grey400;
  } else if (i == 3){
    return brown400;
  } else {
    return null;
  }
}

class Developer extends Component {
  constructor(props) {
      super(props);
      this.state = {color: getColor(this.props.ranking)};
    }

  handleClick() {
    console.log('this is:', this.props.userName);
  }

  render() {
    return (
      <ListItem
        leftIcon={<Avatar src={this.props.image} />}
        rightIcon={<FileFolder color={this.state.color}></FileFolder>}
        primaryText= {this.props.name}
      />
    );
  }
}


export default Developer;
