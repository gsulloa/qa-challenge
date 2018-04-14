import React, { Component } from "react"
import {Doughnut} from 'react-chartjs-2';
import Paper from 'material-ui/Paper';

const data = {
	labels: ['Red', 'Green', 'Yellow'],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
		hoverBackgroundColor: ['#FF6384',	'#36A2EB', '#FFCE56']
	}]
};

class TestChart extends Component {
  render() {
    return (
      <Paper>
        <Doughnut data={data} />
      </Paper>
    );
  }
}


export default TestChart;
