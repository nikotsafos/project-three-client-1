import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const categories = [
"Housing", "Food", "Transportation", "Entertainment", "Shopping", "Savings"
]
var total = 0;

class BudgetCard extends Component {

  render() {
    total = 0;
    let display;
    if (this.props.budget.housingBudget) {
      display =   <table className="profile-table">
        <tbody>
            {
              Object.keys(this.props.budget).map((key, index) => {
                total += parseInt(this.props.budget[key])
                return (<tr><td>{categories[index]}</td><td>{this.props.budget[key]}</td><td className={categories[index]}> </td></tr>);
              })
            }
            <tr><td className="bold">Total:</td><td className="bold">${total}</td></tr>

          </tbody>
        </table>

      } else {
        display = 
          <div className="set-up">
            <h2> Set up your budget here: </h2>
            <Link className="home-link" to="/initialplanning">Initial Planning</Link>
          </div>
    }
    return(
    	<div>
        	<h3>Monthly Budget</h3>

          { display }

        </div>
      );
  }
}

export default BudgetCard;
