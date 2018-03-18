import React from 'react';

export class ScoreCounter extends React.Component {
	render() {
		return (
				<h3> {this.props.color} Team: {this.props.score} Agents Remaining</h3>
			)
	}
}