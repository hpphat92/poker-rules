const {RANK_LIST, RANK_VALUE} = require('./constants');
const {royalFlush} = require('./rules/royal-flush');
const {straightFlush} = require('./rules/straight-flush');
const {fullHouse} = require('./rules/full-house');
const {fourOfKind} = require('./rules/four-of-kind');
const {threeOfKind} = require('./rules/three-of-kind');
const {straight} = require('./rules/straight');
const {flush} = require('./rules/flush');
const {highCard} = require('./rules/high-card');
const {onePair} = require('./rules/one-pair');
const {twoPair} = require('./rules/two-pair');

const RULE_PRIORITY = [
    {
        name: 'royalFlush',
        fn: royalFlush
    },
    {
        name: 'straightFlush',
        fn: straightFlush
    },
    {
        name: 'fourOfKind',
        fn: fourOfKind
    },
    {
        name: 'fullHouse',
        fn: fullHouse
    },
    {
        name: 'flush',
        fn: flush
    },
    {
        name: 'straight',
        fn: straight
    },
    {
        name: 'threeOfKind',
        fn: threeOfKind
    },
    {
        name: 'twoPair',
        fn: twoPair
    },
    {
        name: 'onePair',
        fn: onePair
    },
    {
        name: 'highCard',
        fn: highCard
    }
];

function checkRule(cardList) {
    for (let i = 0; i < RULE_PRIORITY.length; i++) {
        let rule = RULE_PRIORITY[i];

        let result = rule.fn(cardList);

        if (result) {
            return {
                rule: rule.name,
                card: result
            };
        }
    }
    return null;
}

exports.checkRule = checkRule;
