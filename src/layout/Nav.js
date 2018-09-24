import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  handleLogout = (e) => {
    console.log('logging out...');
    localStorage.removeItem('mernToken');
    this.props.updateUser();
  }

  render() {
 
  
       
    
    return(
        <div>
          <nav className="nav">
            <div>
              <span className="nav-logo"> Ginkgo</span>
              <span className="nav-id">{`${this.props.user.firstName}'s Account`} </span>
            </div>
      
            <Link to="/profile">Profile</Link>
            <Link to="/initialplanning">Set a Budget</Link>
            <Link to="/adding">Income</Link>
            <Link to="/spending">Expenses</Link>
            <Link to="/" onClick={this.handleLogout}>Logout</Link>
           
          </nav>
        </div>
      );
  }
}

export default Nav;
