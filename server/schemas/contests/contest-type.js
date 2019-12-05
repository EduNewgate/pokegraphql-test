const { gql } = require('apollo-server');

const ContestTypeModule = gql`
    type ContestType {
        id: Int
        name: String
        berry_flavor: BerryFlavor
        names: [ContestName]
    }
`;

module.exports = ContestTypeModule;