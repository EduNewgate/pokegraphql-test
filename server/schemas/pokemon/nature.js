const { gql } = require('apollo-server');

const NatureModule = gql`
    type Nature {
        id: Int
        name: String
        decreased_stat: Stat
        increased_stat: Stat
        hates_flavor: BerryFlavor
        likes_flavor: BerryFlavor
        pokeathlon_stat_change: [NatureStatChange]
        move_battle_style_preferences: [MoveBattleStylePreference]
        names: [Name]
    }
`;

module.exports = NatureModule;