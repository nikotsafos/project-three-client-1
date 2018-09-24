import React from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  VerticalBarSeries
} from 'react-vis';


export default class Example extends React.Component {

  render() {

    const budget = [
    {x: 'housing', y: this.props.budget.housingBudget, color: '#b6e1ef'}, 
    {x: 'food', y: this.props.budget.foodBudget, color: '#67c3c6'}, 
    {x: 'transportation', y: this.props.budget.transportationBudget, color: '#ed896a'},
    {x: 'entertainment', y: this.props.budget.entertainmentBudget, color: '#fcba79'},
    {x: 'shopping', y: this.props.budget.shoppingBudget, color: '#85aef2'},
    {x: 'savings', y: this.props.budget.savingsBudget, color: '#d98def'},
    ];

    const spending = [
        {x: 'housing', y: this.props.housing, color: '#7BC8E2'}, 
        {x: 'food', y: this.props.food, color: '#1D9498'}, 
        {x: 'transportation', y: this.props.transportation, color: '#ED592B'},
        {x: 'entertainment', y: this.props.entertainment, color: '#F49A43'},
        {x: 'shopping', y: this.props.shopping, color: '#4286f4'},
        {x: 'savings', y: this.props.savings, color: '#c23ce8'}
        ];
          

    const BarSeries = VerticalBarSeries;

    return (
      <div>
        <h3> Budget vs Spending</h3>
        <XYPlot colorType='literal' xType="ordinal" width={550} height={300} xDistance={100}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <BarSeries className="vertical-bar-series-example" data={budget} />
          <BarSeries data={spending} />
        </XYPlot>
      </div>
    );
  }
}