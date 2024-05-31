/*
Let's do something a little bit more complex.

We are going to create a "score keeper".

Let's say you are playing ping-pong with your friend and you are playing "best of 5". That means : after 5 games, the player that won the most games gets the trofy.

You want to create a program that counts how many games player 1 wins and how many games player 2 wins.

We will do this trough buttons.

There is a button for each player that increments the score.

When we arrive at 5 total games, the buttons are disabled (we can't click them anymore). And the score of the winner becomes green and the color of the loser becomes red.

Then, you can click on a button reset to start all over again.

*/

/* Score */
let scorePlayerOne = 0
let scorePlayerTwo = 0
let gameOver = false

/* Board */
let boardScorePlayerOne = document.querySelector('#boardScorePlayerOne')
let boardScorePlayerTwo = document.querySelector('#boardScorePlayerTwo')

/* Btn */
let btnPlayerOne = document.querySelector('#buttonP1')
let btnPlayerTwo = document.querySelector('#buttonP2')
let btnReset = document.querySelector('#reset')


/* Event */
btnPlayerOne.addEventListener('click', ()=> {
  if(!gameOver) {
    scorePlayerOne++
    console.log(scorePlayerOne)
    boardScorePlayerOne.innerHTML = scorePlayerOne
  
    if(scorePlayerOne === 5) {    
      alert('you Win')
      document.getElementById('boardScorePlayerOne').style.color = "green" 
      gameOver = true
    }

        
    if (scorePlayerOne > scorePlayerTwo) {
      document.getElementById('boardScorePlayerOne').style.color = "green" 
      document.getElementById('boardScorePlayerTwo').style.color = "red" 
    } else if (scorePlayerOne < scorePlayerTwo) {
      document.getElementById('boardScorePlayerOne').style.color = "red" 
      document.getElementById('boardScorePlayerTwo').style.color = "green" 
    }
    
    else {
      document.getElementById('boardScorePlayerOne').style.color = "yellow" 
      document.getElementById('boardScorePlayerTwo').style.color = "yellow" 
    }

  }
})

btnPlayerTwo.addEventListener('click', ()=> {
  if(!gameOver) {
    scorePlayerTwo++
    console.log(scorePlayerTwo)
    boardScorePlayerTwo.innerHTML = scorePlayerTwo
      
    if(scorePlayerTwo === 5) {    
        alert('you Win')
        document.getElementById('boardScorePlayerTwo').style.color = "green" 
        gameOver = true 
    }

        
    if (scorePlayerOne > scorePlayerTwo) {
      document.getElementById('boardScorePlayerOne').style.color = "green" 
      document.getElementById('boardScorePlayerTwo').style.color = "red" 
    } else if (scorePlayerOne < scorePlayerTwo) {
      document.getElementById('boardScorePlayerOne').style.color = "red" 
      document.getElementById('boardScorePlayerTwo').style.color = "green" 
    }
    else {
      document.getElementById('boardScorePlayerOne').style.color = "yellow" 
      document.getElementById('boardScorePlayerTwo').style.color = "yellow" 
    }
  }
})



btnReset.addEventListener('click', () => {
  scorePlayerOne = 0
  scorePlayerTwo = 0
  boardScorePlayerOne.innerHTML = scorePlayerOne
  boardScorePlayerTwo.innerHTML = scorePlayerTwo
  gameOver = false 
  document.getElementById('boardScorePlayerOne').style.color = "purple"  
  document.getElementById('boardScorePlayerTwo').style.color = "purple"  
})
