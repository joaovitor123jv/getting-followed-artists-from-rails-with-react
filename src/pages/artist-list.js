import React from 'react';
// import {Link} from 'react-router-dom';
// import Pusher from 'pusher-js';
// import format from 'date-fns/format';

import Button from '../components/button'

import '../css/login.css';

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
			<label>
				Welcome! {props.name}
			</label>
			<br/>
			<a href="http://localhost:8000/api/v1/get-user-artists">
				Get Artist List
			</a>
			<Button label="Get Artist List" onClick={props.onClick}/>
		</div>
	);
}

function FetchArtistOrShow(props){
	if(props.artistList.length > 0){
		return <Followed artistList={props.artistList}/>
	} else if(props.isUserAuthorized){
		return <FetchArtist name={props.name} onClick={props.onClick}/>
	} else {
		return null;
	}
}

function TableItem(props){
	return (
		<tr key={props.item.name}>
			<td> {props.index + 1} </td>
			<td> {props.item.followers_number} </td>
		</tr>
	);
}

function Followed(props){
	// artistList.map((e, index) => <TableItem item)
	/* {artistList.map((e, index) => TableItem(e, index))} */
	return (
		<div className="artists-list">
			<h2>Followed Artists</h2>
			<table className="table">
				<thead>
					<tr> # </tr>
					<tr> Artist Name </tr>
					<tr> Followers Number </tr>
				</thead>
				<tbody>
					{props.artistList.map((e, index) => <TableItem item={e} index={index} />)}
				</tbody>
			</table>
		</div>
	);
}

function ConnectToSpotify(){
	return (
		<a href="http://localhost:8000/api/v1/authorize-spotify">Connect your Spotify account</a>
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

		console.log("STATE == ", this.state);
	}


	loadArtistList(){
		fetch(getFetchArtistUrl(this.state.api_access_token, this.setState.uid))
		.then(res => res.json())
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

		return (
			<div>
				<h1>
					Artists Followed on Spotify
				</h1>
				<p>
					View the artists you're following in realtime with Spotify and Pusher
				</p>
				{ connectSpotify }
				<FetchArtistOrShow artistList={artistList} 
					isUserAuthorized={isUserAuthorized} 
					name={this.state.userName} 
					onClick={this.loadArtistList}
					api_access_token={this.state.api_access_token}
					uid={this.state.uid}
				/>
			</div>
		);
	}
}
