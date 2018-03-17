import React from 'react';

export class ScoreCounter extends React.Component {
	render() {
		return (
				<h1> {this.props.color} Team: {this.props.score}</h1>
			)
	}
}