const { gql } = require('apollo-server');

const NaturePokeathlonStatAffectSetsModule = gql`
    type NaturePokeathlonStatAffectSets {
        increase: Int
        decrease: Int
    }
`;

module.exports = NaturePokeathlonStatAffectSetsModule;