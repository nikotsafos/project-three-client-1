import React, { Component } from 'react';
import SpendingItems from './SpendingItems.js';
import axios from 'axios';

class Spending extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		housing: {
	// 			amount: '',
	// 			date: '',
	// 			details: ''},
	// 		food: {
	// 			amount: '',
	// 			date: '',
	// 			details: ''},
	// 		entertainment: {
	// 			amount: '',
	// 			date: '',
	// 			details: ''},
	// 		transportation: {
	// 			amount: '',
	// 			date: '',
	// 			details: ''},
	// 		shopping: {
	// 			amount: '',
	// 			date: '',
	// 			details: ''},

	// 	}
	// }

	// handleChange = (e) => {
	// 	console.log(this.state);
	// 	this.setState({
	// 		[e.target.name]: e.target.value
	// 	})
	// }

	// handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	this.props.handleSubmit({
	// 		amount: this.state.amount,
	// 		date: this.state.date,
	// 		details: this.state.details
	// 	});
	// }

	// handleSubmit = (value, individualItem) => {
	// 	console.log("HANDLING SUBMIT FROM SPENDING.JS");
		// TODO: send to database
	// 	this.setState({
	// 		[value] : individualItem
	// 	});
	// }

	state = {
		spending: []
	}

	componentDidMount() {
		axios.get('http://localhost:3000/spending')
			.then(res => {
				const spending = res.data;
				this.setState({ spending });
			})
	}


	render() {


		return(
			<div>
				<div>
				<h1>Adding your spending</h1>

				<SpendingItems user={this.props.user} />
			</div>
			<div>
				<ul>
					{ this.state.spending.map(spending => <li>{spending.category}: {spending.amount}</li>)}
				</ul>
			</div>

   </div>



		);
	}
}

export default Spending;
