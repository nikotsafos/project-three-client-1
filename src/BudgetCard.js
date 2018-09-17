import React, { Component } from 'react';

const allItems = [
{	name: 'housing',
	amt: 1200,
	id: 0	},
{	name: 'food',
	amt: 600,
	id: 1	},
{	name: 'entertainment',
	amt: 120,
	id: 2	},
{	name: 'shopping',
	amt: 220,
	id: 3	},
{	name: 'transportation',
	amt: 150,
	id: 4	},
{	name: 'savings',
	amt: 210,
	id: 5	}

]
var total;

class BudgetCard extends Component {
  render() {
    return(
    	<div>
        	<h3>Monthly Budget</h3>
        	{allItems.map(item => {
        		return <p> {item.name}: {item.amt} </p>
        	})}
		
			<p>total: {total = allItems[0].amt + allItems[1].amt + allItems[2].amt + allItems[3].amt + allItems[4].amt + allItems[5].amt} </p>


        </div>
      );
  }
}

export default BudgetCard;
