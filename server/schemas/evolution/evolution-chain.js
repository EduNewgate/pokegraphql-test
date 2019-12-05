const { gql } = require('apollo-server');

const EvolutionChainModule = gql`
    type EvolutionChain {
        id: Int
        baby_trigger_item: Item
        chain: ChainLink
    }
`;

module.exports = EvolutionChainModule;