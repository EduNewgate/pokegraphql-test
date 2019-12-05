const { gql } = require('apollo-server');

const MoveFlavorTextModule = gql`
    type MoveFlavorText {
        flavor_text: String
        language: Language
        version_group: VersionGroup
    }
`;

module.exports = MoveFlavorTextModule;