import React from 'react';

import Button from '../components/button';
import Artists from '../components/artists';

function generateGetParams(paramName, paramContent){
	return '&'+paramName+"="+paramContent;
}

function getFetchArtistUrl(api_access_token , uid) {
	let full_url = 'http://localhost:8000/api/v1/get-user-artists?';
	full_url += generateGetParams("api_access_token", api_access_token);
	full_url += generateGetParams("uid", uid);
	return full_url;
}

function FetchArtist(props){
	return (
		<div>
			<h2>
				Welcome, {props.name}!
			</h2>	
			<Button label="Load Artist List" onClick={props.onClick}/>
		</div>
	);
}

function FetchArtistOrShow(props){
	if((props.artistList.length === 0) && props.isUserAuthorized){
		return (
			<div class="centralize">
				<div class="fetch-artist-area">
					<FetchArtist name={props.name} onClick={props.onClick}/>
				</div>
			</div>
		);
	} else {
		return null;
	}
}


function ConnectToSpotify(){
	return (
		<div className="centralize">
			<a href="http://localhost:8000/api/v1/authorize-spotify">
				Connect to your Spotify account
			</a>
		</div>
	);
}

export default class ArtistListPage extends React.Component{

	constructor(props){
		super(props);

		const urlParams = new URLSearchParams(window.location.search);
		const isUserAuthorized = urlParams.has('authorized') ? true : false;

		const userName = this.getUrlParam('name');
		const api_access_token = this.getUrlParam('api_access_token');
		const uid = this.getUrlParam('uid');

		this.state = { 
			isUserAuthorized,
			userName: userName,
			api_access_token: api_access_token,
			uid: uid,
			artistList: []
		};

		this.loadArtistList = this.loadArtistList.bind(this);
	}


	loadArtistList(){
		fetch(getFetchArtistUrl(this.state.api_access_token, this.state.uid))
		.then(res => { return res.json() })
		.then(data => {
			this.setState({
				artistList: data.data
			});
		})
		.catch(error => console.log(error));
	}

	getUrlParam(paramName) {
		const urlParams = new URLSearchParams(window.location.search);
		if(urlParams.has(paramName)){
			return urlParams.get(paramName);
		} else {
			return null;
		}
	}

	render(){
		const isUserAuthorized = this.state.isUserAuthorized;
		const artistList = this.state.artistList;

		const connectSpotify = isUserAuthorized ? '' : <ConnectToSpotify/>;

		const showArtistList = (artistList.length > 0) ? (
			<Artists artistList={this.state.artistList}/>
		) : ( '');

		return (
			<div className="content">
				<div className="jumbotron">
					<h1> Artists Followed on Spotify </h1>
					<h2> View the artists you're following at Spotify</h2>
					<FetchArtistOrShow artistList={artistList} 
						isUserAuthorized={isUserAuthorized} 
						name={this.state.userName} 
						onClick={this.loadArtistList}
					/>
					{ connectSpotify }
				</div>
				{showArtistList}
			</div>
		);
	}
}
