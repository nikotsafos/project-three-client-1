import React, {Component} from 'react';

class Adding extends Component {
	constructor(props) {
		super(props);
		this.state = {
			totalMoney : '',
			housingBudget : '',
			foodBudget : '',
			transportationBudget : '',
			entertainmentBudget : '',
			shoppingBudget : '',
			addingMoney : ''
		}
	}

	handleChange = (e) => {
		console.log(this.state);
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.handleSubmit({
			amount: this.state.amount,
			date: this.state.date,
			details: this.state.details
		});
	}
	render() {
		return(
			<div>
			<h1>Initial Financial Plan</h1>
			<form className="InitialPlanningForm" onSubmit={this.handleSubmit}>
				<label for="totalMoney">TotalMoney:</label>
				<input type="number" name="totalMoney" value={this.state.totalMoney} onChange={this.handleChange} /> <br />
				
				<label for="housingBudget">Housing Budget:</label>
				<input type="number" name="housingBudget" value={this.state.housingBudget} onChange={this.handleChange} /> <br />

				<label for="FoodBudget">Food Budget:</label>
				<input type="number" name="FoodBudget" value={this.state.FoodBudget} onChange={this.handleChange} /><br />
			
				<label for="TransportationBudget">Transportation Budget:</label>
				<input type="number" name="TransportationBudget" value={this.state.TransportationBudget} onChange={this.handleChange} /> <br />
				
				<label for="EntertainmentBudget">Entertainment Budget:</label>
				<input type="number" name="housingBudget" value={this.state.EntertainmentBudget} onChange={this.handleChange} /> <br />

				<label for="ShoppingBudget">Shopping Budget:</label>
				<input type="number" name="ShoppingBudget" value={this.state.ShoppingBudget} onChange={this.handleChange} /><br />

				<label for="addingMoney">Adding Money:</label>
				<input type="number" name="addingMoney" value={this.state.EntertainmentBudget} onChange={this.handleChange} /> <br /><br />
			
				<button className="btn btn-primary" type="submit">Adding</button> <br />
			</form>
			</div>
		);
	}
}

export default Adding;