import React from 'react';

export class EndTurnButton extends React.Component {
	render() {
		return (
				<button onClick={this.props.clickHandler}>End Turn</button>
			)
	}
}