import React from 'react';

export class EndTurnButton extends React.Component {
	render() {
		return (
				<div className = 'otherButtons' onClick={this.props.clickHandler}><h4>End Turn</h4></div>
			)

	}
}