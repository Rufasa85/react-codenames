import React from 'react';

export class PlayerBtn extends React.Component {
	render() {
		return (
			<div className='modeBtn' onClick={this.props.clickHandler}>
				<p>Player Mode!</p>
				<div className='smallBox'></div>
				<div className='smallBox'></div>
				<div className='smallBox'></div>
				<div className='smallBox'></div>
				<div className='smallBox'></div>
				<div className='smallBox'></div>
			</div>
			)
	}
}