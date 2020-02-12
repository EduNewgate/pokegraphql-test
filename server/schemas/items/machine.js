const { gql } = require('apollo-server');

const MachineModule = gql`
    type Machine {
        id: Int
        item: Item
        move: Move
        version_group: VersionGroup
    }
`;

module.exports = MachineModule;