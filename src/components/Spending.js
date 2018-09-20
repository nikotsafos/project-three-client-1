import React, { Component } from 'react';
import SpendingItems from './SpendingItems.js';
import axios from 'axios';
import moment from 'moment';

class Spending extends Component {
	state = {
		spending: [],
	}

	componentDidMount() {
		axios.get('http://localhost:3000/spending')
			.then(res => {
				const spending = res.data;
				this.setState({ spending });
			})
	}

	render() {
		const entertainment = [];
		var entertainment_total = 0;
		this.state.spending.forEach( item => {
			if(item.category === "entertainment"){
				entertainment.push(item);
				entertainment_total += item.amount
			}
		})
		const entertainmentJSX = entertainment.map( spending => {
			return(		
				<div>				
					<p>Spending on: {spending.description}. Amount: ${spending.amount}. Date: {moment(spending.date).calendar()} </p>			
				</div>
			)
		})

		const housing = [];
		var housing_total = 0;
		this.state.spending.forEach( item => {
			if(item.category === "housing"){
				housing.push(item);
				housing_total += item.amount
			}
		})
		const housingJSX = housing.map( spending => {
			return(		
				<div>				
					<p>Spending on: {spending.description}. Amount: ${spending.amount}. Date: {moment(spending.date).calendar()} </p>			
				</div>
			)
		})
				
		const food = [];
		var food_total = 0;
		this.state.spending.forEach( item => {
			if(item.category === "food"){
				food.push(item);
				food_total += item.amount
			}
		})
		const foodJSX = food.map( spending => {
			return(		
				<div>				
					<p>Spending on: {spending.description}. Amount: ${spending.amount}. Date: {moment(spending.date).calendar()} </p>			
				</div>
			)
		})
		
		const shopping = [];
		var shopping_total = 0;
		this.state.spending.forEach( item => {
			if(item.category === "shopping"){
				shopping.push(item);
				shopping_total += item.amount
			}
		})
		const shoppingJSX = shopping.map( spending => {
			return(		
				<div>				
					<p>Spending on: {spending.description}. Amount: ${spending.amount}. Date: {moment(spending.date).calendar()} </p>			
				</div>
			)
		})
						
		const transportation = [];
		var transportation_total = 0;
		this.state.spending.forEach( item => {
			if(item.category === "transportation"){
				transportation.push(item);
				transportation_total += item.amount
			}
		})
		const transportationJSX = transportation.map( spending => {
			return(		
				<div>				
					<p>Spending on: {spending.description}. Amount: ${spending.amount}. Date: {moment(spending.date).calendar()} </p>			
				</div>
			)
		})

		const savings= [];
		var savings_total = 0;
		this.state.spending.forEach( item => {
			if(item.category === "savings"){
				savings.push(item);
				savings_total += item.amount
			}
		})
		const savingsJSX = savings.map( spending => {
			return(		
				<div>				
					<p>Spending on: {spending.description}. Amount: ${spending.amount}. Date: {moment(spending.date).calendar()} </p>			
				</div>
			)
		})

		return(
			<div>
				<div>
					<h1>Adding your spending</h1>
					<SpendingItems user={this.props.user} />
				</div>

				<div>
					<h1>Housing</h1>
					{housingJSX }
					Total: ${housing_total}

					<h1>Food</h1>
					{foodJSX }
					Total: ${food_total}


					<h1>Entertainment</h1>
					{entertainmentJSX}
					Total: ${entertainment_total}

				{ this.state.spending.map(spending =>
					<li>-{spending.amount} {spending.description} {spending.category} {moment(spending.date).calendar()}<button>Edit</button><button>Delete</button></li>
				)}


					<h1>Shopping</h1>
					{shoppingJSX}
					Total: ${shopping_total}	

					<h1>Transportation</h1>
					{transportationJSX}
					Total: ${transportation_total}

					<h1>Savings</h1>
					{savingsJSX}
					Total: ${savings_total}

					<br/><br/><br/><br/>		
				</div>

			</div>
		);
	}
}

export default Spending;
