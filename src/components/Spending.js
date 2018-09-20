import React, { Component } from 'react';
import SpendingItems from './SpendingItems.js';
import axios from 'axios';
import moment from 'moment';
import SpendingDetails from './SpendingDetails';

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
		// axios.get('http://localhost:3000/spending', this.props.user)
		// 	.then(res => {
		// 		const spending = res.data;
		// 		this.setState({ spending });
		// 	})
		axios.post('http://localhost:3000/spending/post', this.props.user)
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
		
// ----- NEW CODE -----
		// populate categories array
		this.state.spending.forEach(item => {
			if (!spendingCategories.includes(item.category)) {
				spendingCategories.push(item.category)
			}
		})
		
		let summarizedSpending = {};
		this.state.spending.forEach(item => {
			if (summarizedSpending[item.category]) {
				summarizedSpending[item.category].push({
					'description': item.description,
					'amount': item.amount,
					'date': item.date
				})
			} else {
				summarizedSpending[item.category] = [{
					'description': item.description,
					'amount': item.amount,
					'date': item.date
				}];
			}
		})

		spendingCategories.forEach(category => {
			if (!summarizedSpending[category]) {
				summarizedSpending[category] = [];
			}
		})
		console.log('summarizedSpending:', summarizedSpending);
// ----- NEW CODE -----

		this.state.spending.forEach( item => {
			if(item.category === "entertainment"){
				if(moment(item.date).format("MMMM") === "September") {
					entertainment_sep.push(item);
					entertainmentSep_total += item.amount;
					total_spending_sep += item.amount;
				} else if (moment(item.date).format("MMMM") === "August") {
					entertainment_aug.push(item);
					entertainmentAug_total += item.amount;
					total_spending_aug += item.amount;
				}
			}
		})
	//}

		const housing_sep = [];
		const housing_aug = [];
		var housingSep_total = 0;
		var housingAug_total = 0;
		this.state.spending.forEach( item => {
			if(item.category === "housing"){
				if(moment(item.date).format("MMMM") === "September") {
					housing_sep.push(item);
					housingSep_total += item.amount
					total_spending_sep += item.amount;
				} else if (moment(item.date).format("MMMM") === "August") {
					housing_aug.push(item);
					housingAug_total += item.amount
					total_spending_aug += item.amount;
				}
			}
		})

		const food_sep = [];
		const food_aug = [];
		var foodSep_total = 0;
		var foodAug_total = 0;
		this.state.spending.forEach( item => {
			if(item.category === "food"){
				if(moment(item.date).format("MMMM") === "September") {
					food_sep.push(item);
					foodSep_total += item.amount
					total_spending_sep += item.amount;
				} else if (moment(item.date).format("MMMM") === "August") {
					food_aug.push(item);
					foodAug_total += item.amount
					total_spending_aug += item.amount;
				}
			}
		})

		const shopping_sep = [];
		const shopping_aug = [];
		var shoppingSep_total = 0;
		var shoppingAug_total = 0;
		this.state.spending.forEach( item => {
			if(item.category === "shopping"){
				if(moment(item.date).format("MMMM") === "September") {
					shopping_sep.push(item);
					shoppingSep_total += item.amount;
					total_spending_sep += item.amount;
				} else if (moment(item.date).format("MMMM") === "August") {
					shopping_aug.push(item);
					shoppingAug_total += item.amount;
					total_spending_aug += item.amount;
				}
			}
		})

		const transportation_sep = [];
		const transportation_aug = [];
		var transportationSep_total = 0;
		var transportationAug_total = 0;
		this.state.spending.forEach( item => {
			if(item.category === "transportation"){
				if(moment(item.date).format("MMMM") === "September") {
					transportation_sep.push(item);
					transportationSep_total += item.amount;
					total_spending_sep += item.amount;
				} else if (moment(item.date).format("MMMM") === "August") {
					transportation_aug.push(item);
					transportationAug_total += item.amount;
					total_spending_aug += item.amount;
				}
			}
		})

		const savings_sep= [];
		const savings_aug= [];
		var savingsSep_total = 0;
		var savingsAug_total = 0;
		this.state.spending.forEach( item => {
			if(item.category === "savings"){
				if(moment(item.date).format("MMMM") === "September") {
					savings_sep.push(item);
					savingsSep_total += item.amount;
					total_spending_sep += item.amount;
				} else if (moment(item.date).format("MMMM") === "August") {
					savings_aug.push(item);
					savingsAug_total += item.amount;
					total_spending_aug += item.amount;
				}
			}
		})


		const entertainmentJSX_sep = entertainment_sep.map( spending => {
			return(		
				<div>				
					<p>Spending on: {spending.description}. Amount: ${spending.amount}. Date: {moment(spending.date).format("MMMM DD YYYY")} </p>			
				</div>
			)
		})
		const entertainmentJSX_aug= entertainment_aug.map( spending => {
			return(		
				<div>				
					<p>Spending on: {spending.description}. Amount: ${spending.amount}. Date: {moment(spending.date).format("MMMM DD YYYY")} </p>			

				</div>
			)
		})


		const housingJSX_sep = housing_sep.map( spending => {
			return(		
				<div>				
					<p>Spending on: {spending.description}. Amount: ${spending.amount}. Date: {moment(spending.date).format("MMMM DD YYYY")} </p>			
				</div>
			)
		})


		const housingJSX_aug = housing_aug.map( spending => {
			return(		
				<div>				
					<p>Spending on: {spending.description}. Amount: ${spending.amount}. Date: {moment(spending.date).format("MMMM DD YYYY")} </p>			
				</div>
			)
		})
		
		const foodJSX_sep = food_sep.map( spending => {
			return(		
				<div>				
					<p>Spending on: {spending.description}. Amount: ${spending.amount}. Date: {moment(spending.date).format("MMMM DD YYYY")} </p>			
				</div>
			)
		})

		const foodJSX_aug = food_aug.map( spending => {
			return(		
				<div>				
					<p>Spending on: {spending.description}. Amount: ${spending.amount}. Date: {moment(spending.date).format("MMMM DD YYYY")} </p>			
				</div>
			)
		})
		
		
		const shoppingJSX_sep = shopping_sep.map( spending => {
			return(		
				<div>				
					<p>Spending on: {spending.description}. Amount: ${spending.amount}. Date: {moment(spending.date).format("MMMM DD YYYY")} </p>			
				</div>
			)
		})

		const shoppingJSX_aug = shopping_aug.map( spending => {
			return(		
				<div>				
					<p>Spending on: {spending.description}. Amount: ${spending.amount}. Date: {moment(spending.date).format("MMMM DD YYYY")} </p>			
				</div>
			)
		})
						
		
		const transportationJSX_sep = transportation_sep.map( spending => {
			return(		
				<div>				
					<p>Spending on: {spending.description}. Amount: ${spending.amount}. Date: {moment(spending.date).format("MMMM DD YYYY")} </p>			
				</div>
			)
		})

		const transportationJSX_aug = transportation_aug.map( spending => {
			return(		
				<div>				
					<p>Spending on: {spending.description}. Amount: ${spending.amount}. Date: {moment(spending.date).format("MMMM DD YYYY")} </p>			


				</div>
			)
		})

		
		const savingsJSX_sep = savings_sep.map( spending => {
			return(		
				<div>				
					<p>Spending on: {spending.description}. Amount: ${spending.amount}. Date: {moment(spending.date).format("MMMM DD YYYY")} </p>			
				</div>
			)
		})

		const savingsJSX_aug = savings_aug.map( spending => {
			return(		
				<div>				
					<p>Spending on: {spending.description}. Amount: ${spending.amount}. Date: {moment(spending.date).format("MMMM DD YYYY")} </p>			

				</div>
			)
		})

		return(
			<div>
			
				<div>
					
					<SpendingItems user={this.props.user} />
				</div>

				<div>

					<SpendingDetails category='Housing' spending={summarizedSpending['housing']} />
					<SpendingDetails category='Food' spending={summarizedSpending['food']} />
					<SpendingDetails category='Tranportation' spending={summarizedSpending['transportation']} />
					<SpendingDetails category='Shopping' spending={summarizedSpending['shopping']} />
					<SpendingDetails category='Entertainment' spending={summarizedSpending['entertainment']} />
					<SpendingDetails category='Savings' spending={summarizedSpending['savings']} />

					<h2>{moment().format('MMMM')} Spending</h2>
					<h1>Housing</h1>
					{ housingJSX_sep }
					Total: ${housingSep_total}

					<h1>Food</h1>
					{ foodJSX_sep }
					Total: ${foodSep_total}


					<h1>Entertainment</h1>
					{ entertainmentJSX_sep }
					Total: ${entertainmentSep_total}

					<h1>Shopping</h1>

					{shoppingJSX_sep}
					Total: ${shoppingSep_total}	


					<h1>Transportation</h1>
					{transportationJSX_sep}
					Total: ${transportationSep_total}

					<h1>Savings</h1>
					{savingsJSX_sep}
					Total: ${savingsSep_total}
					<hr/>
					<h2>Total spending on September: ${total_spending_sep}</h2>

					<hr/>
					<h2>August Spending</h2>

					<h1>Housing</h1>
					{ housingJSX_aug }
					Total: ${housingAug_total}



					<h1>Food</h1>
					{ foodJSX_aug }
					Total: ${foodAug_total}

					<h1>Entertainment</h1>
					{ entertainmentJSX_aug }
					Total: ${entertainmentAug_total}

					<h1>Shopping</h1>
					{shoppingJSX_aug}
					Total: ${shoppingAug_total}

					<h1>Transportation</h1>
					{transportationJSX_aug}
					Total: ${transportationAug_total}

					<h1>Savings</h1>
					{savingsJSX_aug}
					Total: ${savingsAug_total}
					<hr/>
					<h2>Total Spending on August: ${total_spending_aug}</h2>
					<hr/>

					<br/><br/><br/><br/>	

				</div>


			</div>
		);
	}
}

export default Spending;
