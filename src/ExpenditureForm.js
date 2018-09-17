import React, { Component } from 'react';

class ExpenditureForm extends Component {
  render() {
    return(
    	<div>
    	<h3> New Expenditure </h3>
        	<form>
        	<select name="category" form="spending" value="Category">
  				<option value="housing">Housing</option>
 				<option value="food">Food</option>
  				<option value="entertainment">Entertainment</option>
  				<option value="shopping">Shopping</option>
  				<option value="transportation">Transportation</option>
  				<option value="savings">Savings</option>
			</select>
 			 Amount:
  			<input type="text" name="amount" value={this.props.newExpense} onChange={this.props.handleChange}/>
  			Notes:
 			 <input type="text" name="description" /> <br />
 			 <button onClick={this.props.handleAddExpense} type="submit">ADD </button>
			</form>

        </div>
      );
  }
}

export default ExpenditureForm;


