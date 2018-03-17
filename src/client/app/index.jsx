import React from 'react';
import ReactDOM from 'react-dom';
import {Card} from './Card.jsx';
import {CodemasterBtn} from './CodemasterBtn.jsx';
import {PlayerBtn} from './PlayerBtn.jsx';
import{ScoreCounter} from './ScoreCounter.jsx';
import {cardWords} from './wordList.js';


//Fisher-Yates shuffle, as found on Stack Overflow: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

shuffleArray(cardWords);
var cardWordObjArr = [];


for (var i = 0; i < cardWords.length; i++) {
	let cardObj = {};
	if (i===0) {
		cardObj={
			color:'black',
			word: cardWords[i],
			class: 'card'
		}
	}
	else if (i < 10) {
		cardObj={
			color:'blue',
			word: cardWords[i],
			class: 'card',
			clicked:false
		}
	}
	else if (i === 10) {
		cardObj={
			color:'purple',
			word: cardWords[i],
			class: 'card',
			clicked:false
		}
	}
	else if (i < 20) {
		cardObj={
			color:'red',
			word: cardWords[i],
			class: 'card',
			clicked:false
		}
	}
	else {
		cardObj={
			color:'yellow',
			word: cardWords[i],
			class: 'card',
			clicked:false
		}
	}
	cardWordObjArr.push(cardObj);
}

shuffleArray(cardWordObjArr);

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state =  {
			words:cardWordObjArr
		}
		this.changeColor = this.changeColor.bind(this);
		this.showColors = this.showColors.bind(this);
		this.hideColors = this.hideColors.bind(this);
	}

	changeColor(e) {
		let idx = e.target.id;
		console.log(e.target);
		this.state.words[idx]['class'] = this.state.words[idx]['color'] + '-card card';
		this.state.words[idx]['clicked'] = true;
		this.setState({});
	}

	showColors() {
		for (var i = 0; i < this.state.words.length; i++) {
			this.state.words[i]['class'] = this.state.words[i]['color'] + '-card card';
		}
		this.setState({});
	}

	hideColors() {
		for (var i = 0; i < this.state.words.length; i++) {
			if (!this.state.words[i]['clicked']) {
				this.state.words[i]['class'] = 'card';
			}
		}
		this.setState({});
	}

	render() {
		let words = [];
		for (var i = 0; i < 25; i++) {
			let wordObj = this.state.words[i];
			words.push(<Card key = {i} id = {i} class = {wordObj.class} clickHandler={this.changeColor} word = {wordObj.word} />)
		}
		return  (
			<div>
				<h1> This is React <CodemasterBtn clickHandler={this.showColors}/><PlayerBtn clickHandler={this.hideColors}/></h1>
				<ScoreCounter color='Blue' score={9} />
				<ScoreCounter color='Red' score={8} />

					{words}
				}
			</div>
			)
	}
}

ReactDOM.render(<App/>, document.getElementById('app'))