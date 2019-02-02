import React from 'react';
import Clock from '../components/clock'
import SetTitle from '../components/set-title'


// const NotFoundPage = React.createClass({
export default class NotFoundPage extends React.Component{
	render(){
		return (
			<div className="page">
				<SetTitle title="myArtists | 404 Not Found"/>
				This Page cannot be reached
				<Clock/>	
			</div>
		);
	}
}
