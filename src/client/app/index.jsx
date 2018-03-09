import React from 'react';
import ReactDOM from 'react-dom';
import {Card} from './Card.jsx';
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

class App extends React.Component {
	render() {
		let words = [];
		for (var i = 0; i < 25; i++) {
			words.push(<Card word = {cardWords[i]} />)
		}
		return  (
			<div>
				<h1> This is React</h1>
					{words}
			</div>
			)
	}
}

ReactDOM.render(<App/>, document.getElementById('app'))