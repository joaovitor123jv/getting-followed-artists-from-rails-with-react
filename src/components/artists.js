import React from 'react';
import Artist from '../components/artist';


export default class Artists extends React.Component{
	render(){
		return (
			<div className="artists-list">
				<div className="centralize">
					<div className="info">
						Check your followed artists below:
					</div>
				</div>
				<table className="table">
					<thead>
						<tr>
							<th> # </th>
							<th> Artist Name </th>
							<th> Followers Number </th>
						</tr>
					</thead>
					<tbody>
						{this.props.artistList.map((e, index) => <Artist item={e} index={index} />)}
					</tbody>
				</table>
			</div>
		);
	}
}