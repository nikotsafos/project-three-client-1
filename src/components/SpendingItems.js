import React, { Component } from 'react';
import axios from 'axios';

class SpendingItems extends Component {

	constructor(props) {
		super(props);
		this.state = {
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
		axios.post( {

		}).then( () => {

		}).catch(() => {

		});

	}


	render() {
		return (
			<div>
				<form  onSubmit={this.handleSubmit}>
						<p>{this.props.value}</p>
						<label for="amount">Amount:</label>
						<input type="number" name="amount" value={this.state.amount} onChange={this.handleChange} />

						<label for="date">Date:</label>
						<input type="date" name="date" value={this.state.date} onChange={this.handleChange} />


						<label for="description">Details:</label>
						<input type="text" name="description" value={this.state.description} onChange={this.handleChange} /><br />

						<button className="btn btn-primary" type="submit">Adding</button> <br/><br/>
				</form>
			</div>
		);
	}
}

export default SpendingItems;
