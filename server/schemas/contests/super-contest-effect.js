const { gql } = require('apollo-server');

const SuperContestEffectModule = gql`
    type SuperContestEffect {
        id: Int
        appeal: Int
        flavor_text_entries: [FlavorText]
        moves: [Move]
    }
`;

module.exports = SuperContestEffectModule;