const { gql } = require('apollo-server');

const ItemFlingEffectModule = gql`
    type ItemFlingEffect {
        id: Int
        name: String
        effect_entries: [Effect]
        items: [Item]
    }
`;

module.exports = ItemFlingEffectModule;