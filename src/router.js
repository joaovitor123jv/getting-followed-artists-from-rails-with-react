import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import MainPage from './pages/main-page';
import LoginPage from './pages/login-page';
import NotFoundPage from './pages/not-found-page';
import ArtistListPage from './pages/artist-list';


import { NavbarStyle, NavbarListItemStyle, NavbarLinkStyle,NavbarLogoStyle } from "./styles/navbar";
// import AuthorizeSpotify from './actions/authorize-spotify';

function NavbarListItem(props){
	return (
		<li style={NavbarListItemStyle}>
			<Link to={props.path} style={NavbarLinkStyle}>
				{props.label}
			</Link>
		</li>
	);
}

class Navbar extends React.Component{
	render() {
		return (
			<nav style={NavbarStyle}>
				<div className="logo" style={NavbarLogoStyle}>
					myArtists
				</div>
				<ul>
					<NavbarListItem path="/" label="HOME"/>
					<NavbarListItem path="/login" label="LoGiN"/>
					<NavbarListItem path="/artist-list" label="ARTIST LIST"/>
					<NavbarListItem path="/help" label="HElP"/>
				</ul>
				<br/>
				<br/>
			</nav>
		);
	}
}

const AppRouter = () => (
	<Router>
		<div>
			<Navbar/>
			<Switch>
				<Route path="/" exact component={MainPage}/>
				<Route path="/login" component={LoginPage}/>
				<Route path="/artist-list" component={ArtistListPage}/>
				<Route path="*" component={NotFoundPage}/>
			</Switch>
		</div>
	</Router>
);

export default AppRouter;