const { gql } = require('apollo-server');

const MoveStatChangeModule = gql`
    type MoveStatChange {
        change: Int
        stat: Stat
    }
`;

module.exports = MoveStatChangeModule;