const {Card} = require('./card.model');
const {RANK_LIST, SUIT_LIST} = require('./constants');

function buildCardList() {
    let cardList = [];

    SUIT_LIST.forEach(suit => {
        RANK_LIST.forEach(rank => {
            cardList.push(new Card(rank, suit));
        });
    });

    return cardList;
}

function shuffleCardList(cardList) {
    cardList = [...cardList];
    cardList.sort(() => .5 - Math.random());
    return cardList;
}

function randomSelect(cardList, amount) {
    const shuffleCards = shuffleCardList(cardList);

    return shuffleCards.splice(0, amount);
}


exports.buildCardList = buildCardList;
exports.shuffleCardList = shuffleCardList;
exports.randomSelect = randomSelect;