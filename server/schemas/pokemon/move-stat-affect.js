const { gql } = require('apollo-server');

const MoveStatAffectModule = gql`
    type MoveStatAffect {
        change: Int
        move: Move
    }
`;

module.exports = MoveStatAffectModule;