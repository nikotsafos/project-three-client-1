import React, { Component } from 'react';

const categories = [
"Housing", "Food", "Transportation", "Entertainment", "Shopping", "Savings"
]
var total = 0;

class BudgetCard extends Component {

  render() {
    console.log("BUDGET CARD", this.props.budget)
    total = 0;
    return(
    	<div>
        	<h3>Monthly Budget</h3>

          <tbody>

        	{
            Object.keys(this.props.budget).map((key, index) => {
              total += parseInt(this.props.budget[key])
      			  return (<tr><td>{categories[index]}</td>  <td>{this.props.budget[key]}</td><td className={categories[index]}></td></tr>);
            })
          }



          <tr><td className="bold">Total:</td> <td className="bold">${total}</td> </tr>

          </tbody>

        </div>
      );
  }
}

export default BudgetCard;
