import React, { Component } from "react"
import { connect } from "react-redux"
import {Line} from 'react-chartjs-2';
import Paper from 'material-ui/Paper';
var randomMC = require('random-material-color');

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const options = {
  responsive: true,
  scale: {
        display: true
    }
};

class ScoreStoryLine extends Component {
  static defaultProps = {
    contributors: [],
  }

  render() {
    return (
        <Line
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

export default connect(mapStateToProps)(ScoreStoryLine);
