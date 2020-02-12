const { gql } = require('apollo-server');

const MachineVersionDetailModule = gql`
    type MachineVersionDetail {
        machine: Machine
        version_group: VersionGroup
    }
`;

module.exports = MachineVersionDetailModule;