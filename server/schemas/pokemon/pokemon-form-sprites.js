const { gql } = require('apollo-server');

const PokemonFormSpritesModule = gql`
    type PokemonFormSprites {
        front_default: String
        front_shiny: String
        back_default: String
        back_shiny: String
    }
`;

module.exports = PokemonFormSpritesModule;