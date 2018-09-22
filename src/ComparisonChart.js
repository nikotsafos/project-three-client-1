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
    const budgetArray = [];

    console.log("BUDGET", this.props.budget)

    const budget = [
    {x: 'housing', y: this.props.budget.housingBudget}, 
    {x: 'food', y: this.props.budget.foodBudget}, 
    {x: 'transportation', y: this.props.budget.transportationBudget},
    {x: 'entertainment', y: this.props.budget.entertainmentBudget},
    {x: 'shopping', y: this.props.budget.shoppingBudget},
    {x: 'savings', y: this.props.budget.savingsBudget},
    ];

    const spending = [
        {x: 'housing', y: this.props.housing}, 
        {x: 'food', y: this.props.food}, 
        {x: 'transportation', y: this.props.transportation},
        {x: 'entertainment', y: this.props.entertainment},
        {x: 'shopping', y: this.props.shopping},
        {x: 'savings', y: this.props.savings}
        ];

    const labelData = budget.map((d, idx) => ({
      x: d.x,
      y: (Math.max(budget[idx].y, spending[idx].y)) + 100
    }));
          

    const BarSeries = VerticalBarSeries;

    return (
      <div>
        <XYPlot xType="ordinal" width={600} height={300} xDistance={100}>
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