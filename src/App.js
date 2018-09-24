import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from './constants/server';
import './App.css';
import Footer from './layout/Footer';
import Home from './Home';
import Login from './auth/Login';
import Nav from './layout/Nav';
import Profile from './Profile';
import Signup from './auth/Signup';
import InitialPlanning from './components/InitialPlanning';
import Spending from'./components/Spending';
import AllMoneyList from './components/AllMoneyList.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null
    }
  }

  componentDidMount = () => {
    console.log('component did mount!');
    this.getUser();
  }

  getUser = () => {
    var token = localStorage.getItem('mernToken');
    if(token){
      console.log('token found in LS', token);
      // There is a token in localStorage. Try to validate it!
      axios.post(SERVER_URL + '/auth/me/from/token', {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(response => {
        console.log('SUCCESS', response);
        this.setState({
          user: response.data.user
        });
      })
      .catch(err => {
        console.log('ERROR', err);
        console.log('response', err.response);
        localStorage.removeItem('mernToken');
        this.setState({
          user: null
        });
      });
    }
    else {
      console.log('No token was found');
      this.setState({
        user: null
      });
    }
  }

  render() {
    let navigation;
     if(this.state.user){
            navigation = <Nav user={this.state.user} updateUser={this.getUser} />
      } else {
          navigation = null;
      } 


    return (
      <div className="App">
        <Router>
          <div className="container">

            {navigation}
             

            <Route exact path="/" component={
              () => (<Home user={this.state.user} />)
            } />

            <Route path="/adding" component={
              () => (<AllMoneyList user={this.state.user} title="Add Income" />)
            } />

            <Route path="/spending" component={
              () => (<Spending user={this.state.user} title="Add Expenditure" />)
            } />

            <Route path="/initialplanning" component={
              () => (<InitialPlanning user={this.state.user} />)
            } />


            <Route path="/login" component={
              () => (<Login user={this.state.user} updateUser={this.getUser} />)
            } />
            <Route path="/signup" component={
              () => (<Signup user={this.state.user} updateUser={this.getUser} />)
            } />
            <Route path="/profile" component={
              () => (<Profile user={this.state.user} />)
            } />
          </div>
        </Router>

        <Footer />

      </div>
    );
  }
}

export default App;
