import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import SERVER_URL from './constants/server';

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
		axios.post(SERVER_URL + '/money/all/post', this.props.user)
			.then(res => {
				console.log("ASSETS DATA", res.data);
				const allMoney = res.data;
				this.setState({ allMoney });
			})
	}

	render() {

		 const income = [];
		 var totalIncome = 0;

		 this.state.allMoney.forEach(i =>{
      		 { income.push(i.amount) }
      		})

      	income.reduce((total, inc) => totalIncome = total + inc, 0);

		return(
			
			<div>

				<h2>{`Monthly Income to Date: $${totalIncome}`}</h2>

			</div>
			


		);
	}
}

export default AllMoneyList;
