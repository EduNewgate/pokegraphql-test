const { gql } = require('apollo-server');

const ItemPocketModule = gql`
    type ItemPocket {
        id: Int
        name: String
        categories: [ItemCategory]
        names: [Name]
    }
`;

module.exports = ItemPocketModule;