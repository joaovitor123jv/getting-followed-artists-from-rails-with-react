import React from 'react';
import UserInfo from './user-info';

export default class Artist extends React.Component{
	render(){
		return (
			<div className="Artist">
				<UserInfo user={this.props.artist}/>
				<div className="ArtistInfo-extra">
					Number of followers: {this.props.artist.followers}
				</div>
				<div className="ArtistInfo-extra">
					Genres: {this.props.artist.genres}
				</div>
			</div>
		);
	}
}