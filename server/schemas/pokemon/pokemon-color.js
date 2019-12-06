const { gql } = require('apollo-server');

const PokemonColorModule = gql`
    type PokemonColor {
        id: Int
        name: String
        names: [Name]
        pokemon_species: [PokemonSpecies]
    }
`;

module.exports = PokemonColorModule;