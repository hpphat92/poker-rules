const {getCardsMatchAmountByRank} = require('../helper');


function fourOfKind(cardList) {
    return getCardsMatchAmountByRank(cardList, 4);
}

exports.fourOfKind = fourOfKind;