const { gql } = require('apollo-server');

const StatModule = gql`
    type Stat {
        id: Int
        name: String
        game_index: Int
        is_battle_only: Boolean
        affecting_moves: MoveStatAffectSets
        affecting_natures: NatureStatAffectSets
        characteristics: Characteristic
        move_damage_class: MoveDamageClass
        names: [Name]
    }
`;

module.exports = StatModule;