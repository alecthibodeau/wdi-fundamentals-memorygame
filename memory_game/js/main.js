var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];
var cardElement = true;
var x = 0;
var y = 0;

var newGame = function () {
	console.log("Got to new game.");
	document.querySelector("#game-board").innerHTML = "";
	// document.getElementById('playAgain').style.color = "#FFFFFF";
	cardsInPlay = [];
	createBoard();
}

var resetCount = function () {
	x = 0;
	y = 0;
	document.querySelector("#matchesCount").innerHTML = "0";
	document.querySelector("#mismatchesCount").innerHTML = "0";
}

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
	x = x += 1;
	} else if (cardsInPlay[0] !== cardsInPlay[1]) {
	alert("Sorry, try again.");
	y = y += 1;
	}     
	// document.getElementById('playAgain').addEventListener('click', newGame);      
	// document.getElementById('resetScore').addEventListener('click', resetCount);
	document.getElementById('matchesCount').textContent = x;
	document.getElementById('mismatchesCount').textContent = y;
	document.getElementById('playAgain').style.visibility = "visible";
}

var flipCard = function () {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
	checkForMatch();
	}
}

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src', "images/back.png");
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipCard);
	document.getElementById('game-board').appendChild(cardElement);
	}      
	document.getElementById('playAgain').addEventListener('click', newGame);      
	document.getElementById('resetScore').addEventListener('click', resetCount);
	console.log("Board created.");
}

createBoard();