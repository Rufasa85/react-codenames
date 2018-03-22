import React from 'react';

export class InstructionsHideButton extends React.Component {
	render () {
		return (
			<button onClick={this.props.clickHandler}>Back to Game!</button>
		)
	}
}