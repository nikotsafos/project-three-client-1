import React, { Component } from 'react';
import Adding from './Adding.js';
import axios from 'axios';
import moment from 'moment';
import SERVER_URL from '../constants/server';

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

	handleDelete = (e) => {
  console.log('trying to delete')
  let token = localStorage.getItem('mernToken') || ''
  axios.post('http://localhost:3000/spending/delete',  {
    headers: { 'Authorization': `Bearer ${token}` },
    body: this.state
  })
  .then(result => {
  	console.log('result', result);
  })
  .catch(err => {
  	console.log('error');
  });
  }


	componentDidMount() {

		let token = localStorage.getItem('mernToken') || ''
		console.log(token)
		axios.post('http://localhost:3000/money/all',  {
			headers: { 'Authorization': `Bearer ${token}` },
			body: this.state,

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

				<Adding user={this.props.user} title={this.props.title} />

			</div>
			<div>

				<ul>
					{ this.state.allMoney.map(allMoney => <p>
						Money from: {allMoney.description}. Amount: {allMoney.amount}. Date: {moment(allMoney.date).calendar()}
						<input type='button' onClick={() => this.handleDelete()} value="Delete"/>
						</p>)}
				</ul>
			</div>

   </div>

		);
	}
}

export default AllMoneyList;
