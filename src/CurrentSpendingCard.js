import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

// const allItems = [
// {	name: 'housing',
// 	amt: 1200,
// 	id: 0	},
// {	name: 'food',
// 	amt: 300,
// 	id: 1	},
// {	name: 'entertainment',
// 	amt: 80,
// 	id: 2	},
// {	name: 'shopping',
// 	amt: 240,
// 	id: 3	},
// {	name: 'transportation',
// 	amt: 100,
// 	id: 4	},
// {	name: 'savings',
// 	amt: 200,
// 	id: 5	},
//
// ]
//
// var total;

// const CurrentSpendingCard = props => {
//
//     return(
//     	<div>
//         	<h3>Current Spending</h3>
//         	{allItems.map(item => {
//         		return <p> {item.name}: {item.amt} </p>
//         	})}
//         	<p>total: {total = allItems[0].amt + allItems[1].amt + allItems[2].amt + allItems[3].amt + allItems[4].amt + allItems[5].amt} </p>
//
//         </div>
//       );
//   }
//
// export default CurrentSpendingCard;

export default class CurrentSpendingCard extends Component {
  state = {
    spending: []
  }

  componentDidMount() {
    axios.get('http://localhost:3000/spending')
      .then(res => {
        const spending = res.data;
        this.setState({ spending });
      })
  }


  render() {
			///reduce method

    return (
      <ul>
        { this.state.spending.map(spending => <li>-{spending.amount} {spending.category} {moment(spending.date).calendar()}</li>)}
      </ul>
    )
  }
}
