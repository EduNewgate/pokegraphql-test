const { gql } = require('apollo-server');

const PokemonStatModule = gql`
    type PokemonStat {
        stat: Stat
        effort: Int
        base_stat: Int
    }
`;

module.exports = PokemonStatModule;