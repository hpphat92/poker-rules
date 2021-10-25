const {groupSuitByAmountOfCards} = require('../helper');

function flush(cardList) {
    const {cardsBySuits, suits} = groupSuitByAmountOfCards(cardList);

    for (let i = 0; i < suits.length; i++) {
        const cardsBySuit = cardsBySuits[suits[i]];
        if (cardsBySuit.length >= 5) {
            return cardsBySuit.splice(0, 5);
        }
    }
    return null;
}

exports.flush = flush;