const { gql } = require('apollo-server');

const ItemAttributeModule = gql`
    type ItemAttribute {
        id: Int
        name: String
        item: [Item]
        names: [Name]
        descriptions: [Description]
    }
`;

module.exports = ItemAttributeModule;