import React, { Component } from 'react';
import SpendingItems from './SpendingItems.js';
import axios from 'axios';

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
		this.state.spending.forEach( item => {
			if(item.category === "entertainment"){
				entertainment.push(item);
			}
		})
		const entertainmentJSX = entertainment.map( spending => {
			return(		
				<div>				
					<p>Spending on: {spending.description}. Amount: ${spending.amount}. Date: {spending.date} </p>			
				</div>
			)
		})

		const housing = [];
		this.state.spending.forEach( item => {
			if(item.category === "housing"){
				housing.push(item);
			}
		})
		const housingJSX = housing.map( spending => {
			return(		
				<div>				
					<p>Spending on: {spending.description}. Amount: ${spending.amount}. Date: {spending.date} </p>			
				</div>
			)
		})
				
		const food = [];
		this.state.spending.forEach( item => {
			if(item.category === "food"){
				food.push(item);
			}
		})
		const foodJSX = food.map( spending => {
			return(		
				<div>				
					<p>Spending on: {spending.description}. Amount: ${spending.amount}. Date: {spending.date} </p>			
				</div>
			)
		})
		
		const shopping = [];
		this.state.spending.forEach( item => {
			if(item.category === "shopping"){
				shopping.push(item);
			}
		})
		const shoppingJSX = shopping.map( spending => {
			return(		
				<div>				
					<p>Spending on: {spending.description}. Amount: ${spending.amount}. Date: {spending.date} </p>			
				</div>
			)
		})
						
		const transportation = [];
		this.state.spending.forEach( item => {
			if(item.category === "transportation"){
				transportation.push(item);
			}
		})
		const transportationJSX = transportation.map( spending => {
			return(		
				<div>				
					<p>Spending on: {spending.description}. Amount: ${spending.amount}. Date: {spending.date} </p>			
				</div>
			)
		})

		const savings= [];
		this.state.spending.forEach( item => {
			if(item.category === "savings"){
				savings.push(item);
			}
		})
		const savingsJSX = savings.map( spending => {
			return(		
				<div>				
					<p>Spending on: {spending.description}. Amount: ${spending.amount}. Date: {spending.date} </p>			
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

					<h1>Food</h1>
					{foodJSX }

					<h1>Entertainment</h1>
					{entertainmentJSX}

					<h1>Shopping</h1>
					{shoppingJSX}	

					<h1>Transportation</h1>
					{transportationJSX}

					<h1>Savings</h1>
					{savingsJSX}

					<br/><br/><br/><br/>		
				</div>

			</div>
		);
	}
}

export default Spending;
