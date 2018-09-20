import React, { Component } from 'react';
import UserHome from './UserHome.js';
import axios from 'axios';
import '../node_modules/react-vis/dist/style.css';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        budget: {}
    }
  }

    componentDidMount() {
    axios.get('http://localhost:3000/profile')
      .then(res => {
        const budget = res.data;
        console.log("BUDGET", budget)
        this.setState({ budget })

      })
  }
  render() {

    console.log("RENDER STATE", this.state);
    if(this.props.user){
      return (
          <div>
            <h2>Hello again, {this.props.user.firstName}!</h2>
           <div>

      </div>

           <UserHome budget={this.state.budget} user={this.props.user}/>

          </div>
        );
    }
    return(
      <div>
        <p>This is a profile page. You must be logged in to see it.</p>
        <p>Would you like to <a href="/login">Log In</a> or <a href="/signup">Sign up</a>?</p>
      </div>
      );
  }
}

export default Profile;
