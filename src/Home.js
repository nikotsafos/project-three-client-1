import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
 
  render() {
     let homenav;
     if(this.props.user){
            homenav = <span className="links">
              <Link className="home-link" to="/profile">Go to My Profile</Link>
            </span>
      } else {
          homenav =  <span className="links">   
              <Link className="home-link" to="/login">Log In</Link>
              <Link className="home-link" to="/signup">Sign Up</Link>
            </span>
      } 
    return(
    	<div className="home-page">
    		<h1 className="title">Ginkgo</h1>
    		<h4 className="tag-line">simple budgeting to help your savings grow </h4> 
    		{ homenav }
        </div>
      );
  }
}

export default Home;
