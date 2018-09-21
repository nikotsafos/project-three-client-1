import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';


class Adding extends Component {


	constructor(props) {
		super(props);
		this.state = {
			amount: '',
			date: '',
			description: '',
			userId: '',

		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
			userId: this.props.user.id

		})
	}


	handleSubmit = (e) => {
		console.log('this state ', this.state);
		e.preventDefault()
		let token = localStorage.getItem('mernToken') || ''
		axios.post('http://localhost:3000/money/all',  {
			headers: { 'Authorization': `Bearer ${token}` },
			body: this.state
		}),
		.then(res => {
			// const adding = res.data;
console.log('ADDING ======>>>>', this.state)
			// this.setState({ amount: adding.amount,
			// 								date: adding.date,
			// 								description: adding.description,
			// 								userId: adding.userId,
 			// });
		})
}


	render() {
		return(
			<div>
				<h1>Add more money</h1>
				<form className="AddingForm" onSubmit={this.handleSubmit}>
					<label for="amount">Amount:</label>
					<input type="number" name="amount" value={this.state.amount} onChange={this.handleChange} required />

					<label for="date">Date:</label>
					<input type="date" name="date" value={this.state.date} onChange={this.handleChange} />

					<label for="description">description:</label>
					<input type="text" name="description" value={this.state.description} onChange={this.handleChange} /><br />

					<button className="btn btn-primary" onClick={this.showresult} type="submit">Adding</button>
				</form>

		</div>


		);
	}
}

export default Adding;
