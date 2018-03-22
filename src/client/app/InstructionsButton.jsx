import React from 'react';

export class InstructionsButton extends React.Component {
	render () {
		return (
			<button onClick={this.props.clickHandler}>How to Play</button>
		)
	}
}