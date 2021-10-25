const {sortCardListAscByRanks} = require('../helper');

function highCard(cardList) {
    const result = sortCardListAscByRanks([...cardList]);

    return [result[result.length - 1]];
}

exports.highCard = highCard;