const {checkRule} = require('./rule');
const {Card} = require('./card.model');
const {shuffleCardList, buildCardList, randomSelect} = require('./card');
const {SYMBOL, SUIT} = require('./constants');

// Build list of 52 cards
let cardList = buildCardList();

// shuffle card list
shuffleCardList(cardList);

// Random select cards
let testHand = randomSelect(cardList, 5);

// un-comment this code block and use this variable as input of method checkRule.
// let hands = [
//     new Card(SYMBOL.NUMBER_7, SUIT.CLUB),
//     new Card(SYMBOL.NUMBER_2, SUIT.CLUB),
//     new Card(SYMBOL.NUMBER_4, SUIT.CLUB),
//     new Card(SYMBOL.NUMBER_3, SUIT.CLUB),
//     new Card(SYMBOL.NUMBER_6, SUIT.CLUB),
//     new Card(SYMBOL.NUMBER_5, SUIT.CLUB),
//     new Card(SYMBOL.JACK, SUIT.CLUB),
//     new Card(SYMBOL.QUEEN, SUIT.CLUB),
//     new Card(SYMBOL.KING, SUIT.CLUB),
// ]

const {rule, card} = checkRule(testHand);

console.log(rule);
console.log(card);