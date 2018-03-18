import React from 'react';

export class CodemasterBtn extends React.Component {
	render() {
		return (
			<div className='modeBtn' onClick={this.props.clickHandler}>
				<p>Codemaster Mode!</p>
				<div className='smallBox smallRedBox'></div>
				<div className='smallBox smallGrayBox'></div>
				<div className='smallBox smallRedBox'></div>
				<div className='smallBox smallBlueBox'></div>
				<div className='smallBox smallBlueBox'></div>
				<div className='smallBox smallGrayBox'></div>
			</div>
		)
	} 
}