import React, { Component } from 'react';
import Adding from './Adding.js';
import axios from 'axios';
import moment from 'moment';
import SERVER_URL from '../constants/server';

class AllMoneyList extends Component {
	state = {
		allMoney: [],
	}
	componentDidMount() {
		let token = localStorage.getItem('mernToken') || ''
		console.log(token)
		axios.post('http://localhost:3000/money/all',  {
			headers: { 'Authorization': `Bearer ${token}` },
			body: this.state,
		}).then(res => {
				const allMoney = res.data;
				console.log('All Money in database ',allMoney);
				this.setState({ allMoney });				
			})
	}
	render() {
		const moneyList = {December:{total:0,value:[]},November:{total:0,value:[]},October:{total:0,value:[]},
			September:{total:0,value:[]},August:{total:0,value:[]},July:{total:0,value:[]},June:{total:0,value:[]},
			May:{total:0,value:[]},April:{total:0,value:[]},March:{total:0,value:[]},February:{total:0,value:[]},January:{total:0,value:[]}
		};
		const monthJSX = [];
		
		this.state.allMoney.map( money => {
			if (moment(money.date).format('MMMM') === 'January') {
				moneyList.January.total += money.amount;
				moneyList.January.value.push(money);
			}else if (moment(money.date).format('MMMM') === 'February') {
				moneyList.February.total += money.amount;
				moneyList.February.value.push(money);
			}else if (moment(money.date).format('MMMM') === 'March') {
				moneyList.March.total += money.amount;
				moneyList.March.value.push(money);
			}else if (moment(money.date).format('MMMM') === 'April') {
				moneyList.April.total += money.amount;
				moneyList.April.value.push(money);
			}else if (moment(money.date).format('MMMM') === 'May') {
				moneyList.May.total += money.amount;
				moneyList.May.value.push(money);
			}else if (moment(money.date).format('MMMM') === 'June') {
				moneyList.June.total += money.amount;
				moneyList.June.value.push(money);
			}else if (moment(money.date).format('MMMM') === 'July') {
				moneyList.July.total += money.amount;
				moneyList.July.value.push(money);
			}else if (moment(money.date).format('MMMM') === 'August') {
				moneyList.August.total += money.amount;
				moneyList.August.value.push(money);
			}else if (moment(money.date).format('MMMM') === 'September') {
				moneyList.September.total += money.amount;
				moneyList.September.value.push(money);
			}else if (moment(money.date).format('MMMM') === 'October') {
				moneyList.October.total += money.amount;
				moneyList.October.value.push(money);
			}else if (moment(money.date).format('MMMM') === 'November') {
				moneyList.November.total += money.amount;
				moneyList.November.value.push(money);
			}else if (moment(money.date).format('MMMM') === 'December') {
				moneyList.December.total += money.amount;
				moneyList.December.value.push(money);
			}
		});
		monthJSX[0] = moneyList.January.value.map(money => {
			return(
				<p>
						Money from: {money.description}. Amount: {money.amount}. Date: {moment(money.date).calendar()}
						<button>Edit</button><button>Delete</button>
						</p>
						)})
		monthJSX[1] = moneyList.February.value.map(money => {
			return(
				<p>
						Money from: {money.description}. Amount: {money.amount}. Date: {moment(money.date).calendar()}
						<button>Edit</button><button>Delete</button>
						</p>
						)})
		monthJSX[2] = moneyList.March.value.map(money => {
			return(
				<p>
						Money from: {money.description}. Amount: {money.amount}. Date: {moment(money.date).calendar()}
						<button>Edit</button><button>Delete</button>
						</p>
						)})
		monthJSX[3] = moneyList.April.value.map(money => {
			return(
				<p>
						Money from: {money.description}. Amount: {money.amount}. Date: {moment(money.date).calendar()}
						<button>Edit</button><button>Delete</button>
						</p>
						)})
		monthJSX[4] = moneyList.May.value.map(money => {
			return(
				<p>
						Money from: {money.description}. Amount: {money.amount}. Date: {moment(money.date).calendar()}
						<button>Edit</button><button>Delete</button>
						</p>
						)})
		monthJSX[5] = moneyList.June.value.map(money => {
			return(
				<p>
						Money from: {money.description}. Amount: {money.amount}. Date: {moment(money.date).calendar()}
						<button>Edit</button><button>Delete</button>
						</p>
						)})
		monthJSX[6] = moneyList.July.value.map(money => {
			return(
				<p>
						Money from: {money.description}. Amount: {money.amount}. Date: {moment(money.date).calendar()}
						<button>Edit</button><button>Delete</button>
						</p>
						)})
		monthJSX[7] = moneyList.August.value.map(money => {
			return(
				<p>
						Money from: {money.description}. Amount: {money.amount}. Date: {moment(money.date).calendar()}
						<button>Edit</button><button>Delete</button>
						</p>
						)})
		monthJSX[8] = moneyList.September.value.map(money => {
			return(
				<p>
						Money from: {money.description}. Amount: {money.amount}. Date: {moment(money.date).calendar()}
						<button>Edit</button><button>Delete</button>
						</p>
						)})
		monthJSX[9] = moneyList.October.value.map(money => {
			return(
				<p>
						Money from: {money.description}. Amount: {money.amount}. Date: {moment(money.date).calendar()}
						<button>Edit</button><button>Delete</button>
						</p>
						)})
		monthJSX[10] = moneyList.November.value.map(money => {
			return(
				<p>
						Money from: {money.description}. Amount: {money.amount}. Date: {moment(money.date).calendar()}
						<button>Edit</button><button>Delete</button>
						</p>
						)})
		monthJSX[11] = moneyList.December.value.map(money => {
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
				<h2>September Adding</h2>
				{monthJSX[8]}
				<h3>Total: ${moneyList.September.total}</h3>
				<hr/>
				<h2>August Adding</h2>
				{monthJSX[7]}
				<h3>Total: ${moneyList.August.total}</h3>
				<hr/>
				<h2>July Adding</h2>
				{monthJSX[6]}
				<h3>Total: ${moneyList.July.total}</h3>
				<hr/>
				<h2>June Adding</h2>
				{monthJSX[5]}
				<h3>Total: ${moneyList.June.total}</h3>
				<hr/>
				<h2>May Adding</h2>
				{monthJSX[4]}
				<h3>Total: ${moneyList.May.total}</h3>
				<hr/>
				<h2>April Adding</h2>
				{monthJSX[3]}
				<h3>Total: ${moneyList.April.total}</h3>
				<hr/>
				<h2>March Adding</h2>
				{monthJSX[2]}
				<h3>Total: ${moneyList.March.total}</h3>
				<hr/>
				<h2>February Adding</h2>
				{monthJSX[1]}
				<h3>Total: ${moneyList.February.total}</h3>
				<hr/>
				<h2>Janruary Adding</h2>
				{monthJSX[0]}
				<h3>Total: ${moneyList.January.total}</h3>
				<hr/>
				<br/><br/><br/><br/>
			</div>

   </div>
		);
	}
}
export default AllMoneyList;
