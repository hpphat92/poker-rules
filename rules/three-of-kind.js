const {getCardsMatchAmountByRank} = require('../helper');

function threeOfKind(cardList) {
    return getCardsMatchAmountByRank(cardList, 3);
}

exports.threeOfKind = threeOfKind;