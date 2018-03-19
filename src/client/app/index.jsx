import React from 'react';
import ReactDOM from 'react-dom';
import {Card} from './Card.jsx';
import {CodemasterBtn} from './CodemasterBtn.jsx';
import {PlayerBtn} from './PlayerBtn.jsx';
import{ScoreCounter} from './ScoreCounter.jsx';
import {Instructions} from './Instructions.jsx';
import {WinScreen} from './WinScreen.jsx';
import {TeamTurnTracker} from './TeamTurnTracker.jsx';
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
let coinFlip = Math.floor(Math.random() * 2);
let bonusColor = 'red';
if(coinFlip) {
	bonusColor='blue';
}

for (var i = 0; i < cardWords.length; i++) {
	let cardObj = {};
	if (i===0) {
		cardObj={
			color:'black',
			word: cardWords[i],
			class: 'card'
		}
	}
	else if (i < 9) {
		cardObj={
			color:'blue',
			word: cardWords[i],
			class: 'card',
			clicked:false
		}
	}
	else if (i === 9) {
		cardObj={
			color:bonusColor,
			word: cardWords[i],
			class: 'card',
			clicked:false
		}
	}
	else if (i < 18) {
		cardObj={
			color:'red',
			word: cardWords[i],
			class: 'card',
			clicked:false
		}
	}
	else {
		cardObj={
			color:'gray',
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
			blueScore:8,
			redScore:8,
			words:cardWordObjArr,
			instruct:false,
			team:bonusColor
		};		
		this.changeColor = this.changeColor.bind(this);
		this.showColors = this.showColors.bind(this);
		this.hideColors = this.hideColors.bind(this);
	}

	componentWillMount() {
		if (bonusColor==='red') {
			this.setState({redScore:9, team:'Red'})
		}
		else {
			this.setState({blueScore:9, team:'Blue'})	
		}
	}

	changeColor(e) {
		let idx = e.target.id;
		let colorScore = this.state.words[idx]['color'] + 'Score' ;
		console.log(e.target);
		this.state.words[idx]['class'] = this.state.words[idx]['color'] + '-card card';
		if (!this.state.words[idx]['clicked']) {
			this.state[colorScore]= this.state[colorScore] - 1;
		}
		this.state.words[idx]['clicked'] = true;
		this.setState({});
	}

	showColors() {
		for (var i = 0; i < this.state.words.length; i++) {
			this.state.words[i]['class'] = this.state.words[i]['color'] + '-card card';
			if (this.state.words[i]['clicked']) {
				this.state.words[i]['class'] = this.state.words[i]['color'] + '-card card clicked-card'
			}
		}
		this.setState({});
	}

	hideColors() {
		for (var i = 0; i < this.state.words.length; i++) {
			if (!this.state.words[i]['clicked']) {
				this.state.words[i]['class'] = 'card';
			}
			else {
				this.state.words[i]['class'] = this.state.words[i]['color'] + '-card card';
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
		let retJsx = null;
		if (!this.state.blueScore) {
			retJsx = <WinScreen color='Blue'/>
		}
		else if (!this.state.redScore) {
			retJsx = <WinScreen color='Red'/>
		}
		else if (this.state.instruct) {
			retJsx= <Instructions/>
		}

		else {
			retJsx = <div>
				<TeamTurnTracker  team = {this.state.team}/>
				<div className ='topFlexBox'>
					<div className = 'scoreCounterContainer'>	
						<div className = 'scoreCounter'>
							<ScoreCounter color='Blue' score={this.state.blueScore} />
						</div>
						<div className = 'scoreCounter'>
							<ScoreCounter color='Red' score={this.state.redScore} />
						</div>
					</div>
					<div className='btnContainer'>
						<div className = 'modeBtnContainer'>
							<CodemasterBtn clickHandler={this.showColors}/>
						</div>
						<div className = 'modeBtnContainer'>
							<PlayerBtn clickHandler={this.hideColors}/>
						</div>
					</div>
				</div>
				<div className = 'cardsFlexBox'>
					{words}
				</div>
			</div>
		}
		return  (
			retJsx
			)
	}
}

ReactDOM.render(<App/>, document.getElementById('app'))