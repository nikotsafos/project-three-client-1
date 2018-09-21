import React, { Component } from 'react';
import moment from 'moment';
export default class SpendingDetails extends Component {

  render() {
		var month_list = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];

		const month = moment().format("MMMM");
		var months = [];

		switch(month){
  			case 'January':
     			  months = month_list.slice(0,1);
      			break;
  			case 'February':
      			months = month_list.slice(0,2);
      			break;
  			case 'March':
  				  months = month_list.slice(0,3);
      			break;
        case 'April':
            months = month_list.slice(0,4);
            break;
        case 'May':
            months = month_list.slice(0,5);
            break;
        case 'June':
            months = month_list.slice(0,6);
            break;
        case 'July':
            months = month_list.slice(0,7);
            break;
        case 'August':
            months = month_list.slice(0,8);
            break;
        case 'September':
            months = month_list.slice(0,9);
            break;
        case 'October':
            months = month_list.slice(0,10);
            break;
        case 'November':
            months = month_list.slice(0,11);
            break;
        case 'December':
            months = month_list.slice(0,12);
            break;
        default:
            break;
}


    let spending = this.props.spendingFunction();
      const spendingItems9 = (spending) => {
      let arr9 = []
      for (let key in spending["September"]){
      arr9.push({month: "September", data: {key: key, data: spending['September'][key]}})
    }
      console.log('array of result: ', arr9);
      return arr9
    }

      const spendingItems8 = (spending) => {
      let arr8 = []
      for (let key in spending["August"]){
      arr8.push({month: "August", data: {key: key, data: spending['August'][key]}})
    }
      console.log('array of result: ', arr8);
      return arr8
    }

        // items += (<h3>key</h3>)
        // console.log(key)
        // for (let key2 in spending[key]) {
        //   items += <div><h1>TEST</h1><h1>
        //   items += key2
        //   items += </h1><p>description</p><p>amount</p><p>date</p></div>
        // }
        // items += </div>
  //   let spendingItems = this.props.spending.map(item => {
		// 	return (
		// 		{<p>Spending on: {item.description}. Amount: ${item.amount}. Date: {item.date}</p>}
		// 	)
		// })
		return(
			<div>
        <h1>September</h1>
        {spendingItems9(spending).map(item => {
          return (
            <div>
              <h2>{item.data.key}</h2>
              {item.data.data.map(key => <p>Spending on: {key.description}. Amount: {key.amount}. Date: {key.date}</p>)}              
            </div>
            )
        })}

        <hr/>

           <h1>August</h1>
        {spendingItems8(spending).map(item => {
          return (
            <div>
              <h2>{item.data.key}</h2>
              {item.data.data.map(key => <p>Spending on: {key.description}. Amount: {key.amount}. Date: {key.date}</p>)}              
            </div>
            )
        })}
     
			</div>
		);
	}
}