import React, { Component } from 'react';

export default class SpendingDetails extends Component {
	render() {
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