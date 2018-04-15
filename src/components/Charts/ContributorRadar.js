import React, { Component } from "react"
import {Radar} from 'react-chartjs-2';
import Paper from 'material-ui/Paper';
var randomMC = require('random-material-color');

const data = {
  labels: ['Warnings', 'Completion', 'Coverage'],
  datasets: [
    {
      borderColor: randomMC.getColor(),
      backgroundColor: 'rgba(255,255,255,0)',
      label: 'Commit',
      data: [10, 15, 12]
    },
    {
      borderColor: randomMC.getColor(),
      backgroundColor: 'rgba(255,255,255,0)',
      label: 'Commit',
      data: [1,1,1]
    },
    {
      borderColor: randomMC.getColor(),
      backgroundColor: 'rgba(255,255,255,0)',
      label: 'Commit',
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

class ContributorRadar extends Component {
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


export default ContributorRadar;
