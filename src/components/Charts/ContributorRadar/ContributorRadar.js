import React, { Component } from "react"
import { connect } from "react-redux"
import {Radar} from 'react-chartjs-2';
import Paper from 'material-ui/Paper';
var randomMC = require('random-material-color');

const data = {
  labels: ['Warnings', 'Completion', 'Coverage'],
  datasets: [
    {
      borderColor: randomMC.getColor(),
      backgroundColor: 'rgba(255,255,255,0)',
      label: 'Name1',
      data: [10, 15, 12]
    },
    {
      borderColor: randomMC.getColor(),
      backgroundColor: 'rgba(255,255,255,0)',
      label: 'Name2',
      data: [1,1,1]
    },
    {
      borderColor: randomMC.getColor(),
      backgroundColor: 'rgba(255,255,255,0)',
      label: 'Name3',
      data: [20, 14, 8]
    }
  ]
};

const options = {
  responsive: true,
  scale: {
        display: true
    }
};

class ContributorsRadar extends Component {
  static defaultProps = {
    contributors: [],
  }

  render() {
    return (
        <Radar
          data={data}
          width={300}
	        height={300}
        />
    );
  }
}

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps)(ContributorsRadar);
