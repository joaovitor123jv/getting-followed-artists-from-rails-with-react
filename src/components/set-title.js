import React from 'react';
import {Helmet} from 'react-helmet';

export default class SetTitle extends React.Component {

	render() {
		return (
			<Helmet>
				<title>	
					{this.props.title}
				</title>
			</Helmet>
		);
	}
}