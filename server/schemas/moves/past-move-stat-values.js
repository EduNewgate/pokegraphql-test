const { gql } = require('apollo-server');

const PastMoveStatValuesModule = gql`
    type PastMoveStatValues {
        accuracy: Int
        effect_chance: Int
        power: Int
        pp: Int
        effect_entries: [VerboseEffect]
        type: Type
        version_group: VersionGroup
    }
`;

module.exports = PastMoveStatValuesModule;