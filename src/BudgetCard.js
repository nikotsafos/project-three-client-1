import React, { Component } from 'react';

const categories = [
"housing", "food", "transportation", "entertainment", "shopping", "savings"
]
var total = 0;
var objectNum = -1;

class BudgetCard extends Component {
  render() {
    return(
    	<div>
        	<h3>Monthly Budget</h3>
        	
        	{Object.keys(this.props.budget).map(key => {
    			return total += parseInt(this.props.budget[key]),
    			objectNum += 1,
    			<p>{categories[objectNum]}:  {this.props.budget[key]}</p>;
			})}

        	
		
			<p>total: {total} </p>


        </div>
      );
  }
}

export default BudgetCard;
