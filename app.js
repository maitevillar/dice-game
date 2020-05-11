/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice, gamePlay;

document.querySelector('.dice').style.display = 'none';

var holdBtn = document.querySelector('.btn-hold')
var reset = document.querySelector('.btn-new')

init()

function clickListener(){
    if (gamePlay) {
        var randomNumber = Math.floor(Math.random() * 6) +1;

        var diceDOM = document.querySelector('.dice')
        diceDOM.style.display = 'block';
        diceDOM.src = './images/dice-' + randomNumber + '.png';

        if (randomNumber !== 1){
            roundScore += randomNumber;
            document.querySelector('#current-'+ activePlayer).textContent = roundScore;
        } else {
            nextPlayer()
        }
    }
}

function scoreHolder() {
    if(gamePlay) {
        scores[activePlayer] += roundScore;
        document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer]
        
        if ( scores[activePlayer] >= 50) {
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!'
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlay = false;
        } else {
            nextPlayer()
        }
    }
}

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')
}

function init() {
    scores = [0,0]
    activePlayer = 0;
    roundScore = 0;
    gamePlay = true;

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner')
    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-0-panel').classList.add('active')
    document.querySelector('.player-1-panel').classList.remove('active')
}

var one ="#F5B7B1"
var two = '#D2B4DE ';
var three = '#AED6F1';
var four = '#A2D9CE';
var five = '#ABEBC6';
var six = '#FAD7A0';
var seven = '#EDBB99';


var colors = [ one , two, three, four, five, six ];
var currentIndex = 0;
var body = document.querySelector('body')

setInterval(function() {
    body.style.cssText = "background-color: " + colors[currentIndex];
	currentIndex++;
	if (currentIndex == undefined || currentIndex >= colors.length) {
		currentIndex = 0;
	}
}, 1500);


var button = document.querySelector('.btn-roll')
button.addEventListener('click', clickListener )
holdBtn.addEventListener('click', scoreHolder)
reset.addEventListener('click', init )


