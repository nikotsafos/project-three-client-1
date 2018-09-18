import React, { Component } from 'react';
import axios from 'axios';
import SERVER_URL from '../constants/server';


class SpendingItems extends Component {

	constructor(props) {
		super(props);
		this.state = {
			user: '',
			amount: '',
			date: '',
			description: ''
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
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
		if(this.props.user){


		return (
			<div>
				<h4>userId :  {this.props.user.id}</h4>
				<form  onSubmit={this.handleSubmit}>
						<p>{this.props.value}</p>
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
}

export default SpendingItems;
