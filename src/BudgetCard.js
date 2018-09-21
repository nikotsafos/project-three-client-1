import React, { Component } from 'react';

const categories = [
"housing", "food", "transportation", "entertainment", "shopping", "savings"
]
var total = 0;

class BudgetCard extends Component {

  render() {
    console.log("BUDGET CARD", this.props.budget)
    total = 0;
    return(
    	<div>
        	<h3>Monthly Budget</h3>

        	{
            Object.keys(this.props.budget).map((key, index) => {
              total += parseInt(this.props.budget[key])
      			  return (<p>{categories[index]}:  {this.props.budget[key]}</p>);
            })
          }



			<p>total: {total} </p>


        </div>
      );
  }
}

export default BudgetCard;
