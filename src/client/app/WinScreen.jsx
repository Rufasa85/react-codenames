import React from 'react';

export class WinScreen extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.color} Team Wins!</h1>
				<img className = 'winPic' src = {this.props.picSrc} />	
			</div>
		)
	}
}