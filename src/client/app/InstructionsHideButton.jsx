import React from 'react';

export class InstructionsHideButton extends React.Component {
	render () {
		return (
			<div className = 'otherButtons' onClick={this.props.clickHandler}><h4>Back to Game!</h4></div>
		)
	}
}