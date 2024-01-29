class Card {
  constructor(suit, rank, value) {
    this.suit = suit;
    this.rank = rank;
    this.value = value;
  }
}

class Deck {
  constructor() {
    this.cards = [];
    this.suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
    this.names = [
      "Ace",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
    ];
    this.values = [14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  }

  createDeck() {
    console.log("Creating a new Deck");
    for (let i = o; i < this.suits.length; i++) {
      for (let n = 0; n < this.suits.length; n++) {
        this.cards.push(new Card(this.suits[i], this.names[n], this.value[n]));
      }
    }
  }

  shuffleDeck() {
    console.log("Shuffling Deck");
    const shuffledDeck = [];
    for (let i = 0; i < 52; i++) {
      let randomPosition = Math.floor((this.cards.length - i) * Math.random());
      let randomItem = this.cards.splice(randomPosition, 1);
      shuffledDeck.push(...randomItem);
    }
    return shuffledDeck;
  }

  dealDeck(players, shuffledCards) {
    console.log("Dealing Cards");
    let dealingCards1 = shuffledCards.splice(0, 26);
    players[0].hands.push(...dealingCards1);
    let dealingCards2 = shuffledCards.splice(0, 26);
    players[1].hands.push(...dealingCards2);
  }
}

class Players {
  constructor(name) {
    this.name = name;
    this.points = 0;
    this.hands = [];
  }
}

class Game {
  constructor() {
    this.players = [];
  }

  start() {
    this.players.push(new Players("Player 1"));
    this.players.push(new Players("Player 2"));
    console.log("War!", this.players);

    let myDeck = new Deck();
    myDeck.createDeck();
    let shuffledDeck = myDeck.shuffleDeck();

    myDeck.dealDeck(this.players, shuffledDeck);

    this.playGame();

    this.endGame();
  }

  playGame() {
    console.log("War!");
    let player1 = this.players[0];
    let player2 = this.players[1];

    let roundWInner = "";
    let turn = 0;

    while (player1.hands.length !== 0 && player2.hands.length !== 0) {
      let player1Card = player1.hands.pop();
      let player2Card = player2.hands.pop();
      if (player1Card.value > player2Card.value) {
        roundWinner = player1.name;
        player1.points += 1;
        console.log(
          "Turn:",
          (turn = +1),
          "\nPlayer 1 card:",
          player1Card.name,
          " of ",
          player1Card.suit,
          "\nPlayer 2 card:",
          player2Card.name,
          " of ",
          player2Card.suit
        );
      } else if (player2Card.value > player1Card.value) {
        roundWinner = player2.name;
        player2.points += 1;
        console.log(
          "Turn;",
          (turn = +1),
          "\nPlayer 1 card:",
          player1Card.name,
          " of ",
          player1Card.suit,
          "\nPlayer 2 card:",
          player2Card.name,
          " of ",
          player2Card.suit
        );
      } else {
        console.log(
          "Turn;",
          (turn = +1),
          "\nPlayer 1 card:",
          player1Card.name,
          " of ",
          player1Card.suit,
          "\nPlayer 2 card:",
          player2Card.name,
          " of ",
          player2Card.suit
        );
      }
    }
  }

  endGame() {
    let gameWinner = "";
    let player1 = this.players[0];
    let player2 = this.players[1];
    let winnerPoints = 0;

    if (player1.points > player2.points) {
      gameWinner = player1.name;
      winnerPoints = player2.points;
      alert(
        "Game Over!" +
          gameWinner +
          "won the game!\nFinal Scores:\n" +
          player1.name +
          ": " +
          player1.points +
          "\n" +
          player2.name +
          ":" +
          player2.points +
          "\nThanks for Playing!"
      );
    } else if (player2.points > player1.points) {
      gameWinner = player2.name;
      winnerPoints = player2.points;
      alert(
        "Game Over!" +
          gameWinner +
          "won the game!\nFinal Scores:\n" +
          player1.name +
          ": " +
          player1.points +
          "\n" +
          player2.name +
          ":" +
          player2.points +
          "\nThanks for Playing!"
      );
    } else {
      alert(
        "Game Over!" +
          gameWinner +
          "won the game!\nFinal Scores:\n" +
          player1.name +
          ": " +
          player1.points +
          "\n" +
          player2.name +
          ":" +
          player2.points +
          "\nThanks for Playing!"
      );
    }
  }
}

let game = new Game();
game.start();
