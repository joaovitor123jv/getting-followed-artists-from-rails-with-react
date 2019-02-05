import React from 'react';

export default class Artist extends React.Component{
	render() {
		const trClass = ((this.props.index % 2) === 0) ? 'bg-color-1' : 'bg-color-2';
		return (
			<tr key={this.props.index} className={trClass}>
				<td> {this.props.index + 1} </td>
				<td> {this.props.item.name} </td>
				<td> {this.props.item.followers_number} </td>
			</tr>
		);
	}
}