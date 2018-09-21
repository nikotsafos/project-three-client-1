import React, { Component } from 'react';
import {RadialChart, Hint} from 'react-vis';

class DoughnutChart extends Component {
  state = {
    value: false
  };

render(){
   const {value} = this.state;

   const chartData = [
  			  {theta: this.props.housing, label: 'Housing', color: '#7BC8E2'},
		      {theta: this.props.food, label: 'Food', color: '#1D9498'},
		      {theta: this.props.transportation, label: 'Transportation', color: '#ED592B'},
		      {theta: this.props.entertainment, label: 'Entertainment', color: '#F49A43'},
		      {theta: this.props.shopping, label: 'Shopping', color: '#4286f4'},
		      {theta: this.props.savings, label: 'Savings', color: '#c23ce8'}]

 return (
 	<div>
		<RadialChart
			colorType='literal'
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