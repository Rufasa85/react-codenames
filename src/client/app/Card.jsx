import React from 'react';

export class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {class:'card ', color:this.props.color};
		this.changeColor = this.changeColor.bind(this);
	}

	changeColor() {
		this.setState({class: 'card ' + this.state.color + '-card '});
	}

	render() {
		return (
			<div className= {this.state.class} onClick= {this.changeColor}>
				<p>{this.props.word}</p>
			</div>
		)
	}
}