import React from 'react';
import { NavbarStyle, NavbarLogoStyle, NavbarListItemStyle } from '../styles/navbar';

function NavItem(props){
	return (
		<li style={NavbarListItemStyle}>
			{props.label}
		</li>
	)
}


export default class Navbar extends React.Component{
	render() {
		return (
			<nav style={NavbarStyle}>
				<navbar className="logo" style={NavbarLogoStyle}>
					myArtist
				</navbar>
				<ul>
					<NavItem label="Home"/>
					<NavItem label="Help"/>
					<NavItem label="About"/>
				</ul>
				<br/>
				<br/>
			</nav>
		)
	}
}