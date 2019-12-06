const { gql } = require('apollo-server');

const NatureStatChangeModule = gql`
    type NatureStatChange {
        max_change: Int
        pokeathlon_stat: PokeathlonStat
    }
`;

module.exports = NatureStatChangeModule;