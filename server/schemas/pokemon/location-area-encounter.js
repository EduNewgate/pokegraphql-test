const { gql } = require('apollo-server');

const LocationAreaEncounterModule = gql`
    type LocationAreaEncounter {
        location_area: LocationArea
        version_details: [VersionEncounterDetail]
    }
`;

module.exports = LocationAreaEncounterModule;