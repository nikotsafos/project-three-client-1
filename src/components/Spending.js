import React, { Component } from 'react';
import SpendingItems from './SpendingItems.js';
import axios from 'axios';

class Spending extends Component {
	state = {
		spending: []
	}

	componentDidMount() {
		axios.get('http://localhost:3000/spending')
			.then(res => {
				const spending = res.data;
				this.setState({ spending });
			})
	}
	render() {
		console.log("STATE OF SPENDING.JS ", this.state);
		
		return(
			<div>
				<h1>Adding your spending</h1>

				<SpendingItems user={this.props.user} />
				<ul>
				{ this.state.spending.map(spending => 
					<li>{spending.category}: {spending.amount}</li>
				)}
				</ul>
   			</div>
		);
	}
}

export default Spending;