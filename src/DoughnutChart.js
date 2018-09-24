import React, { Component } from 'react';
import { RadialChart } from 'react-vis';

class DoughnutChart extends Component {


	render(){
		let chartData = []
		if (this.props.housing){
			chartData = [
	  			  {theta: this.props.housing, label: 'Housing', color: '#7BC8E2'},
			      {theta: this.props.food, label: 'Food', color: '#1D9498'},
			      {theta: this.props.transportation, label: 'Transportation', color: '#ED592B'},
			      {theta: this.props.entertainment, label: 'Entertainment', color: '#F49A43'},
			      {theta: this.props.shopping, label: 'Shopping', color: '#4286f4'},
			      {theta: this.props.savings, label: 'Savings', color: '#c23ce8'}]

		} else {
			chartData = [
			{theta: 2, color: '#7BC8E2'},
			{theta: 1, color: '#1D9498'},
			{theta: 1, color: '#ED592B'}]
		}

	   

	 return (
	 	<div>
			<RadialChart
				colorType='literal'
			    className={'donut-chart-example'}
			    innerRadius={80}
			    radius={120}
			    getAngle={d => d.theta}
			    data={chartData}
			    width={300}
			    height={300}
			    padAngle={0.04}
			      >
			</RadialChart>
	    </div>
	 )

	}
}



export default DoughnutChart;