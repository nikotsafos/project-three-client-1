import React, { Component } from 'react';

export default class SpendingDetails extends Component {

  render() {
// 		var month_list = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];

// 		const month = 'December';
// 		var months = [];

// 		switch(month){
//   			case 'January':
//      			months = month_list.slice(0,1);
//       			break;
//   			case 'February':
//       			months = month_list.slice(0,2);
//       			break;
//   			case 'March':
//   				months = month_list.slice(0,3);
//       			break;
//   case 'April':
//   months = month_list.slice(0,4);
//       break;
//   case 'May':
//   months = month_list.slice(0,5);
//       break;
//   case 'June':
//   months = month_list.slice(0,6);
//       break;
//   case 'July':
//   months = month_list.slice(0,7);
//       break;
//   case 'August':
//   months = month_list.slice(0,8);
//       break;
//   case 'September':
//   months = month_list.slice(0,9);
//       break;
//   case 'October':
//   months = month_list.slice(0,10);
//       break;
//   case 'November':
//   months = month_list.slice(0,11);
//       break;
//   case 'December':
//   months = month_list.slice(0,12);
//       break;
//     default:
//       break;
// }

// console.log(months);
    let spending = this.props.spendingFunction();
    // console.log('spendingByMonthTest:', spendingByMonthTest);
    // console.log('spendingByMonth at September key:', spendingByMonthTest['September']);

    // loop through spendingByMonth object. at each key, print <h1> displaying the key (month), 
    // and loop through key value array, printing <h1> for category and <p> for spending details.
    const spendingItems = (spending) => {
      let arr = []
      console.log('spendingItems function');
      console.log('spending:', spending);

      for (let key in spending) {
        console.log('key1 from spending ',key)
        for (let key2 in spending[key]) {
          console.log('key2 from spending[key] ' , key2)
          arr.push({month: key + ' ' + key2, data: spending[key][key2]})
        }
      }
      console.log(arr)
      return arr
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
        {spendingItems(spending).map(item => {
          return (
            <div>
              <h3>{item.month}</h3>
              {
                item.data.map(point => {
                  return <p>{point.description} - {point.amount}</p>
                })
              }
            </div>
            )
        })}
			</div>
		);
	}
}