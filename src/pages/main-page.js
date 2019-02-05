import React from 'react';
import SetTitle from '../components/set-title'
import { Link } from 'react-router-dom';



export default class MainPage extends React.Component{
// const MainPage = React.createClass({

	render(){
		return (
			<div className="content">
				<div className="jumbotron">
					<SetTitle title="myArtists | Main Page"/>
					<h1>
						Welcome to myArtists
					</h1>
					<h2>
						Here you can check the artists you Follow on Spotify
					</h2>
				</div>
				<div className="content centralize">
					<div className="info">
						Info: To view the artists you follow, please go to the 
						&nbsp;<Link to="/artist-list">Artist List</Link> page
					</div>
				</div>
			</div>
		);
	}
};
