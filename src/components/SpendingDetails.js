import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
export default class SpendingDetails extends Component {


  handleDelete = (item) => {
  console.log('trying to delete', item)
  let token = localStorage.getItem('mernToken') || ''

  axios.delete('http://localhost:3000/money/delete',  {
    headers: { 'Authorization': `Bearer ${token}` },
    body: item
  })
  .then(item => {
  	console.log('result', item);
  })
  .catch(err => {
    console.log(item)
  	console.log('error', err);
  });
}

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

      const spendingItems12 = (spending) => {
      let arr12 = []
      for (let key in spending["December"]){
      arr12.push({month: "December", data: {key: key, data: spending['December'][key]}})
    }
      console.log('array of result: ', arr12);
      return arr12
    }

      const spendingItems11 = (spending) => {
      let arr11 = []
      for (let key in spending["November"]){
      arr11.push({month: "November", data: {key: key, data: spending['November'][key]}})
    }
      console.log('array of result: ', arr11);
      return arr11
    }

      const spendingItems10 = (spending) => {
      let arr10 = []
      for (let key in spending["October"]){
      arr10.push({month: "October", data: {key: key, data: spending['October'][key]}})
    }
      console.log('array of result: ', arr10);
      return arr10
    }

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

       const spendingItems7 = (spending) => {
      let arr7 = []
      for (let key in spending["July"]){
      arr7.push({month: "July", data: {key: key, data: spending['July'][key]}})
    }
      return arr7
    }

     const spendingItems6 = (spending) => {
      let arr6 = []
      for (let key in spending["June"]){
      arr6.push({month: "June", data: {key: key, data: spending['June'][key]}})
    }
      return arr6
    }

     const spendingItems5 = (spending) => {
      let arr5 = []
      for (let key in spending["May"]){
      arr5.push({month: "May", data: {key: key, data: spending['May'][key]}})
    }
      return arr5
    }

     const spendingItems4 = (spending) => {
      let arr4 = []
      for (let key in spending["April"]){
      arr4.push({month: "April", data: {key: key, data: spending['April'][key]}})
    }
      return arr4
    }

     const spendingItems3 = (spending) => {
      let arr3 = []
      for (let key in spending["March"]){
      arr3.push({month: "March", data: {key: key, data: spending['March'][key]}})
    }
      return arr3
    }

     const spendingItems2 = (spending) => {
      let arr2 = []
      for (let key in spending["February"]){
      arr2.push({month: "February", data: {key: key, data: spending['February'][key]}})
    }
      return arr2
    }

     const spendingItems1 = (spending) => {
      let arr1 = []
      for (let key in spending["January"]){
      arr1.push({month: "January", data: {key: key, data: spending['January'][key]}})
    }
      return arr1
    }



		return(
			<div>
        <h1>September</h1>
        {spendingItems9(spending).map(item => {
          return (
            <div>
              <h2>{item.data.key}</h2>
              {item.data.data.map(key => <p>Spending on: {key.description}. Amount: {key.amount}. Date: {key.date} id: {key.id}
              <input type='button' onClick={() => this.handleDelete(key.id)} value="Delete"/>
            </p>)}
            </div>
            )
        })}

        <hr/>

         <h1>August</h1>
        {spendingItems8(spending).map(item => {
          return (
            <div>
              <h2>{item.data.key}</h2>
              {item.data.data.map(key => <p>Spending on: {key.description}. Amount: {key.amount}. Date: {key.date}
              <input type='button' onClick={() => this.handleDelete()} value="Delete"/>
              </p>)}
            </div>
            )
        })}

        <hr/>

           <h1>July</h1>
        {spendingItems7(spending).map(item => {
          return (
            <div>
              <h2>{item.data.key}</h2>
              {item.data.data.map(key => <p>Spending on: {key.description}. Amount: {key.amount}. Date: {key.date}
              <input type='button' onClick={() => this.handleDelete()} value="Delete"/>
            </p>)}
            </div>
            )
        })}

        <hr/>

         <h1>June</h1>
        {spendingItems6(spending).map(item => {
          return (
            <div>
              <h2>{item.data.key}</h2>
              {item.data.data.map(key => <p>Spending on: {key.description}. Amount: {key.amount}. Date: {key.date}
              <input type='button' onClick={() => this.handleDelete()} value="Delete"/>
            </p>)}
            </div>
            )
        })}

        <hr/>

         <h1>May</h1>
        {spendingItems5(spending).map(item => {
          return (
            <div>
              <h2>{item.data.key}</h2>
              {item.data.data.map(key => <p>Spending on: {key.description}. Amount: {key.amount}. Date: {key.date}
              <input type='button' onClick={() => this.handleDelete()} value="Delete"/>
            </p>)}
            </div>
            )
        })}

        <hr/>

         <h1>April</h1>
        {spendingItems4(spending).map(item => {
          return (
            <div>
              <h2>{item.data.key}</h2>
              {item.data.data.map(key => <p>Spending on: {key.description}. Amount: {key.amount}. Date: {key.date}
              <input type='button' onClick={() => this.handleDelete()} value="Delete"/>
            </p>)}
            </div>
            )
        })}

        <hr/>

         <h1>March</h1>
        {spendingItems3(spending).map(item => {
          return (
            <div>
              <h2>{item.data.key}</h2>
              {item.data.data.map(key => <p>Spending on: {key.description}. Amount: {key.amount}. Date: {key.date}
              <input type='button' onClick={() => this.handleDelete()} value="Delete"/>
            </p>)}
            </div>
            )
        })}

        <hr/>

         <h1>February</h1>
        {spendingItems2(spending).map(item => {
          return (
            <div>
              <h2>{item.data.key}</h2>
              {item.data.data.map(key => <p>Spending on: {key.description}. Amount: {key.amount}. Date: {key.date}
              <input type='button' onClick={() => this.handleDelete()} value="Delete"/>
            </p>)}
            </div>
            )
        })}

        <hr/>

         <h1>January</h1>
        {spendingItems1(spending).map(item => {
          return (
            <div>
              <h2>{item.data.key}</h2>
              {item.data.data.map(key => <p>Spending on: {key.description}. Amount: {key.amount}. Date: {key.date}
              <input type='button' onClick={() => this.handleDelete()} value="Delete"/>
            </p>)}
            </div>
            )
        })}

        <hr/>
			</div>
		);
	}
}
