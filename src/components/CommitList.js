import React, { Component } from "react"
import Paper from 'material-ui/Paper';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';
import CommitItem from './CommitItem'

class CommitList extends Component {
  state = {
    fixedHeader: true,
    fixedFooter: false,
    stripedRows: false,
    showRowHover: false,
    selectable: true,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: false,
  };

  paperStyle = {
  width: '30%',
  };
  
  render() {
    return (
      <Paper style={this.paperStyle}>
      <Table
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}>
        <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Commit</TableHeaderColumn>
            <TableHeaderColumn>Score</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
        <CommitItem/>
        </TableBody>
      </Table>
      </Paper>
    );
  }
}


export default CommitList;
