import React from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
} from 'react-vis';

export default class Example extends React.Component {
  render() {
    const Line = LineSeries;
    return (
      <div>
        
        <XYPlot width={300} height={300}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis title="X Axis" position="start" />
          <YAxis title="Y Axis" />
          <Line
            className="first-series"
            data={[{x: 1, y: 600}, {x: 15, y: 1200}, {x: 17, y: 1400}, {x: 26, y: 1650}]}
          />
          <Line className="second-series" data={null} />
          <Line
            className="third-series"
            curve={'curveMonotoneX'}
            data={[{x: 1, y: 1100}, {x: 6, y: 1400}, {x: 9, y: 1450}, {x: 19, y: 1500}, {x: 27, y: 1590}]}
          />
        
        </XYPlot>
      </div>
    );
  }
}