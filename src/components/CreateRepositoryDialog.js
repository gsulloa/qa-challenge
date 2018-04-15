import React, { Component } from "react"
import { connect } from "react-redux"
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RepositoryItem from './RepositoryItem'
import List from 'material-ui/List';
import { devlog } from "../utils/log"
import { getGHRepositories } from "../redux/modules/ghRepositories"

class CreateRepositoryDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: this.props.open,};
  }

  render() {
    const actions = [
      <FlatButton
        key={1}
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
        autoScrollBodyContent={true}
        onRequestClose={this.props.handleClose}>

        <List>
          {this.props.ghRepos.map(repository => (
            <RepositoryItem key={repository.name} name={repository.name} />
          ))}
        </List>
      </Dialog>
    );
  }
}

const mapStateToProps = state => ({
  ghRepos: state.ghRepos.data,
  //contributors: state.contributors.data[state.repositories.selected] esto es lo esperado
})

const mapDispatchToProps = dispatch => ({
  getGhRespo: () => dispatch(getGHRepositories()),
})


export default connect(mapStateToProps, mapDispatchToProps)(CreateRepositoryDialog)
