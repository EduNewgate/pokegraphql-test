const { gql } = require('apollo-server');

const MoveStatAffectSetsModule = gql`
    type MoveStatAffectSets {
        increse: [MoveStatAffect]
        decrese: [MoveStatAffect]
    }
`;

module.exports = MoveStatAffectSetsModule;