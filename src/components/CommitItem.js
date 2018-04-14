import React, { Component } from "react"
import {TableRow,TableRowColumn} from 'material-ui/Table';


class CommitItem extends Component {

  render() {
    return (
      <TableRow>
        <TableRowColumn>{this.props.id}</TableRowColumn>
        <TableRowColumn>{this.props.commit}</TableRowColumn>
        <TableRowColumn>{this.props.score}</TableRowColumn>
      </TableRow>
    );
  }
}


export default CommitItem;
