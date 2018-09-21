import React, { Component } from 'react';

export default class SpendingDetails extends Component {
	render() {
		var month_list = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];

		const month = 'December';
		var months = [];

		switch(month){
  			case 'January':
     			months = month_list.slice(0,1);
      			break;
  			case 'February':
      			months = month_list.slice(0,2);
      			break;
  			case 'March':
  				months = month_list.slice(0,3);
      			break;
  case 'April':
  months = month_list.slice(0,4);
      break;
  case 'May':
  months = month_list.slice(0,5);
      break;
  case 'June':
  months = month_list.slice(0,6);
      break;
  case 'July':
  months = month_list.slice(0,7);
      break;
  case 'August':
  months = month_list.slice(0,8);
      break;
  case 'September':
  months = month_list.slice(0,9);
      break;
  case 'October':
  months = month_list.slice(0,10);
      break;
  case 'November':
  months = month_list.slice(0,11);
      break;
  case 'December':
  months = month_list.slice(0,12);
      break;
    default:
      break;
}

console.log(months);
		let spendingItems = this.props.spending.map(item => {
			return (
				<p>Spending on: {item.description}. Amount: ${item.amount}. Date: {item.date}</p>
			)
		})
		return(
			<div>
				<h1>{this.props.category}</h1>
				{spendingItems}
			</div>
		);
	}
}