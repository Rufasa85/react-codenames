import React from 'react';
import ReactDOM from 'react-dom';
import {Card} from './Card.jsx';

class App extends React.Component {
	render() {
		return  (
			<div>
				<h1> This is React</h1>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
			</div>
			)
	}
}

ReactDOM.render(<App/>, document.getElementById('app'))