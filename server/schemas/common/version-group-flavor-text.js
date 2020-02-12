const { gql } = require('apollo-server');

const VersionGroupFlavorTextModule = gql`
    type VersionGroupFlavorText {
        text: String
        language: Language
        version_group: VersionGroup
    }
`;

module.exports = VersionGroupFlavorTextModule;