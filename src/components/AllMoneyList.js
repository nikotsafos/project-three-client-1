import React, { Component } from 'react';
import Adding from './Adding.js';
import axios from 'axios';
import moment from 'moment';
import SERVER_URL from '../constants/server';

class AllMoneyList extends Component {
	state = {
		allMoney: [],

	}

	// componentDidMount() {
	// 	axios.get('http://localhost:3000/money/all')
	// 		.then(res => {
	// 			const allMoney = res.data;
	// 			this.setState({ allMoney });
	// 		})
	// }


	componentDidMount() {

		let token = localStorage.getItem('mernToken') || ''
		console.log(token)
		axios.post('http://localhost:3000/money/all',  {
			headers: { 'Authorization': `Bearer ${token}` },
			body: this.state,

		})
		.then(res => {
				const allMoney = res.data;
				console.log('All Money in database ',allMoney);
				this.setState({ allMoney });
				
			})
	}

	render() {
		const moneyList = {
			December: [],
			November: [],
			October: [],
			September: {
				total: 0,
				value: []
			},
			August: {
				total: 0,
				value: []
			},
			July: [],
			June: [],
			May: [],
			April: [],
			March: [],
			Feb: [],
			January: []
		};
		const monthJSX = [];
		
		this.state.allMoney.map( money => {
			if (moment(money.date).format('MMMM') === 'January') {
				moneyList.January.push(money);
			}else if (moment(money.date).format('MMMM') === 'February') {
				moneyList.February.push(money);
			}else if (moment(money.date).format('MMMM') === 'March') {
				moneyList.March.push(money);
			}else if (moment(money.date).format('MMMM') === 'April') {
				moneyList.April.push(money);
			}else if (moment(money.date).format('MMMM') === 'May') {
				moneyList.May.push(money);
			}else if (moment(money.date).format('MMMM') === 'June') {
				moneyList.June.push(money);
			}else if (moment(money.date).format('MMMM') === 'July') {
				moneyList.July.push(money);
			}else if (moment(money.date).format('MMMM') === 'August') {
				moneyList.August.total += money.amount;
				moneyList.August.value.push(money);
			}else if (moment(money.date).format('MMMM') === 'September') {
				moneyList.September.total += money.amount;
				moneyList.September.value.push(money);
			}else if (moment(money.date).format('MMMM') === 'October') {
				moneyList.October.push(money);
			}else if (moment(money.date).format('MMMM') === 'November') {
				moneyList.November.push(money);
			}else if (moment(money.date).format('MMMM') === 'December') {
				moneyList.December.push(money);
			}
		});

			console.log('List of money adding: ', moneyList);
		

		monthJSX[0] = moneyList.September.value.map(money => {
			return(
				<p>
						Money from: {money.description}. Amount: {money.amount}. Date: {moment(money.date).calendar()}
						<button>Edit</button><button>Delete</button>
						</p>
						)})
		monthJSX[1] = moneyList.August.value.map(money => {
			return(
				<p>
						Money from: {money.description}. Amount: {money.amount}. Date: {moment(money.date).calendar()}
						<button>Edit</button><button>Delete</button>
						</p>
						)})

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


				<p>September Adding</p>
				{monthJSX[0]}
				<p>Total: {moneyList.September.total}</p>
				<p>August Adding</p>
				{monthJSX[1]}
				<p>Total: {moneyList.September.total}</p>
				<br/><br/><br/><br/>
			</div>

   </div>

		);
	}
}

export default AllMoneyList;
