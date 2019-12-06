const { gql } = require('apollo-server');

const MoveBattleStylePreferenceModule = gql`
    type MoveBattleStylePreference {
        low_hp_preference: Int
        high_hp_preference: Int
        move_battle_style: MoveBattleStyle
    }
`;

module.exports = MoveBattleStylePreferenceModule;