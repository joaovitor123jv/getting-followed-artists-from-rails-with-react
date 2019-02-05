import React from 'react';
import { Link } from 'react-router-dom';

function NavbarListItem(props){
	return (
		<li>
			<Link to={props.path}>
				{props.label}
			</Link>
		</li>
	);
}

export default class Navbar extends React.Component{
	render() {
		return (
			<nav>
				<div className="logo">
					<Link to="/">
						myArtists
					</Link>
				</div>
				<ul>
					<NavbarListItem path="/anything-here" label="404 Page"/>
					<NavbarListItem path="/artist-list" label="Artist List"/>
					<NavbarListItem path="/" label="Home"/>
				</ul>
			</nav>
		);
	}
}