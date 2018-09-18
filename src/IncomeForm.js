import React, { Component } from 'react';

class IncomeForm extends Component {
  render() {
    return(
    	<div>
    		<h3> Add Income </h3>
        <p> </p>
        	<form>
 			 Amount:
  			<input type="text" name="amount" />
  			Notes:
 			 <input type="text" name="description" /><br />
 			 <button type="submit">ADD </button>
			</form>

        </div>
      );
  }
}

export default IncomeForm;


