const {getRank} = require("../helper");
const {findByRankAndSuit} = require('../helper');

function straightFlush(cardList) {
    for (let i = 0; i < cardList.length; i++) {
        let card = cardList[i];
        const findingResult = [1, 2, 3, 4].reduce((arr, currentRankIndex) => {
            let newRank = getRank(card.rank, currentRankIndex);
            const newCard = findByRankAndSuit(cardList, newRank, card.suit);
            if (newCard) {
                arr.push(newCard);
            }

            return arr;
        }, [card]);

        if (findingResult.length === 5) {
            return findingResult;
        }
    }
    return null;
}

exports.straightFlush = straightFlush;