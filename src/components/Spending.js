import React, { Component } from 'react';
import SpendingItems from './SpendingItems.js';

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

	render() {
		console.log("STATE OF SPENDING.JS ", this.state);
		
		return(
			<div>
				<h1>Adding your spending</h1>

				<SpendingItems user={this.props.user} />
	
   </div>

				{/*
				<form className="HousingSpending" onSubmit={this.handleSubmit}>
					<label for="housing">Housing</label><br />
					<label for="amount">Amount:</label>
					<input type="number" name="amount" value={this.state.housing.amount} onChange={this.handleChange} />
				
					<label for="date">Date:</label>
					<input type="date" name="date" value={this.state.housing.date} onChange={this.handleChange} />

					<label for="details">Details:</label>
					<input type="text" name="details" value={this.state.housing.details} onChange={this.handleChange} /><br />
			
					<button className="btn btn-primary" type="submit">Adding</button> <br/><br/>
				</form>

				<form className="FoodSpending" onSubmit={this.handleSubmit}>
					<label for="food">Food</label><br />
					<label for="amount">Amount:</label>
					<input type="number" name="amount" value={this.state.food.amount} onChange={this.handleChange} />
				
					<label for="date">Date:</label>
					<input type="date" name="date" value={this.state.food.date} onChange={this.handleChange} />

					<label for="details">Details:</label>
					<input type="text" name="details" value={this.state.food.details} onChange={this.handleChange} /><br />
			
					<button className="btn btn-primary" type="submit">Adding</button> <br/><br/>
				</form>

				<form className="EntertainmentSpending" onSubmit={this.handleSubmit}>
					<label for="entertainment">Entertainment</label><br />
					<label for="amount">Amount:</label>
					<input type="number" name="amount" value={this.state.entertainment.amount} onChange={this.handleChange} />
				
					<label for="date">Date:</label>
					<input type="date" name="date" value={this.state.entertainment.date} onChange={this.handleChange} />

					<label for="details">Details:</label>
					<input type="text" name="details" value={this.state.entertainment.details} onChange={this.handleChange} /><br />
			
					<button className="btn btn-primary" type="submit">Adding</button> <br/><br/>
				</form>

				<form className="TransportationSpending" onSubmit={this.handleSubmit}>
					<label for="transportation">Transportation</label><br />
					<label for="amount">Amount:</label>
					<input type="number" name="amount" value={this.state.transportation.amount} onChange={this.handleChange} />
				
					<label for="date">Date:</label>
					<input type="date" name="date" value={this.state.transportation.date} onChange={this.handleChange} />

					<label for="details">Details:</label>
					<input type="text" name="details" value={this.state.transportation.details} onChange={this.handleChange} /><br />
			
					<button className="btn btn-primary" type="submit">Adding</button> <br/><br/>
				</form>

				<form className="ShoppingSpending" onSubmit={this.handleSubmit}>
					<label for="shopping">Shopping</label><br />
					<label for="amount">Amount:</label>
					<input type="number" name="amount" value={this.state.shopping.amount} onChange={this.handleChange} />
				
					<label for="date">Date:</label>
					<input type="date" name="date" value={this.state.shopping.date} onChange={this.handleChange} />

					<label for="details">Details:</label>
					<input type="text" name="details" value={this.state.shopping.details} onChange={this.handleChange} /><br />
			
					<button className="btn btn-primary" type="submit">Adding</button> <br/><br/>
				</form>*/}
			</div>
		);
	}
}

export default Spending;