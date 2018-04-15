import React, { Component } from "react"
import { connect } from "react-redux"
import { List, ListItem } from "material-ui/List"
import ActionInfo from "material-ui/svg-icons/action/info"
import Divider from "material-ui/Divider"
import Subheader from "material-ui/Subheader"
import Avatar from "material-ui/Avatar"
import FileFolder from "material-ui/svg-icons/file/folder"
import { yellow400, grey400, brown400 } from "material-ui/styles/colors"
import EditorInsertChart from "material-ui/svg-icons/editor/insert-chart"
import Paper from "material-ui/Paper"
import DeveloperRankingItem from "./DeveloperRankingItem"
import renderIf from "render-if"

class DeveloperRankingList extends Component {
  static defaultProps = {
    contributors: [],
  }

  componentWillMount = () => {
  }
  render() {
    return (
      <Paper>
        <List>
          <Subheader>Top Developers</Subheader>
          {this.props.contributors.slice(0, 3).map((contributor, i) => {
            return <DeveloperRankingItem ranking={i+1} name={contributor.name} />
          })}
          <Divider />
          {renderIf(this.props.contributors.length)(
            () => <DeveloperRankingItem ranking={1} name={this.props.contributors[0].name} />
          )}
        </List>
      </Paper>
    )
  }
}

const mapStateToProps = state => ({
  contributors: state.contributors.data[state.repositories.selected],
})
const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(
  DeveloperRankingList
)
