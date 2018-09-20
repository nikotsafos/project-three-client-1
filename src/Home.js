import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return(
    	<div className="home-page">
    		<h1 className="title">Ginkgo</h1>
    		<h4 className="tag-line">simple budgeting to help your savings grow </h4> 
    		 <span className="links">
	            <Link className="home-link" to="/login">Log In</Link>
	            <Link className="home-link" to="/signup">Sign Up</Link>
          	</span>
        	
        </div>
      );
  }
}

export default Home;
