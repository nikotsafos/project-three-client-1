import React, { Component } from 'react';
import {RadialChart, Hint} from 'react-vis';

class DoughnutChart extends Component {
  state = {
    value: false
  };

render(){
   const {value} = this.state;
   const housing = this.props.budget.housingBudget;
   const transportation = this.props.budget.transportationBudget;
   const entertainment = this.props.budget.entertainmentBudget;
   const food = this.props.budget.foodBudget;
   const shopping = this.props.budget.shoppingBudget;

 return (
 	<div>
		<RadialChart
		    className={'donut-chart-example'}
		    innerRadius={100}
		    radius={140}
		    getAngle={d => d.theta}
		    data={[
		      {theta: housing, Name: 'Housing'},
		      {theta: transportation, Name: 'Transportation'},
		      {theta: entertainment, Name: 'Entertainment'},
		      {theta: shopping, Name: 'Shopping'},
		      {theta: food, Name: 'Food'}
		        ]}
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