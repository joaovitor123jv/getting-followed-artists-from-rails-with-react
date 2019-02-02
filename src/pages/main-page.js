import React from 'react';
import Clock from '../components/clock'
import SetTitle from '../components/set-title'
import Button from '../components/button'



export default class MainPage extends React.Component{

	render(){
		return (
			<div className="page">
				<SetTitle title="myArtists | Main Page"/>
				<label>
					MAIN PAGE
				</label>
				<br/>
				Login to Access your artists list
				<Button onClick={this.props.onClick} label="Login"/>
				<Clock/>	
			</div>
		);
	}
}