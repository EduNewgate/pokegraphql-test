const { gql } = require('apollo-server');

const BerryFirmnessModule = gql`
    type BerryFirmness {
        id: Int
        name: String
        berries: [Berry]
    }
`;

module.exports = BerryFirmnessModule;