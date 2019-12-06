const { gql } = require('apollo-server');

const NaturePokeathlonStatAffectModule = gql`
    type NaturePokeathlonStatAffect {
        max_change: Int
        nature: Nature
    }
`;

module.exports = NaturePokeathlonStatAffectModule;