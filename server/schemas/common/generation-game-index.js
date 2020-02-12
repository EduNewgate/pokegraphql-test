const { gql } = require('apollo-server');

const GenerationGameIndexModule = gql`
    type GenerationGameIndex {
        game_index: Int
        generation: Generation
    }
`;

module.exports = GenerationGameIndexModule;