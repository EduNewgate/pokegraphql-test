const { gql } = require('apollo-server');

const PokemonSpritesModule = gql`
    type PokemonSprites {
        front_default: String
        front_shiny: String
        front_female: String
        front_shiny_female: String
        back_default: String
        back_shiny: String
        back_female: String
        back_shiny_female: String
    }
`;

module.exports = PokemonSpritesModule;