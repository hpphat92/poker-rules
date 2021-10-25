const {RANK_LIST, RANK_VALUE} = require('./constants');

function findAllRank(cardList, rank) {
    if (!cardList || !cardList.length) {
        return [];
    }
    return cardList.filter(card => card.rank === rank);
}

function findAllSuit(cardList, suit) {
    if (!cardList || !cardList.length) {
        return [];
    }
    return cardList.filter(card => card.suit === suit);
}

function findByRankAndSuit(cardList, rank, suit) {
    if (!cardList || !cardList.length) {
        return null;
    }
    return cardList.find(card => card.suit === suit && card.rank === rank);
}

function getRank(currentRank, index = 1) {
    let currentRankIndex = RANK_LIST.findIndex(rank => rank === currentRank);

    if (currentRankIndex === -1) {
        return null;
    }

    currentRankIndex += index;

    if (currentRankIndex < 0) {
        currentRankIndex += RANK_LIST.length;
    }

    if (currentRankIndex >= RANK_LIST.length) {
        currentRankIndex -= RANK_LIST.length;
    }
    return RANK_LIST[currentRankIndex];
}

function groupRankByAmountOfCards(cardList) {
    const cardsByRanks = cardList.reduce((acc, currentCard) => {
        acc[currentCard.rank] = acc[currentCard.rank] || [];
        acc[currentCard.rank].push(currentCard);
        return acc;
    }, {});

    const rankByAmountOfCards = {};
    for (let rank in cardsByRanks) {
        let amountOfCards = cardsByRanks[rank].length;

        rankByAmountOfCards[amountOfCards] = rankByAmountOfCards[amountOfCards] || [];

        rankByAmountOfCards[amountOfCards].push(rank)
    }

    return {rankByAmountOfCards, cardsByRanks, ranks: Object.keys((cardsByRanks))};
}

function groupSuitByAmountOfCards(cardList) {
    const cardsBySuits = cardList.reduce((acc, currentCard) => {
        acc[currentCard.suit] = acc[currentCard.suit] || [];
        acc[currentCard.suit].push(currentCard);
        return acc;
    }, {});

    const suitByAmountOfCards = {};
    for (let suit in cardsBySuits) {
        let amountOfCards = cardsBySuits[suit].length;

        suitByAmountOfCards[amountOfCards] = suitByAmountOfCards[amountOfCards] || [];

        suitByAmountOfCards[amountOfCards].push(suit);
    }

    return {suitByAmountOfCards, cardsBySuits, suits: Object.keys((cardsBySuits))};
}

function sortAscByRanks(rankList) {
    return rankList.sort((rankA, rankB) => {
        return RANK_VALUE[rankA] > RANK_VALUE[rankB] ? 1 : -1;
    });
}

function sortCardListAscByRanks(cardList) {
    return cardList.sort((cardA, cardB) => {
        return RANK_VALUE[cardA.rank] > RANK_VALUE[cardB.rank] ? 1 : -1;
    });
}

function getCardsMatchAmountByRank(cardList, amountMin) {
    for (let i = 0; i < cardList.length; i++) {
        let card = cardList[i];
        const findingResult = findAllRank(cardList, card.rank);
        if (findingResult.length >= amountMin) {
            return findingResult.splice(0, amountMin);
        }
    }
    return null;
}

exports.findAllRank = findAllRank;
exports.findAllSuit = findAllSuit;
exports.findByRankAndSuit = findByRankAndSuit;
exports.getRank = getRank;
exports.groupRankByAmountOfCards = groupRankByAmountOfCards;
exports.groupSuitByAmountOfCards = groupSuitByAmountOfCards;
exports.getCardsMatchAmountByRank = getCardsMatchAmountByRank;
exports.sortCardListAscByRanks = sortCardListAscByRanks;
exports.sortAscByRanks = sortAscByRanks;
