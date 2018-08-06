const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const deck = [];
let player1Card = null;
let player2Card = null;

function buildDeck() {

  for (let suitCount = 0; suitCount < 4; suitCount++) {

    for (let i = 0; i < values.length; i++) {
      const cardObject = {};
      cardObject.value = values[i];
      cardObject.suit = suits[suitCount];
      //cardObject.rank = i + 2; 
      //card ranking shortcut

      deck.push(cardObject);
    }
  }
  return deck;
}

function dealCardsToPlayers() {

  // select cards at random
  const numBetweenZeroAndFiftyOne = Math.floor(Math.random() * deck.length);
  // one less than a deck of 52 for array index purposes

  player1Card = deck.splice(numBetweenZeroAndFiftyOne, 1); //[numBetweenZeroAndFiftyOne, 1];

  const numBetweenZeroAndFifty = Math.floor(Math.random() * (deck.length));
  // one less than a deck of 51 for array index purposes

  player2Card = deck.splice(numBetweenZeroAndFifty, 1); //[numBetweenZeroAndFifty];

  console.log(player1Card);
  let player1CardRank = player1Card[0].value
  console.log(player1CardRank);

  console.log(player2Card);
  let player2CardRank = player2Card[0].value
  console.log(player2CardRank);

  return player1Card, player2Card;

}

function announceCards() {
  console.log('Player 1 is showing the ' + player1Card[0].value + ' of ' + player1Card[0].suit);
  console.log('Player 2 is showing the ' + player2Card[0].value + ' of ' + player2Card[0].suit);
}

function cardToRank(card) {

  let playerCardRank = card[0].value;

  // calculate card values greater than 10
  if (card[0].value <= 10) {
    playerCardRank = card[0].value;
  } else if (card[0].value === 'Jack') {
    playerCardRank = 11;
  } else if (card[0].value === 'Queen') {
    playerCardRank = 12;
  } else if (card[0].value === 'King') {
    playerCardRank = 13;
  } else if (card[0].value === 'Ace') {
    playerCardRank = 14;
  }

  return playerCardRank;

}

function announceWinner() {
  if (cardToRank(player1Card) > cardToRank(player2Card)) {
    console.log('Player 1 wins!');
  } else if (cardToRank(player1Card) === cardToRank(player2Card)) {
    console.log('It\'s a tie!');
  } else {
    console.log('Player 2 wins!');
  }
}

function returnCardsToDeck() {
  deck.push(player1Card, player2Card);
}

function playGame() {
  dealCardsToPlayers();
  announceCards();
  announceWinner();
  returnCardsToDeck();
}

buildDeck();
playGame();
// console.log(deck);