import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';


export default class CurrentSpendingCard extends Component {
  state = {
    spending: []
  }

  componentDidMount() {
    axios.post('http://localhost:3000/spending/post')
      .then(res => {
        const spending = res.data;
        this.setState({ spending });
      })
  }


  render() {
		const transportation = [];
    const housing = [];
    const food = [];
    const shopping = [];
    const entertainment = [];
    const allCosts = [];
    var totalSpending = [];

    this.state.spending.forEach(c =>{
      if (c.category === 'transportation') {
        transportation.push(c.amount)
      } else if (c.category == 'housing') {
        housing.push(c.amount)
      } else if (c.category == 'food') {
        food.push(c.amount)
      } else if (c.category == 'shopping') {
        shopping.push(c.amount)
      } else if (c.category == 'entertainment') {
        entertainment.push(c.amount)}
  });

    this.state.spending.forEach(i => {
        allCosts.push(i.amount)
    })

  allCosts.reduce((total, inc) => totalSpending = total + inc, 0);


  console.log(food)


    return (

      <div>
      <h3>Current Spending </h3>
       <p>Housing: {housing.reduce((total, inc) => {return total + inc}, 0 )}</p>
       <p>Food: {food.reduce((total, inc) => {return total + inc}, 0 )}</p>
       <p>Transportation: {transportation.reduce((total, inc) => {return total + inc}, 0 )}</p>
       <p>Entertainment: {entertainment.reduce((total, inc) => {return total + inc}, 0 )}</p>
       <p>Shopping: {shopping.reduce((total, inc) => {return total + inc}, 0 )}</p>
        <p>Total: {totalSpending} </p>

      </div>

    )
  }
}
