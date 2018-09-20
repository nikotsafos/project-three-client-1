import React, { Component } from 'react';

const categories = [
"Housing", "Food", "Transportation", "Entertainment", "Shopping", "Savings"
]
var total = 0;
var objectNum = -1;

class BudgetCard extends Component {

  render() {

    total = 0;

    objectNum = -1;
    return(
    	<div>
        	<h3>Monthly Budget</h3>
          <table>
        	{Object.keys(this.props.budget).map(key => {

    			return total += parseInt(this.props.budget[key]),
    			objectNum += 1,
      			<tr>
              <td>{categories[objectNum]}</td> 
              <td>{this.props.budget[key]}</td>
              <td className={categories[objectNum]}></td>
            </tr>;

			})}


          <tr><td>total:</td> <td>{total}</td> </tr>

          </table>

        </div>
      );
  }
}

export default BudgetCard;
