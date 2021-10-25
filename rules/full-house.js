const {groupRankByAmountOfCards} = require('../helper');

function fullHouse(cardList) {
    const {rankByAmountOfCards, cardsByRanks} = groupRankByAmountOfCards(cardList);
    let currentFindingAmount = 3;
    let cardResults = [];
    for (let amount = 4; amount >= 2; amount--) {
        if (rankByAmountOfCards[amount]) {
            for (let i = 0; i < rankByAmountOfCards[amount].length; i++) {
                if (currentFindingAmount > amount) {
                    return null;
                }
                if (currentFindingAmount <= amount) {
                    const currentRank = rankByAmountOfCards[amount][i];
                    cardResults = [...cardResults, ...cardsByRanks[currentRank].splice(0, currentFindingAmount--)]
                }
                if (currentFindingAmount === 1) {
                    return cardResults;
                }
            }
        }
    }
    return null;
}

exports.fullHouse = fullHouse;