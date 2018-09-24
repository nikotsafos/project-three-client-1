import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';
import PageTitle from './PageTitle';
import SERVER_URL from '../constants/server';


class Adding extends Component {


	constructor(props) {
		super(props);
		this.state = {
			amount: '',
			date: '',
			description: '',
			userId: '',

		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
			userId: this.props.user.id

		})
	}


	handleSubmit = (e) => {
		console.log('this state ', this.state);
		e.preventDefault()
		let token = localStorage.getItem('mernToken') || ''

		axios.post('http://localhost:3000/money/all/post',  {
			headers: { 'Authorization': `Bearer ${token}` },
			body: this.state
		})

		.then(result => {
			console.log(result);
		})
		.catch(err => {
			console.log('error');
		});
	}


	render() {

		let sectionTitle;
     		if(this.props.title){
            	sectionTitle = <PageTitle title={this.props.title}/>
      	} else {
          	sectionTitle = null;
      	}

		return(
			<div>
				{sectionTitle}

				<form className="AddingForm" onSubmit={this.handleSubmit}>
					<label for="amount">Amount:</label>
					<input type="number" name="amount" value={this.state.amount} onChange={this.handleChange} required />

					<label for="date">Date:</label>
					<input type="date" name="date" value={this.state.date} onChange={this.handleChange} required />

					<label for="description">description:</label>
					<input type="text" name="description" value={this.state.description} onChange={this.handleChange} required /><br />

					<button className="btn btn-primary" onClick={this.showresult} type="submit">Adding</button>
				</form>

		</div>


		);
	}
}

export default Adding;
