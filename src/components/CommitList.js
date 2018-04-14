import React, { Component } from "react"
import Paper from 'material-ui/Paper';
import { devlog } from "../utils/log"
import Subheader from 'material-ui/Subheader';
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

  render() {
    devlog("CommitList", this.props)
    return (
      <Paper>
      <Subheader>Latest commits</Subheader>
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
        <CommitItem id={1} commit='[FIX] Change tabs to spaces' score={13}/>
        <CommitItem id={2} commit='new view' score={2}/>
        <CommitItem id={3} commit='Added that new feature' score={7}/>
        <CommitItem id={4} commit='[DB] New migrations' score={10}/>
        </TableBody>
      </Table>
      </Paper>
    );
  }
}


export default CommitList;
