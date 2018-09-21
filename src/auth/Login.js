import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from '../constants/server';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleEmailChange = (e) => { this.setState({ email: e.target.value }); }

  handlePasswordChange = (e) => { this.setState({ password: e.target.value }); }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    axios.post(SERVER_URL + '/auth/login', this.state)
    .then(result => {
      // Add the newly received token to LS
      localStorage.setItem('mernToken', result.data.token);
      // Update the user with a call to App.js
      this.props.updateUser();
    })
    .catch(err => {
      console.log('ERROR', err.response.data);
    });
  }

  render() {
    if(this.props.user){
      return (<Redirect to="/profile" />);
    }
    return(
        <div className="home-page">
          <div className="auth-box">
            <h2 className="auth-title">Log In to Your Ginkgo Account</h2>
            <form onSubmit={this.handleSubmit}>
            <label className="auth-label" for="email">email</label>
              <div>
                <input className="auth-input" name="Email" value={this.state.email} onChange={this.handleEmailChange} />
              </div>
              <label className="auth-label" for="password">password</label>
              <div>
                <input className="auth-input" name="Password" type="password" value={this.state.password} onChange={this.handlePasswordChange} />
              </div>
              <input type="submit" value="Log Me In!" className="button home-link" />
            </form>
          </div>
        </div>
      );
  }
}

export default Login;
