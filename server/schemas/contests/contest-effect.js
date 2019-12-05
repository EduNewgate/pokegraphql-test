const { gql } = require('apollo-server');

const ContestEffectModule = gql`
    type ContestEffect {
        id: Int
        appeal: Int
        jam: Int
        effect_entries: [Effect]
        flavor_text_entries: [FlavorText]
    }
`;

module.exports = ContestEffectModule;