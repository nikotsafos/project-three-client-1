import React, { Component } from 'react';
import axios from 'axios';
import SERVER_URL from '../constants/server';
import PageTitle from './PageTitle';



class SpendingItems extends Component {

	constructor(props) {
		super(props);
		this.state = {
			user: '',
			amount: '',
			date: '',
			description: '',
			userId: '',
			category: 'housing'


		}
	}


	handleChange = (e) => {
		console.log("handling the change...", e.target);
		this.setState({
			[e.target.name]: e.target.value,
			userId: this.props.user.id
		})
	}

	handleSubmit = (e) => {

		this.setState({
			[e.target.name]: e.target.value,
		})
		let token = localStorage.getItem('mernToken') || ''
		axios.post(SERVER_URL + '/spending',  {
			headers: { 'Authorization': `Bearer ${token}` },
			body: this.state
		})

		.then(result => {
			console.log(result);
		})
		.catch(err => {
			console.log('error');
		});

	}


	render() {

		let sectionTitle;
     		if(this.props.title){
            	sectionTitle = <PageTitle title={this.props.title}/>
      	} else {
          	sectionTitle = null;
      	}


		return (
			<div>
				{sectionTitle}
				<form  onSubmit={this.handleSubmit}>
						<label for="category">Category:</label>

						<select className="budget-input" name="category" onChange={this.handleChange}>
  							<option value="housing">Housing</option>
 				  			<option value="food" >Food</option>
  							<option value="entertainment" >Entertainment</option>
  							<option value="shopping" >Shopping</option>
  							<option value="transportation" >Transportation</option>
  							<option value="savings" >Savings</option>
						</select>

						<label for="amount">Amount:</label>
						<input className="budget-input" type="number" name="amount" value={this.state.amount} onChange={this.handleChange} required />

						<label for="date">Date:</label>
						<input className="budget-input" type="date" name="date" value={this.state.date} onChange={this.handleChange} />

						<label for="description">description:</label>
						<input className="budget-input" type="text" name="Description" value={this.state.description} onChange={this.handleChange} />


						<button className="submit-button" type="submit">Add</button> <br/><br/>

				</form>
			</div>
		);
	}
}


export default SpendingItems;
