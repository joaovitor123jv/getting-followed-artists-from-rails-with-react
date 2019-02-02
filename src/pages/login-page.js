import React from 'react';
import Clock from '../components/clock'
import Artist from '../components/artist';

import SetTitle from '../components/set-title'
import Button from '../components/button'



export default class MainPage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			artistData: {
				followers: 123,
				genres: "Metal, Grunge, Classical",
				name: "One Like Game Name",
				avatarUrl: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.u97hADSShnpcCxLT9LgFMwHaEp%26pid%3D15.1&f=1"
			}
		}
	}

	render(){
		return (
			<div className="page">
				<SetTitle title="myArtists | User Page"/>
				<label>
					LOGIN PAGE
				</label>
				<label>
					Welcome to myArtists.
				</label>
				<Button label="Logout Button" onClick={this.props.onClick}/>
				<Clock/>	
				<Artist artist={this.state.artistData}/>
			</div>
		)
	}
}