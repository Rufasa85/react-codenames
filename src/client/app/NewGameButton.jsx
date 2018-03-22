import React from 'react';

export class NewGameButton extends React.Component {
	render() {
		return (
				<button onClick={this.props.clickHandler}>New Game</button>
			)
	}
}