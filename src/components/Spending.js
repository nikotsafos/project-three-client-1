import React, { Component } from 'react';
import SpendingItems from './SpendingItems.js';
import axios from 'axios';
import SpendingDetails from './SpendingDetails';
import SERVER_URL from '../constants/server';

let spendingCategories = ["housing", "food", "transportation", "shopping", "entertainment", "savings"];
let spendingArr = [];



class Spending extends Component {
	state = {
		spending: [],
		entertainment: '',
		housing: '',
		food: '',
		shopping: '',
		savings: ''
	}

	componentDidMount() {

		console.log("DO WE HAVE A USER??", this.props.user);

		let token = localStorage.getItem('mernToken') || ''
		axios.post(SERVER_URL + '/spending/post',  {
			headers: { 'Authorization': `Bearer ${token}` }
		}, this.state)

			.then(res => {
				const spending = res.data;
				this.setState({ spending });
			})
	}


	render() {
		var total_spending_sep= 0;
		var total_spending_aug= 0;
		const entertainment_sep = [];
		const entertainment_aug = [];
	//	const entertainment_month = [];
		var entertainmentSep_total = 0;
		var entertainmentAug_total = 0;
	//	for (let i = 0; i< month; i++ ){

		console.log("want to see array spending ",this.state.spending);

		const months = ['January', 'February', 'March', 'April', 'May', 'June',
		'July', 'August', 'September', 'October', 'November', 'December'];

		const separateMonths = (data) => {
  			let obj = formatObject();
  			data.forEach(item => {
    			let month = (new Date(item.date)).toLocaleString(
      				'en-us', {month: 'long'})
    			obj[month].push(item)
  			})

  			return groupSpending(obj)
		}

		const formatObject = () => {
  			let obj = {}
  			months.forEach(m => {
    			obj[m] = []
  			})
  			return obj
		}

		const groupSpending = (obj) => {
  			for (let key in obj){
				let summarizedSpending = {};
				obj[key].forEach(item => {
					if (!spendingCategories.includes(item.category)) {
						spendingCategories.push(item.category)
					}
				})

			 	obj[key].forEach(item => {
					if (summarizedSpending[item.category]) {
						summarizedSpending[item.category].push({
							'description': item.description,
							'amount': item.amount,
							'date': item.date,
							'id': item._id
						})
					} else {
						summarizedSpending[item.category] = [{
							'description': item.description,
							'amount': item.amount,
							'date': item.date,
							'id': item._id
						}];
					}
				})
				obj[key] = summarizedSpending;
			}

			console.log('obj:', obj)
			return obj;
		}


		return(
			<div>
				<div>

					<SpendingItems user={this.props.user} title={this.props.title} />
				</div>
				<div>

					<SpendingDetails spendingFunction={() => separateMonths(this.state.spending)} />
					<br/><br/><br/><br/>

				</div>
			</div>
		);
	}
}

export default Spending;
