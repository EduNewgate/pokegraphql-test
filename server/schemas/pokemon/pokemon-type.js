const { gql } = require('apollo-server');

const PokemonTypeModule = gql`
    type PokemonType {
        slot: Int
        type: Type
    }
`;

module.exports = PokemonTypeModule;