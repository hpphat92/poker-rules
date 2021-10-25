const {checkRule} = require('./rule');
const {Card} = require('./card.model');
const {shuffleCardList, buildCardList, randomSelect} = require('./card');
const {SYMBOL, SUIT} = require('./constants');

// Build card list
let cardList = buildCardList();

// shuffle card list
shuffleCardList(cardList);


// Random select cards
let testHand = randomSelect(cardList, 5);

let hands = [
    new Card(SYMBOL.NUMBER_7, SUIT.CLUB),
    new Card(SYMBOL.NUMBER_2, SUIT.CLUB),
    new Card(SYMBOL.NUMBER_4, SUIT.CLUB),
    new Card(SYMBOL.NUMBER_3, SUIT.CLUB),
    new Card(SYMBOL.NUMBER_6, SUIT.CLUB),
    new Card(SYMBOL.NUMBER_5, SUIT.CLUB),
    new Card(SYMBOL.JACK, SUIT.CLUB),
    new Card(SYMBOL.QUEEN, SUIT.CLUB),
    new Card(SYMBOL.KING, SUIT.CLUB),
]

const {rule, card} = checkRule(testHand);

console.log('Match rule', rule);
console.log('Hands', card);