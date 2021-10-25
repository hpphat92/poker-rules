const {groupRankByAmountOfCards} = require('../helper');

function twoPair(cardList) {
    const {rankByAmountOfCards, cardsByRanks} = groupRankByAmountOfCards(cardList);

    if (rankByAmountOfCards[2] && rankByAmountOfCards[2].length >= 2) {
        return [...cardsByRanks[rankByAmountOfCards[2][0]], ...cardsByRanks[rankByAmountOfCards[2][1]]];
    }

    return null;
}

exports.twoPair = twoPair;