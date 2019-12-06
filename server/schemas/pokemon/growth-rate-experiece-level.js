const { gql } = require('apollo-server');

const GrowthRateExperienceLevelModule = gql`
    type GrowthRateExperienceLevel {
        level: Int
        experience: Int
    }
`;

module.exports = GrowthRateExperienceLevelModule;