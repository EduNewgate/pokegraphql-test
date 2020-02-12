const { gql } = require('apollo-server');

const TypeRelationsModule = gql`
    type TypeRelations {
        no_damage_to: [Type]
        half_damage_to: [Type]
        double_damage_to: [Type]
        no_damage_from: [Type]
        half_damage_from: [Type]
        double_damage_from: [Type]
    }
`;

module.exports = TypeRelationsModule;