import React, { Component } from 'react';
import BudgetCard from './BudgetCard';
import CurrentSpendingCard from './CurrentSpendingCard';
import SpendingItems from './components/SpendingItems';
import Adding from './components/Adding';
import DoughnutChart from './DoughnutChart';
import moment from 'moment';
import BarChart from './BarChart';



class UserHome extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	

  render() {

    return(
    	<div>
	       <h3> {moment().format('MMMM')} Overview</h3>
	       <div class="budgetWrapper">
	      	   <DoughnutChart 
	      	   		housing={this.props.budget.housingBudget}
	      	   		transportation={this.props.budget.transportationBudget}
	      	   		entertainment={this.props.budget.entertainmentBudget}
	      	   		shopping={this.props.budget.shoppingBudget}
	      	   		food={this.props.budget.foodBudget}
	      	   		savings={this.props.budget.savingsBudget} />

		       <BudgetCard  budget={this.props.budget}
		       	/>
		       <CurrentSpendingCard
		       		title="Current Spending"
		       		user={this.props.user}

		      />
		      </div>
		       <div class="formWrapper">
		       	   <SpendingItems user={this.props.user} />
		       	   <Adding user={this.props.user} />
			   </div>
		    </div>

      );
  }
}

export default UserHome;
