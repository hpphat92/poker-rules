const {getCardsMatchAmountByRank} = require('../helper');

function onePair(cardList) {
    return getCardsMatchAmountByRank(cardList, 2);
}

exports.onePair = onePair;