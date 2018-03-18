import React from 'react';

export class WinScreen extends React.Component {
	render() {
		return (
			<h1>{this.props.color} Team Wins!</h1>
		)
	}
}