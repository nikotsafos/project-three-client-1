import React, { Component } from 'react';
import BudgetCard from './BudgetCard';
import CurrentSpendingCard from './CurrentSpendingCard';
import SpendingItems from './components/SpendingItems';
import Adding from './components/Adding';
import DoughnutChart from './DoughnutChart';
import moment from 'moment';
import BarChart from './BarChart';
import CurrentAssetsCard from './CurrentAssetsCard';



class UserHome extends Component {	

  render() {


  	 let userBudget;
     if(this.props.user){
            userBudget = 
            	<div>
            		<DoughnutChart 
		      	   		housing={this.props.budget.housingBudget}
		      	   		transportation={this.props.budget.transportationBudget}
		      	   		entertainment={this.props.budget.entertainmentBudget}
		      	   		shopping={this.props.budget.shoppingBudget}
		      	   		food={this.props.budget.foodBudget}
		      	   		savings={this.props.budget.savingsBudget} />
		       	</div>

      } else {
          userBudget = <div>Set up your budget here</div>;
      } 

    return(
    	<div className="profile">
	       <h2> {moment().format('MMMM')} Overview</h2>
			   <CurrentAssetsCard user={this.props.user} />
	       <div className="budgetWrapper">
	      	  
	       		{userBudget}

	       		<BudgetCard  budget={this.props.budget} />

		       	<CurrentSpendingCard
		       		title="Current Spending"
		       		user={this.props.user} 
		       		budget={this.props.budget}/>

		    </div>
			 
		</div>

      );
  }
}

export default UserHome;
