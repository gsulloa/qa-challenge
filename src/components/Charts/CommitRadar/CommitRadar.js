import React, { Component } from "react"
import _ from "lodash"
import { connect } from "react-redux"
import { Radar } from "react-chartjs-2"
import Paper from "material-ui/Paper"
var randomMC = require("random-material-color")

const options = {
  responsive: true,
  scale: {
    display: true,
  },
}

const mapStateToProps = state => {
  const commits = _.reduce(
    state.commits.data[state.repositories.selected],
    (prev, next) => {
      if (_.find(state.commits.selected, c => c === next.id))
        return [...prev, next]
      return prev
    },
    []
  )
  return {
    data: {
      labels: ["Warnings", "Completion", "Coverage"],
      datasets: commits.map(c => ({
        borderColor: randomMC.getColor(),
        backgroundColor: "rgba(255,255,255,0)",
        label: "Commit",
        data: c.Scores,
      })),
    },
  }
}

class CommitRadar extends Component {
  state = { data: this.props.data }
  componentWillReceiveProps = p => {
    this.setState(state => ({
      data: p.data,
    }))
  }
  render() {
    console.log(this.props, "ASDASDSD")
    return <Radar data={this.state.data} width={300} height={300} />
  }
}

export default connect(mapStateToProps)(CommitRadar)
