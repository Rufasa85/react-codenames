import React from 'react';

export class PlayerBtn extends React.Component {
	render() {
		return (
			<button onClick={this.props.clickHandler}>
				Player Mode!
			</button>
			)
	}
}