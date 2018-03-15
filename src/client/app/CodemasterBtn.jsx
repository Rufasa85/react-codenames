import React from 'react';

export class CodemasterBtn extends React.Component {
	render() {
		return (
			<button onClick={this.props.clickHandler}>
				Codemaster Mode!
			</button>
		)
	} 
}