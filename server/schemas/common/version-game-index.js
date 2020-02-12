const { gql } = require('apollo-server');

const VersionGameIndexModule = gql`
    type VersionGameIndex {
        game_index: Int
        version: Version
    }
`;

module.exports = VersionGameIndexModule;