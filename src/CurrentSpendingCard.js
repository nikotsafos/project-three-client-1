import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import DoughnutChart from './DoughnutChart';
import ComparisonChart from './ComparisonChart';
import SERVER_URL from './constants/server';


export default class CurrentSpendingCard extends Component {
  state = {
    spending: []
  }

  componentDidMount() {
    console.log("BUDGET ON CURRENT SPENDING", this.props.budget);
    let token = localStorage.getItem('mernToken') || ''
		axios.post(SERVER_URL + '/spending/post',  {
			headers: { 'Authorization': `Bearer ${token}` }
		})

      .then(res => {
        console.log("RES.DATA IS =====>",res.data);
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
    const savings = [];
    const allCosts = [];
    var tSum = 0;
    var hSum = 0;
    var fSum = 0;
    var shSum = 0;
    var eSum = 0;
    var saSum = 0;
    var totalSpending = [];

    this.state.spending.forEach(c =>{
      if (c.category === 'transportation' && moment(c.date).format("MMMM") === moment().format('MMMM')) {
        transportation.push(c.amount)
      } else if (c.category === 'housing' && moment(c.date).format("MMMM") === moment().format('MMMM')) {
        housing.push(c.amount)
      } else if (c.category === 'food'&& moment(c.date).format("MMMM") === moment().format('MMMM')) {
        food.push(c.amount)
      } else if (c.category === 'shopping' && moment(c.date).format("MMMM") === moment().format('MMMM')) {
        shopping.push(c.amount)
      } else if (c.category === 'savings' && moment(c.date).format("MMMM") === moment().format('MMMM')) {
        savings.push(c.amount)
      } else if (c.category === 'entertainment' && moment(c.date).format("MMMM") === moment().format('MMMM')) {
        entertainment.push(c.amount)}
  });

    this.state.spending.forEach(i => {
        if(moment(i.date).format("MMMM") === moment().format('MMMM')){
         allCosts.push(i.amount);
        }
    })

  allCosts.reduce((total, inc) => totalSpending = total + inc, 0);

  hSum = housing.reduce((total, inc) => {return total + inc}, 0 );
  tSum = transportation.reduce((total, inc) => {return total + inc}, 0 );
  fSum = food.reduce((total, inc) => {return total + inc}, 0 );
  shSum = shopping.reduce((total, inc) => {return total + inc}, 0 );
  eSum = entertainment.reduce((total, inc) => {return total + inc}, 0 );
  saSum = savings.reduce((total, inc) => {return total + inc}, 0 );


  console.log(food);


    return (
      <div className="current-wrapper">
        <div>
          <DoughnutChart 
              housing={hSum}
              transportation={tSum}
              entertainment={eSum}
              shopping={shSum}
              food={fSum}
              savings={saSum}/>
        </div>
        <div>
          <h3>Current Spending </h3>
          <tbody>
             <tr> <td>Housing</td> <td>{hSum}</td> <td className="Housing"></td></tr>
             <tr> <td>Food</td> <td>{fSum}</td> <td className="Food"></td></tr>
             <tr> <td>Transportation</td>  <td>{tSum}</td> <td className="Transportation"></td></tr>
             {/*<p>Transportation: {transportation.reduce((total, inc) => {return total + inc}, 0 )}</p>*/}
             <tr><td>Entertainment</td> <td>{eSum}</td> <td className="Entertainment"></td></tr>
             <tr><td>Shopping</td> <td>{shSum}</td> <td className="Shopping"></td></tr>
             <tr><td>Savings</td> <td>{saSum}</td> <td className="Savings"></td></tr>
              <tr className="bold"><td>Total:</td> <td>${totalSpending} </td></tr>
          </tbody>
        </div>
        <ComparisonChart 
            budget={this.props.budget}
            housing={hSum}
            transportation={tSum}
            entertainment={eSum}
            shopping={shSum}
            food={fSum}
            savings={saSum}/>
      </div>
      
    )
  }
}
