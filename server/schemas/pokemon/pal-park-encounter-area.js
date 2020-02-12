const { gql } = require('apollo-server');

const PalParkEncounterAreaModule = gql`
    type PalParkEncounterArea {
        base_score: Int
        rate: Int
        area: PalParkArea
    }
`;

module.exports = PalParkEncounterAreaModule;