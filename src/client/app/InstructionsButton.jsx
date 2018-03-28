import React from 'react';

export class InstructionsButton extends React.Component {
	render () {
		return (
			<div className = 'otherButtons' onClick={this.props.clickHandler}><h4>How to Play</h4></div>
		)
	}
}