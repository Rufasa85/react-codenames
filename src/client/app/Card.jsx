import React from 'react';

export class Card extends React.Component {

	render() {
		return (
			<div className= {this.props.class} onClick= {this.props.clickHandler} id = {this.props.id}>
				{this.props.word}
			</div>
		)
	}
}