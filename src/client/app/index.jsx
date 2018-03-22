import React from 'react';
import ReactDOM from 'react-dom';
import {Card} from './Card.jsx';
import {CodemasterBtn} from './CodemasterBtn.jsx';
import {PlayerBtn} from './PlayerBtn.jsx';
import{ScoreCounter} from './ScoreCounter.jsx';
import {InstructionsButton} from './InstructionsButton.jsx';
import {InstructionsHideButton} from './InstructionsHideButton.jsx';
import {Instructions} from './Instructions.jsx';
import {WinScreen} from './WinScreen.jsx';
import {TeamTurnTracker} from './TeamTurnTracker.jsx';
import {NewGameButton} from './NewGameButton.jsx';
import{EndTurnButton} from './EndTurnButton.jsx';
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
let blueTeamTurn = false;
if(coinFlip) {
	bonusColor='blue';
	blueTeamTurn=true;
}

for (var i = 0; i < cardWords.length; i++) {
	let cardObj = {};
	if (i===0) {
		cardObj={
			color:'black',
			word: cardWords[i],
			class: 'card',
			clicked:false,
			clickable:true
		}
	}
	else if (i < 9) {
		cardObj={
			color:'blue',
			word: cardWords[i],
			class: 'card',
			clicked:false,
			clickable:true
		}
	}
	else if (i === 9) {
		cardObj={
			color:bonusColor,
			word: cardWords[i],
			class: 'card',
			clicked:false,
			clickable:true
		}
	}
	else if (i < 18) {
		cardObj={
			color:'red',
			word: cardWords[i],
			class: 'card',
			clicked:false,
			clickable:true
		}
	}
	else {
		cardObj={
			color:'gray',
			word: cardWords[i],
			class: 'card',
			clicked:false,
			clickable:true
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
			team:bonusColor,
			//adding team boolean for easier control flow with two options
			blueTeamTurn:true
		};		
		this.showInstructions = this.showInstructions.bind(this);
		this.hideInstructions = this.hideInstructions.bind(this);
		this.changeColor = this.changeColor.bind(this);
		this.showColors = this.showColors.bind(this);
		this.hideColors = this.hideColors.bind(this);
		this.endTurn = this.endTurn.bind(this);
		this.newGame = this.newGame.bind(this);
	}

	componentWillMount() {
		if (bonusColor==='red') {
			this.setState({
				redScore:9,
				blueTeamTurn:false
			})
		}
		else {
			this.setState({blueScore:9})	
		}
	}

	showInstructions(e) {
		e.preventDefault();
		this.setState({instruct:true})
	}

	hideInstructions(e) {
		e.preventDefault();
		this.setState({instruct:false})
	}

	changeColor(e) {
		let idx = e.target.id;
		let colorScore = this.state.words[idx]['color'] + 'Score' ;
		if (this.state.words[idx]['clickable']) {
			if (this.state.words[idx]['color']!=this.state.team) {
				if (this.state.words[idx]['color']==='black') {
					if(blueTeamTurn) {
						this.state.redScore = 0;
					}
					else {
						this.state.blueScore = 0;
					}
				}
				else if(blueTeamTurn && this.state.words[idx]['color'] === 'red' || blueTeamTurn && this.state.words[idx]['color'] === 'gray') {
					blueTeamTurn = false;
					this.state.team = 'red';
				}
				else if(!blueTeamTurn && this.state.words[idx]['color'] === 'blue' || !blueTeamTurn && this.state.words[idx]['color'] === 'gray') {
					blueTeamTurn = true;
					this.state.team = 'blue';
				}
			}
			this.state.words[idx]['class'] = this.state.words[idx]['color'] + '-card card';
			this.state.words[idx]['clickable'] = false;
			if (!this.state.words[idx]['clicked']) {
				this.state[colorScore]= this.state[colorScore] - 1;
			}
			this.state.words[idx]['clicked'] = true;
			this.setState({});
		}
	}

	endTurn(e) {
		e.preventDefault();
		if (this.state.blueTeamTurn) {
			this.setState({
				blueTeamTurn:false,
				team:'red'
			})
		}
		else {
			this.setState({
				blueTeamTurn:true,
				team:'blue'
			})
		}
	}

	showColors() {
		for (var i = 0; i < this.state.words.length; i++) {
			this.state.words[i]['class'] = this.state.words[i]['color'] + '-card card';
			this.state.words[i]['clickable'] = false;
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
				this.state.words[i]['clickable']=true;
			}
			else {
				this.state.words[i]['class'] = this.state.words[i]['color'] + '-card card';
			}
		}
		this.setState({});
	}

	newGame() {
		window.location.reload()
	}

	render() {
		let words = [];
		for (var i = 0; i < 25; i++) {
			let wordObj = this.state.words[i];
			words.push(<Card key = {i} id = {i} class = {wordObj.class} clickHandler={this.changeColor} word = {wordObj.word} />)
		}
		let retJsx = null;
		if (!this.state.blueScore) {
			retJsx = 
			<div>
				<NewGameButton clickHandler={this.newGame}/>
				<WinScreen color='Blue'/>
			</div>
		}
		else if (!this.state.redScore) {
			retJsx = 
			<div>
				<NewGameButton clickHandler={this.newGame}/>
				<WinScreen color='Red'/>
			</div>
		}
		else if (this.state.instruct) {
			retJsx = 
			<div>
				<InstructionsHideButton clickHandler={this.hideInstructions}/>
				<Instructions/>
			</div>
		}

		else {
			retJsx = <div>
				<InstructionsButton clickHandler = {this.showInstructions}/>
				<TeamTurnTracker  team = {this.state.team}/>
				<EndTurnButton clickHandler={this.endTurn}/>
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