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


		return(
			<div>
				<div>
				<h1>Adding your spending</h1>

				<SpendingItems user={this.props.user} />

			</div>
			<div>
				<ul>

				{ this.state.spending.map(spending =>
					<li>{spending.category}: {spending.amount}<button>Edit</button><button>Delete</button></li>
				)}

				</ul>
			</div>

   </div>

		);
	}
}

export default Spending;
