import React, { Component } from 'react';
import SpendingItems from './SpendingItems.js';
import axios from 'axios';

class Spending extends Component {
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
		console.log("STATE OF SPENDING.JS ", this.state);
		
		return(
			<div>
				<h1>Adding your spending</h1>

				<SpendingItems user={this.props.user} />
<<<<<<< HEAD
				<ul>
				{ this.state.spending.map(spending => <li>{spending.category}: {spending.amount}</li>)}
				</ul>
=======
	
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
>>>>>>> 7b8ba4ec0ad2918601a2f82a0b97c476bbd0e7fa
			</div>
		);
	}
}

export default Spending;