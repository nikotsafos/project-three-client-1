import React, { Component } from 'react';
import {RadialChart, Hint} from 'react-vis';

class DoughnutChart extends Component {
  state = {
    value: false
  };

render(){
   const {value} = this.state;

   const chartData = [
  			  {theta: this.props.housing, label: 'Housing'},
		      {theta: this.props.food, label: 'Food'},
		      {theta: this.props.transportation, label: 'Transportation'},
		      {theta: this.props.entertainment, label: 'Entertainment'},
		      {theta: this.props.shopping, label: 'Shopping'},
		      {theta: this.props.savings, label: 'Savings'}]

 return (
 	<div>
		<RadialChart
			showLabels
		    className={'donut-chart-example'}
		    innerRadius={80}
		    radius={120}
		    getAngle={d => d.theta}
		    data={chartData}
		    onValueMouseOver={v => this.setState({value: v})}
		    onSeriesMouseOut={v => this.setState({value: false})}
		    width={300}
		    height={300}
		    padAngle={0.04}
		      >
		    {value && <Hint value={value} />}
		</RadialChart>
      </div>
      )

}
}



export default DoughnutChart;