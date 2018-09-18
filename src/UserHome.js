import React, { Component } from 'react';
import BudgetCard from './BudgetCard';
import CurrentSpendingCard from './CurrentSpendingCard';
import IncomeForm from './IncomeForm';
import ExpenditureForm from './ExpenditureForm';
import SpendingItems from './components/SpendingItems';
import Adding from './components/Adding';

const myExpenses = [
{	name: 'housing',
	amt: 1200,
	id: 0	},
{	name: 'food',
	amt: 300,
	id: 1	},
{	name: 'entertainment',
	amt: 80,
	id: 2	},
{	name: 'shopping',
	amt: 240,
	id: 3	},
{	name: 'transportation',
	amt: 100,
	id: 4	},
{	name: 'savings',
	amt: 200,
	id: 5	},

]


class UserHome extends Component {
	constructor(props) {
		super(props);
		this.state = {
			allExpenses: [],
			category: '',
			newExpense: '',

		}
	}

	componentDidMount() {
		this.setState({
			allExpenses: myExpenses
		}, () => console.log("THIS STATE", this.state.totalExpenses))
	}

	handleChange = e => {

		console.log("E", e.target);
		this.setState({
			newExpense: e.target.value,

		})
	}


	 handleAddExpense = e => {
	    const currentExpenses = this.state.totalExpenses;
	    const expenseName = this.state.newExpense;
	    const category = this.state.category;
	    const newExpense = {
      		name: expenseName,
      		category: this.state.category
    	}
	    console.log(newExpense);
	    currentExpenses.push(newExpense);
    	this.setState({
	      newExpense: '',
	      myExpenses: currentExpenses
    	});

    }

  render() {

    return(
    	<div>
	       <h1> HOME </h1>
	       <div class="wrapper">
		       <BudgetCard  
		       	/>
		       <CurrentSpendingCard 
		       		title="Current Spending"
		       		array={myExpenses} 
		      />
		       <div class="forms">
		       	   <SpendingItems user={this.props.user} />
		       	   <Adding user={this.props.user} />
			   </div>
		    </div>

	     </div>
      );
  }
}

export default UserHome;
