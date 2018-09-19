

import React, { Component } from 'react';
import Adding from './Adding.js';
import axios from 'axios';

class AllMoneyList extends Component {
	state = {
		allMoney: []
	}

	componentDidMount() {
		axios.get('http://localhost:3000/money/all')
			.then(res => {
				const allMoney = res.data;
				this.setState({ allMoney });
			})
	}

	render() {


		return(
			<div>
				<div>

				<Adding user={this.props.user} />

			</div>
			<div>
				<ul>
					{ this.state.allMoney.map(allMoney => <li>{allMoney.category}: {allMoney.amount}</li>)}
				</ul>
			</div>

   </div>

		);
	}
}

export default AllMoneyList;
