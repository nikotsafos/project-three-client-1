import React, {Component} from 'react';
import axios from 'axios';

class Adding extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount: '',
			date: '',
			description: '',
			userId: ''
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		
		})
	}

	componentDidMount(){
		this.setState({
			userId: this.props.user.id
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
		axios.post('http://localhost:3000/money/all', this.state)
		.then(result => {
			console.log(result);
		})
		.catch(err => {
			console.log('error');
		});		
	}

	// showresult = (e) => {
	// 	return(<p>{this.state.amount}</p>);
	// }
	render() {
		return(
			<div>
				<h1>Add more money</h1>
				<form className="AddingForm" onSubmit={this.handleSubmit}>
					<label for="amount">Amount:</label>
					<input type="number" name="amount" value={this.state.amount} onChange={this.handleChange} />
				
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