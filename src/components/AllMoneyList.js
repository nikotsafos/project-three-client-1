import React, { Component } from 'react';
import Adding from './Adding.js';
import axios from 'axios';
import moment from 'moment';

class AllMoneyList extends Component {
	state = {
		allMoney: []
	}

	// componentDidMount() {
	// 	axios.get('http://localhost:3000/money/all')
	// 		.then(res => {
	// 			const allMoney = res.data;
	// 			this.setState({ allMoney });
	// 		})
	// }

	componentDidMount() {
		let token = localStorage.getItem('mernToken')
		axios.post('http://localhost:3000/money/all/post',  {
			headers: { 'Authorization': `Bearer ${token}` }
		})
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
					{ this.state.allMoney.map(allMoney => <p>
						Money from: {allMoney.description}. Amount: {allMoney.amount}. Date: {moment(allMoney.date).calendar()}   
						<button>Edit</button><button>Delete</button>
						</p>)}
				</ul>
			</div>

   </div>

		);
	}
}

export default AllMoneyList;
