import React from 'react';

const cardStyle = {
	height: '100px',
	width: '100px',
	border:'1px solid green'
}

export class Card extends React.Component {
	render() {
		return (
				<div style={cardStyle}>
					<p>I am a card!</p>
				</div>
			)
	}
}