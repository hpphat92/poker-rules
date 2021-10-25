const SYMBOL = {
    ACE: 'A',
    NUMBER_2: '2',
    NUMBER_3: '3',
    NUMBER_4: '4',
    NUMBER_5: '5',
    NUMBER_6: '6',
    NUMBER_7: '7',
    NUMBER_8: '8',
    NUMBER_9: '9',
    NUMBER_10: '10',
    JACK: 'J',
    QUEEN: 'Q',
    KING: 'K',
};

const RANK_VALUE = {
    [SYMBOL.ACE]: 1,
    [SYMBOL.NUMBER_2]: 2,
    [SYMBOL.NUMBER_3]: 3,
    [SYMBOL.NUMBER_4]: 4,
    [SYMBOL.NUMBER_5]: 5,
    [SYMBOL.NUMBER_6]: 6,
    [SYMBOL.NUMBER_7]: 7,
    [SYMBOL.NUMBER_8]: 8,
    [SYMBOL.NUMBER_9]: 9,
    [SYMBOL.NUMBER_10]: 10,
    [SYMBOL.JACK]: 11,
    [SYMBOL.QUEEN]: 12,
    [SYMBOL.KING]: 13
}

const SUIT = {
    CLUB: 'club',
    DIAMOND: 'diamond',
    HEART: 'heart',
    SPADE: 'spade',
};

const SUIT_LIST = [SUIT.CLUB, SUIT.DIAMOND, SUIT.HEART, SUIT.SPADE];

const RANK_LIST = [SYMBOL.ACE, SYMBOL.NUMBER_2, SYMBOL.NUMBER_3, SYMBOL.NUMBER_4, SYMBOL.NUMBER_5, SYMBOL.NUMBER_6, SYMBOL.NUMBER_7, SYMBOL.NUMBER_8, SYMBOL.NUMBER_9, SYMBOL.NUMBER_10, SYMBOL.JACK, SYMBOL.QUEEN, SYMBOL.KING];


exports.SYMBOL = SYMBOL;
exports.SUIT = SUIT;
exports.SUIT_LIST = SUIT_LIST;
exports.RANK_LIST = RANK_LIST;
exports.RANK_VALUE = RANK_VALUE;
