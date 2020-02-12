const { gql } = require('apollo-server');

const VersionEncounterDetailModule = gql`
    type VersionEncounterDetail {
        version: Version
        max_chance: Int
        encounter_details: [Encounter]
    }
`;

module.exports = VersionEncounterDetailModule;