////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////


	function getPlayerMove(move) {
	if (move && true) {
	    return move;
	    }
		return getInput();
}


	function getComputerMove(move) {
	if (move && true) {
	    return move;
	    }
		return randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
	
	if (playerMove === 'rock')  {
	    if (computerMove === 'scissors') {
	        winner = 'player';
	        console.log('Player Wins!');
	    }
	    else if (computerMove === 'paper') {
	        winner = 'computer';
	        console.log('Computer Wins!');
	    }
	    else if (playerMove === computerMove) {
	        winner = 'tie';
	        
	    }
	    
	 }
	 else if (playerMove === 'paper') {
	     if (computerMove === 'rock') {
	         winner = 'player';
	         console.log('Player Wins!');
	     }
	     else if (computerMove === 'scissors') {
	        winner = 'computer';
	        console.log('Computer Wins!');
	     } 
	     
	 }
	 else if (playerMove === 'scissors') {
	     if (computerMove === 'paper') {
	         winner = 'player';
	         console.log('Player Wins!'); 
	     }
	     else if (computerMove === 'rock') {
	         winner = 'computer';
	         console.log('Computer Wins!');
	     }
	    }
	 return winner;
}


function playToFive() {
  console.log("Let's play Rock, Paper, Scissors");  
    var playerWins = [];
    var computerWins = [];
    var move = (playerMove,computerMove);
    
    while (computerWins.length <5 && playerWins.length <5) {
        var playerMove = getPlayerMove(move);
		var computerMove = getComputerMove(move);
		var winner = getWinner(playerMove,computerMove);
		 
		if (playerMove === computerMove){
		     console.log("It's a tie!");
		}
        if (winner === 'computer') {
            
            
            computerWins.push(winner);
            
        }
        if (winner === 'player') {
            
            
            playerWins.push(winner);
            
        }
        if (playerWins.length === 5 ) {
            console.log('Game over! You Win!, Computer Loses.');
            }
        if (computerWins.length === 5) {
            console.log('Game over! You Lose, Computer Wins!');
            }
        console.log('You chose ' + playerMove + ' while Computer chose ' + computerMove + '.' );
        console.log('Score: Computer ' + computerWins.length + ' : Player ' + playerWins.length ); 
        
        }
        return 'Great Game!';
}
playToFive();



