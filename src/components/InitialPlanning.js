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
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
		// this.props.handleSubmit({
		// 	totalMoney: this.state.totalMoney,
		// 	housingBudget: this.state.housingBudget,
		// 	foodBudget: this.state.foodBudget,
		// 	transportationBudget: this.state.transportationBudget,
		// 	entertainmentBudget: this.state.entertainmentBudget,
		// 	shoppingBudget: this.state.shoppingBudget,
		// 	addingMoney: this.state.addingMoney
		// });
	}
	render() {
		return(
			<div>
				<h1>Initial Financial Plan</h1>
				<form onSubmit={this.handleSubmit}>
					<label for="totalMoney">TotalMoney:</label>
					<input type="number" name="totalMoney" value={this.state.totalMoney} onChange={this.handleChange} /> <br />
				
					<label for="housingBudget">Housing Budget:</label>
					<input type="number" name="housingBudget" value={this.state.housingBudget} onChange={this.handleChange} /> <br />

					<label for="FoodBudget">Food Budget:</label>
					<input type="number" name="foodBudget" value={this.state.FoodBudget} onChange={this.handleChange} /><br />
			
					<label for="transportationBudget">Transportation Budget:</label>
					<input type="number" name="transportationBudget" value={this.state.TransportationBudget} onChange={this.handleChange} /> <br />
				
					<label for="entertainmentBudget">Entertainment Budget:</label>
					<input type="number" name="entertainmentBudget" value={this.state.EntertainmentBudget} onChange={this.handleChange} /> <br />

					<label for="shoppingBudget">Shopping Budget:</label>
					<input type="number" name="shoppingBudget" value={this.state.ShoppingBudget} onChange={this.handleChange} /><br />

					<label for="addingMoney">Adding Money:</label>
					<input type="number" name="addingMoney" value={this.state.EntertainmentBudget} onChange={this.handleChange} /> <br /><br />
			
					<button className="btn btn-primary" type="submit">Adding</button> <br />
				</form>
			</div>
		);
	}
}

export default Adding;