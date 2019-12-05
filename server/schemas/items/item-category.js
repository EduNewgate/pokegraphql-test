const { gql } = require('apollo-server');

const ItemCategoryModule = gql`
    type ItemCategory {
        id: Int
        name: String
        items: [Item]
        names: [Name]
        pockets: ItemPocket
    }
`;

module.exports = ItemCategoryModule;