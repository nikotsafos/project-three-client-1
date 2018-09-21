import React, {Component} from 'react';
import axios from 'axios';

class Adding extends Component {
	constructor(props) {
		super(props);
		this.state = {
			budget: {},
			housingBudget : '',
			foodBudget : '',
			transportationBudget : '',
			entertainmentBudget : '',
			shoppingBudget : '',
			savingsBudget: ''
 		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	componentDidMount(){
	 	  let token = localStorage.getItem('mernToken')
    console.log('getting budget info', token)
    axios.post('http://localhost:3000/budget', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
    .then(res => {
      this.setState(
      	{budget: res.data}
      	)
    }).then(res => {
    	this.setState({
    		housingBudget: this.state.budget.housingBudget,
    		foodBudget: this.state.budget.foodBudget,
    		transportationBudget: this.state.budget.transportationBudget,
    		entertainmentBudget: this.state.budget.entertainmentBudget,
    		shoppingBudget: this.state.budget.shoppingBudget,
    		savingsBudget: this.state.budget.savingsBudget
    	})
    })
  }

	handleSubmit = (e) => {
		e.preventDefault();
		let token = localStorage.getItem('mernToken') || ''
		console.log('hello =====>', this.state, this.props.user);
		axios.post('http://localhost:3000/budget/update',  {
			headers: { 'Authorization': `Bearer ${token}` },
			body: this.state
		})
		.then(result => {
			console.log(result);
		})
		.catch(err => {
			console.log('error');
		});


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
				{/*	<label for="totalMoney">TotalMoney:</label>
					<input type="number" name="totalMoney" value={this.state.totalMoney} onChange={this.handleChange} /> <br />
				*/}
					<label for="housingBudget">Housing Budget:</label>
					<input type="number" name="housingBudget" value={this.state.housingBudget} onChange={this.handleChange} /> <br />

					<label for="FoodBudget">Food Budget:</label>
					<input type="number" name="foodBudget" value={this.state.foodBudget} onChange={this.handleChange} /><br />

					<label for="transportationBudget">Transportation Budget:</label>
					<input type="number" name="transportationBudget" value={this.state.transportationBudget} onChange={this.handleChange} /> <br />

					<label for="entertainmentBudget">Entertainment Budget:</label>
					<input type="number" name="entertainmentBudget" value={this.state.entertainmentBudget} onChange={this.handleChange} /> <br />

					<label for="shoppingBudget">Shopping Budget:</label>
					<input type="number" name="shoppingBudget" value={this.state.shoppingBudget} onChange={this.handleChange} /><br />

					<label for="savingsBudget">Savings Budget:</label>
					<input type="number" name="savingsBudget" value={this.state.savingsBudget} onChange={this.handleChange} /> <br />

{/*
					<label for="addingMoney">Adding Money:</label>
					<input type="number" name="addingMoney" value={this.state.EntertainmentBudget} onChange={this.handleChange} /> <br /><br />
	*/}
					<button className="btn btn-primary" type="submit">Adding</button> <br />
				</form>
			</div>
		);
	}
}

export default Adding;
