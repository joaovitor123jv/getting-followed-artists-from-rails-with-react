import React from 'react';
import SetTitle from '../components/set-title'


export default class NotFoundPage extends React.Component{
	render(){
		return (
			<div className="content">
				<SetTitle title="myArtists | 404 Not Found"/>
				<div className="jumbotron">
					<h1>
						Error 404
					</h1>
					<h2>
						Page Not Found
					</h2>
				</div>
			</div>
		);
	}
}
