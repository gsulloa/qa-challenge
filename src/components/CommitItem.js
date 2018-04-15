import React, { Component } from "react"
import ListItem from 'material-ui/List';
import ActionStars from 'material-ui/svg-icons/action/stars';
import {greenA700, yellow500, deepOrangeA700} from 'material-ui/styles/colors';

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


class ContributorItem extends Component {
  constructor(props) {
      super(props);
      this.state = {color: getColor(this.props.score)};
    }

  render() {
    return (
      <ListItem
        primaryText= {this.props.commit}
        secondaryText= {'Score: ' + this.props.score}
        rightIcon={<ActionStars color={this.state.color}/>}
      />
    );
  }
}


export default ContributorItem;
