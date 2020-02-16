const { gql } = require('apollo-server');

const PokemonCardModule = gql`
    type PokemonCard {
        name: String
        weight: Float
        height: Float
        types: [PokemonType]
        abilities: [PokemonAbility]
        stats: [PokemonStat]
    }
`;

module.exports = PokemonCardModule;