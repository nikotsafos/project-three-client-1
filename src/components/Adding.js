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
	render() {
		return(
			<form className="AddingForm" onSubmit={this.handleSubmit}>
				<label for="amount">Amount:</label>
				<input type="number" name="amount" value={this.state.amount} onChange={this.handleChange} />
				<button className="btn btn-primary" type="submit">Submit</button>
			</form>
		);
	}
}

export default Adding;