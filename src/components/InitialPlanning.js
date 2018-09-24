import React, {Component} from 'react';
import axios from 'axios';
import SERVER_URL from '../constants/server';

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
    axios.post(SERVER_URL + '/budget', {
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
		
		let token = localStorage.getItem('mernToken') || ''
		console.log('hello =====>', this.state, this.props.user);
		axios.post(SERVER_URL + '/budget/update',  {
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
		return(
			<div>
				<h2>Initial Financial Plan</h2>
				<p>Set your spending goals for each category!</p>
			<div className="form-flex">
				<div className="form-box">
					<form onSubmit={this.handleSubmit}>
				
						<label className="budget-label " for="housingBudget">Housing:</label>
						<input type="number" name="housingBudget" className="budget-input right-input" value={this.state.housingBudget} onChange={this.handleChange} /> <br/>
					
						<label className="budget-label " for="FoodBudget">Food:</label>
						<input type="number" name="foodBudget" className="budget-input right-input" value={this.state.foodBudget} onChange={this.handleChange} /><br />
					
						<label className="budget-label " for="transportationBudget">Transportation:</label>
						<input type="number" name="transportationBudget" className="budget-input right-input" value={this.state.transportationBudget} onChange={this.handleChange} /><br /> 
					
						<label className="budget-label" for="entertainmentBudget">Entertainment:</label>
						<input type="number" name="entertainmentBudget" className="budget-input right-input" value={this.state.entertainmentBudget} onChange={this.handleChange} /> <br />
							
						<label className="budget-label " for="shoppingBudget">Shopping:</label>
						<input type="number" name="shoppingBudget" className="budget-input right-input" value={this.state.shoppingBudget} onChange={this.handleChange} /><br />
						
						<label className="budget-label " for="savingsBudget">Savings:</label>
						<input type="number" name="savingsBudget" className="budget-input right-input" value={this.state.savingsBudget} onChange={this.handleChange} /> <br />
				
						<button className="submit-button" type="submit">Set Budget</button> <br />
					</form>
				</div>
			</div>

			</div>
		);
	}
}

export default Adding;
