import React from 'react';

export class NewGameButton extends React.Component {
	render() {
		return (
				<div className='otherButtons' onClick={this.props.clickHandler}><h4>New Game</h4></div>
			)
	}
}