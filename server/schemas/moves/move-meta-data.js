const { gql } = require('apollo-server');

const MoveMetaDataModule = gql`
    type MoveMetaData {
        ailment: MoveAilment
        category: MoveCategory
        min_hits: Int
        max_hits: Int
        min_turns: Int
        max_turns: Int
        drain: Int
        healing: Int
        crit_rate: Int
        ailment_chance: Int
        flinch_chance: Int
        stat_chance: Int
    }
`;

module.exports = MoveMetaDataModule;