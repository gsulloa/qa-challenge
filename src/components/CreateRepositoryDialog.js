import React, { Component } from "react"
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RepositoryItem from './RepositoryItem'
import List from 'material-ui/List';
import { devlog } from "../utils/log"

class CreateRepositoryDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: this.props.open,};
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        keyboardFocused={false}
        onClick={this.props.handleClose}
      />,
    ];

    return (
      <Dialog
        title="Add a repository"
        actions={actions}
        modal={false}
        open={this.props.open}
        onRequestClose={this.props.handleClose}>

        Holi
        <List>
          <RepositoryItem
            name="React"
            />
          <RepositoryItem
            name="Angular"
            />
        </List>
      </Dialog>
    );
  }
}

export default CreateRepositoryDialog
