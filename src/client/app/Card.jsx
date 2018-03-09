import React from 'react';

export class Card extends React.Component {

	render() {
		return (
			<div className='card'>
				<p>{this.props.word}</p>
			</div>
		)
	}
}