import React, {Component} from 'react';

class Adding extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount: '',
			date: '',
			details: ''
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
			<form className="AddingForm" onSubmit={this.handleSubmit}>
				<label for="amount">Amount:</label>
				<input type="number" name="amount" value={this.state.amount} onChange={this.handleChange} />
				
				<label for="date">Date:</label>
				<input type="date" name="date" value={this.state.date} onChange={this.handleChange} />

				<label for="details">Details:</label>
				<input type="text" name="details" value={this.state.details} onChange={this.handleChange} /><br />
			
				<button className="btn btn-primary" type="submit">Adding</button> 
			</form>

		);
	}
}

export default Adding;