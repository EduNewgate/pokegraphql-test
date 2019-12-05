const { gql } = require('apollo-server');

const ItemSpritesModule = gql`
    type ItemSprite {
        default: String
    }
`;

module.exports = ItemSpritesModule;