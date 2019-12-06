const { gql } = require('apollo-server');

const CharacteristicsModule = gql`
    type Characteristics {
        id: Int
        gene_modulo: Int
        posible_values: [Int]
    }
`;

module.exports = CharacteristicsModule;