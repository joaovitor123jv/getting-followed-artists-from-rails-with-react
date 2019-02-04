import React from 'react';
import Clock from '../components/clock'
import Artist from '../components/artist';

import SetTitle from '../components/set-title'
import { Link } from 'react-router-dom';


class LoginForm extends React.Component{
	constructor(props){
		super(props);

		// const urlParams = new URLSearchParams(window.location.search);
		// const isUserAuthorized = urlParams.has('authorized') ? true : false;

		this.state = { 
			loginData: '', 
			passwordData: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleLoginChange = this.handleLoginChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
	}

	handleLoginChange(event){
		this.setState({
			loginData: event.target.value
		});
	}

	handlePasswordChange(event){
		this.setState({
			passwordData: event.target.value
		});
	}

	handleSubmit(event){
		alert("Login = "+ this.state.loginData+ "\nPassword = "+ this.state.passwordData);
		event.preventDefault();
	}

	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<label>
					Spotify Username:
					<input type="text" value={this.state.loginData} onChange={this.handleLoginChange}/>
				</label>
				<label>
					Spotify Password:
					<input type="password" value={this.state.passwordData} onChange={this.handlePasswordChange}/>
				</label>
				<input type='submit' value="submit"/>
			</form>
		);
	}
}


export default class LoginPage extends React.Component{
// const LoginPage = React.createClass({

	render(){
		const artistData= {
			followers: 123,
			genres: "Metal, Grunge, Classical",
			name: "One Like Game Name",
			avatarUrl: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.u97hADSShnpcCxLT9LgFMwHaEp%26pid%3D15.1&f=1"
		}
		return (
			<div className="page">
				<SetTitle title="myArtists | User Page"/>
				<label>
					LOGIN PAGE
				</label>
				<Link to="/artist-list">
					ARTIST LIST
				</Link>
				<label>
					Welcome to myArtists.
				</label>
				<LoginForm/>
				<Clock/>	
				<Artist artist={artistData}/>
			</div>
		)
	}
};
