const { gql } = require('apollo-server');

const PokemonMoveModule = gql`
    type PokemonMove {
        move: Move
        version_group_details: [PokemonMoveVersion]
    }
`;

module.exports = PokemonMoveModule;