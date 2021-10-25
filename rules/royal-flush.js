const {findByRankAndSuit, findAllRank} = require('../helper');
const {SYMBOL} = require('../constants');

function royalFlush(cardList) {
    const aceCard = findAllRank(cardList, SYMBOL.ACE);
    if (!aceCard || !aceCard.length) {
        return null;
    }
    for (let i = 0; i < aceCard.length; i++) {
        let ace = aceCard[i];
        const cardResult = [SYMBOL.KING, SYMBOL.QUEEN, SYMBOL.JACK, SYMBOL.NUMBER_10].reduce((acc, rank) => {
            const card = findByRankAndSuit(cardList, rank, ace.suit);
            if (card) {
                acc.push(card);
            }
            return acc;
        }, [ace]);
        if (cardResult.length === 5) {
            return cardResult;
        }
    }

    return null;
}

exports.royalFlush = royalFlush;