const { gql } = require('apollo-server');

const VersionModule = gql`
    type Version {
        id: Int
        name: String
        names: [Name]
        version_group: VersionGroup
    }
`;

module.exports = VersionModule;