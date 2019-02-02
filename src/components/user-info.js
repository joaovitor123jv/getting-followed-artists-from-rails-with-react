import React from 'react';
import Avatar from './avatar';

export default class UserInfo extends React.Component{

	render(){
		return (
			<div className="UserInfo">
				<Avatar user={this.props.user}/>
				<div className="UserInfo-name">
					{this.props.user.name}
				</div>
			</div>
		);
	}
}