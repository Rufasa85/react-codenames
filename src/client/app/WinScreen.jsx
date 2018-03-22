import React from 'react';

export class WinScreen extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.color} Team Wins!</h1>
				<img src = 'https://images.pexels.com/photos/461170/pexels-photo-461170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=640&w=427' />	
			</div>
		)
	}
}