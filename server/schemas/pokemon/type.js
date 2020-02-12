const { gql } = require('apollo-server');

const TypeModule = gql`
    type Type {
        id: Int
        name: String
        damage_relations: TypeRelations
        game_indicies: [GenerationGameIndex]
        generation: Generation
        move_damage_class: MoveDamageClass
        names: [Name]
        pokemon: [TypePokemon]
        moves: [Move]
    }
`;

module.exports = TypeModule;