import React, { Component } from 'react';
import UserHome from './UserHome.js';

class Home extends Component {
  render() {
    return(
    	<div>
        	<p>This is a home page. You should probably write something here.</p>
        	<UserHome />
        </div>
      );
  }
}

export default Home;
