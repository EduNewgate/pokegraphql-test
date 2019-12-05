const { gql } = require('apollo-server');

const MoveModule = gql`
    type Move {
        id: Int
        name: String
        accuracy: Int
        effect_chance: Int
        pp: Int
        priority: Int
        power: Int
        contest_combos: ContestComboSets
        contest_type: ContestType
        contest_effect: ContestEffect
        damage_class: MoveDamageClass
        effect_entries: [VerboseEffect]
        effect_changes: [AbilityEffectChange]
        flavor_text_entries: [MoveFlavorText]
        generation: Generation
        machines: [MachineVersionDetail]
        meta: MoveMetaData
        names: [Name]
        past_values: PastMoveStatValues
        stat_changes: [MoveStatChange]
        super_contest_effect: SuperContestEffect
        target: MoveTarget
        type: Type
    }
`;

module.exports = MoveModule;