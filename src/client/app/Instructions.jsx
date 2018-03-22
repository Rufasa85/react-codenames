import React from 'react';

export class Instructions extends React.Component {
	render() {
		return (
			<div>
				<h1>How to Play</h1>
				<h3>Objective</h3>
				<p>Find all the agents on your team before your oponents can do the same</p>
				<h3>Setup</h3>
				<p>Divide into two teams of equal size. Codenames requries at least 4 players.  For the 3 player variant, see below.  Each team needs to pick one Codemaster.  Position yourselves around the screen so that only the Codemasters can see it for now.</p>
				<h3>Game Play</h3>
				<p>The game is played over several rounds.  Each round, the Codemaster of the team currently taking the  turn will give their teammates a one word clue that corresponds to their agents.  Codemasters can check which agents belong to which player at any time by clicking the Codemaster Mode button in the top right corner, but make sure the rest of the players cannot see the screen.

					Codemasters must also give a number of agents corresponding to the clue they give.  For example, if the Codemaster wants to indicate both NUT and BARK as their agents, they could use 'tree 2' as a clue, as both those things grow on trees.  

					After the Codemaster gives his clue, the rest of the team can confer on which agents they want to select.  The Codemaster must do every thing they can to keep a straight face during this time.  The team must click on the agents they want to select one at a time. Once clicked, the agents will change color to indicate which team they belong to.  

					Teams can guess up to one more than the number given by the Codemaster.  They must always guess at least once.  If they guess an agent beloning to the other team or an innocent bystander (gray card), their turn is over.  If the guess the assassin (black card), that team immidiately loses.

					The game ends when either one team has clicked on all their agents, or one team has clicked the assassin.
					</p> 
					<h3>Important Notes</h3>
					<ul>
						<li>Going first is a distict advnatage, so the team going first will always have one extra agent</li>
						<li>Clues have to relate to meaning of the words, not board layout ('corners' is an acceptable clue for SQUARE, but not to literally mean the corners of the board</li>
						<li>Clues have to be one word, but compound words and Proper Names are ok.  The opposing Codemaster has final say on questionable clues</li>
						<li>Clues have to not be the names or part of names of agents. So if HORSESHOE is an agent on the board, 'horse', 'shoe', 'unshoed', and 'snowshoe' are all invalid</li>
					</ul>
					<h3>Sample game</h3>
					<p>Red starts. Red wants her team to guess both NUT and BARK, so she says 'tree 2' Red team clicks ORANGE, which is a Blue agent.  Red turn is over.  Blue gets both their clues right.  Blue now has 5 agents remaining, while Red has 9.  Red now wants her team to guess WATER, AMAZON, and BED, so she says 'river 3'.  Red team quickly gets AMAZON, which is a red agent so they can keep going.  After a spirited debate, they land on WATER, another red agent.  The team has no idea what else to pick, but since their Codemaster gave them the number '3' they can keep guessing up to 2 more times (4 total, Codemaster number + 1, assuming they keep getting them right).  Red team remembers their are still 2 clues assosicated with tree on the board from the last turn,  so they pick BARK.  They opt to end their turn there.  They now have 6 agents left to blue's 5</p>
			</div>
			)
	}
}