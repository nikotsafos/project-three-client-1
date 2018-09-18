import React, { Component } from 'react';
import axios from 'axios';


class SpendingItems extends Component {

	constructor(props) {
		super(props);
		this.state = {
			amount: '',
			date: '',
			description: '',
			userId: '',
			category: ''
			
		}
	}

	handleChange = (e) => {
		console.log("handling the change...");
		this.setState({
			[e.target.name]: e.target.value,
			userid: this.props.user.id
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		axios.post('http://localhost:3000/spending', this.state)
		.then(result => {
			console.log(result);
		})
		.catch(err => {
			console.log('error');
		});

	}


	render() {
		console.log("new state:", this.state)
		return (
			<div>
				<form  onSubmit={this.handleSubmit}>
						<label for="category">Category:</label>
{/*						<select name="category" form="spending" value="Category">
  							<option category="housing" value={this.state.category} onChange={this.handleChange}>Housing</option>
 				  			<option category="food" value={this.state.category} onChange={this.handleChange}>Food</option>
  							<option category="entertainment" value={this.state.category} onChange={this.handleChange}>Entertainment</option>
  							<option category="shopping" value={this.state.category} onChange={this.handleChange}>Shopping</option>
  							<option category="transportation" value={this.state.category} onChange={this.handleChange}>Transportation</option>
  							<option category="savings" value={this.state.category} onChange={this.handleChange}>Savings</option>
						</select>*/}

						<select name="category" onChange={this.handleChange}>
  							<option value="housing" >Housing</option>
 				  			<option value="food" >Food</option>
  							<option value="entertainment" >Entertainment</option>
  							<option value="shopping" >Shopping</option>
  							<option value="transportation" >Transportation</option>
  							<option value="savings" >Savings</option>
						</select>

						<label for="amount">Amount:</label>
						<input type="number" name="amount" value={this.state.amount} onChange={this.handleChange} />
					
						<label for="date">Date:</label>
						<input type="date" name="date" value={this.state.date} onChange={this.handleChange} />

						<label for="description">description:</label>
						<input type="text" name="description" value={this.state.description} onChange={this.handleChange} /><br />
				
						<button className="btn btn-primary" type="submit">Adding</button> <br/><br/>
				</form>
			</div>
		);
	}
}

export default SpendingItems;