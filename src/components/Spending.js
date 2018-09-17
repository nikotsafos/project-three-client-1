import React, {Component} from 'react';

class Spending extends Component {
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
			<div>

				<h1>Adding your spending</h1>
				<form className="HousingSpending" onSubmit={this.handleSubmit}>
					<label for="housing">Housing</label><br />
					<label for="amount">Amount:</label>
					<input type="number" name="amount" value={this.state.amount} onChange={this.handleChange} />
				
					<label for="date">Date:</label>
					<input type="date" name="date" value={this.state.date} onChange={this.handleChange} />

					<label for="details">Details:</label>
					<input type="text" name="details" value={this.state.details} onChange={this.handleChange} /><br />
			
					<button className="btn btn-primary" type="submit">Adding</button> <br/><br/>
				</form>

				<form className="FoodSpending" onSubmit={this.handleSubmit}>
					<label for="food">Food</label><br />
					<label for="amount">Amount:</label>
					<input type="number" name="amount" value={this.state.amount} onChange={this.handleChange} />
				
					<label for="date">Date:</label>
					<input type="date" name="date" value={this.state.date} onChange={this.handleChange} />

					<label for="details">Details:</label>
					<input type="text" name="details" value={this.state.details} onChange={this.handleChange} /><br />
			
					<button className="btn btn-primary" type="submit">Adding</button> <br/><br/>
				</form>

				<form className="EntertainmentSpending" onSubmit={this.handleSubmit}>
					<label for="entertainment">Entertainment</label><br />
					<label for="amount">Amount:</label>
					<input type="number" name="amount" value={this.state.amount} onChange={this.handleChange} />
				
					<label for="date">Date:</label>
					<input type="date" name="date" value={this.state.date} onChange={this.handleChange} />

					<label for="details">Details:</label>
					<input type="text" name="details" value={this.state.details} onChange={this.handleChange} /><br />
			
					<button className="btn btn-primary" type="submit">Adding</button> <br/><br/>
				</form>

				<form className="TransportationSpending" onSubmit={this.handleSubmit}>
					<label for="transportation">Transportation</label><br />
					<label for="amount">Amount:</label>
					<input type="number" name="amount" value={this.state.amount} onChange={this.handleChange} />
				
					<label for="date">Date:</label>
					<input type="date" name="date" value={this.state.date} onChange={this.handleChange} />

					<label for="details">Details:</label>
					<input type="text" name="details" value={this.state.details} onChange={this.handleChange} /><br />
			
					<button className="btn btn-primary" type="submit">Adding</button> <br/><br/>
				</form>

				<form className="ShoppingSpending" onSubmit={this.handleSubmit}>
					<label for="shopping">Shopping</label><br />
					<label for="amount">Amount:</label>
					<input type="number" name="amount" value={this.state.amount} onChange={this.handleChange} />
				
					<label for="date">Date:</label>
					<input type="date" name="date" value={this.state.date} onChange={this.handleChange} />

					<label for="details">Details:</label>
					<input type="text" name="details" value={this.state.details} onChange={this.handleChange} /><br />
			
					<button className="btn btn-primary" type="submit">Adding</button> <br/><br/>
				</form>
			</div>
		);
	}
}

export default Spending;