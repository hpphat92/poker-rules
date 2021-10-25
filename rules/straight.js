const {groupRankByAmountOfCards, sortAscByRanks} = require('../helper');
const {RANK_VALUE} = require('../constants');

function straight(cardList) {
    const {ranks, cardsByRanks} = groupRankByAmountOfCards(cardList);
    sortAscByRanks(ranks);

    let bufferList = [
        [ranks[0]]
    ];

    let loopRanks = () => {
        for (let i = 1; i < ranks.length; i++) {
            if (RANK_VALUE[ranks[i]] - RANK_VALUE[ranks[i - 1]] === 1) {
                bufferList[i] = [...(bufferList[i - 1] || []), ranks[i]];
            } else {
                bufferList[i] = [ranks[i]];
            }

            if (bufferList[i].length === 5) {
                return bufferList[i];
            }
        }

        if (RANK_VALUE[ranks[0]] + 13 - RANK_VALUE[ranks[ranks.length - 1]] === 1) {
            bufferList[0] = [...(bufferList[ranks.length - 1] || []), ...bufferList[0]];
        }

        if (bufferList[0].length === 5) {
            return bufferList[0];
        }
        return null;
    }

    const result = loopRanks() || loopRanks();

    if (!result) {
        return null;
    }

    return result.map(rank => cardsByRanks[rank][0]);
}

exports.straight = straight;