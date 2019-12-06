const { gql } = require('apollo-server');

const PokemonMoveVersionModule = gql`
    type PokemonMoveVersion {
        move_learn_method: MoveLearnMethod
        version_group: VersionGroup
        level_learned_at: Int
    }
`;

module.exports = PokemonMoveVersionModule;