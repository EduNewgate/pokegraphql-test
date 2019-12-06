const { gql } = require('apollo-server');

const PokeathlonStatModule = gql`
    type PokeathlonStat {
        id: Int
        name: String
        names: [Name]
        affecting_natures: NaturePokeathlonStatAffectSets
    }
`;

module.exports = PokeathlonStatModule;