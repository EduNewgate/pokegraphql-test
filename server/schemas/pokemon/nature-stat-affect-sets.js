const { gql } = require('apollo-server');

const NatureStatAffectSetsModule = gql`
    type NatureStatAffectSets {
        increse: [Nature]
        decrese: [Nature]
    }
`;

module.exports = NatureStatAffectSetsModule;