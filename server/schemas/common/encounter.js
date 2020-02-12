const { gql } = require('apollo-server');

const EncounterModule = gql`
    type Encounter {
        min_level: Int
        max_level: Int
        condition_values: [EncounterConditionValue]
        chance: Int
        method: EncounterMethod
    }
`;

module.exports = EncounterModule;