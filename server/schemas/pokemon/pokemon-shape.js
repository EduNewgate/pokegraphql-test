const { gql } = require('apollo-server');

const PokemonShapeModule = gql`
    type PokemonShape {
        id: Int
        name: String
        awesome_names: [AwesomeName]
        names: [Name]
        pokemon_species: [PokemonSpecies]
    }
`;

module.exports = PokemonShapeModule;