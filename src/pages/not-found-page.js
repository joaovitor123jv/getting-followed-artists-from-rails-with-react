import React from 'react';
import Clock from '../components/clock'
import SetTitle from '../components/set-title'
import Button from '../components/button'


export default class MainPage extends React.Component{

	render(){
		return (
			<div className="page">
				<SetTitle title="myArtists | 404 Not Found"/>
				This Page cannot be reached
				<Button onClick={this.props.onClick} label="Back"/>
				<Clock/>	
			</div>
		);
	}
}