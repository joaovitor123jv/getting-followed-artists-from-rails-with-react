import React from 'react';
import Clock from '../components/clock'
import SetTitle from '../components/set-title'
import { Link } from 'react-router-dom';



export default class MainPage extends React.Component{
// const MainPage = React.createClass({

	render(){
		return (
			<div className="page">
				<SetTitle title="myArtists | Main Page"/>
				<label>
					MAIN PAGE
				</label>
				<br/>
				<Link to="/login/">
					LOGIN
				</Link>
				Login to Access your artists list
				<Clock/>	
			</div>
		);
	}
};
