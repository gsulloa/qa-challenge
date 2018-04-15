import React, { Component } from "react"
import ListItem from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Checkbox from 'material-ui/Checkbox';

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
