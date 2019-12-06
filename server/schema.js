const { gql } = require('apollo-server');
const UnNamedResourceListModule = require('./schemas/resources/unnamed-resource-list');
const UnNamedResourceModule = require('./schemas/common/unnamed-resource');
const NamedResourceListModule = require('./schemas/resources/named-resource-list');
const NamedResourceModule = require('./schemas/common/named-resource');
const BerryModule = require('./schemas/berries/berry');
const BerryFlavorMapModule = require('./schemas/berries/berry-flavor-map');
const BerryFirmnessModule = require('./schemas/berries/berry-firmness');
const BerryFlavorModule = require('./schemas/berries/berry-flavor');
const FlavorBerryMapModule = require('./schemas/berries/flavor-berry-map');
const ContestTypeModule = require('./schemas/contests/contest-type');
const ContestNameModule = require('./schemas/contests/contest-name');
const ContestEffectModule = require('./schemas/contests/contest-effect');
const SuperContestEffectModule = require('./schemas/contests/super-contest-effect');
const EncounterMethodModule = require('./schemas/encounters/encounter-method');
const EncounterConditionModule = require('./schemas/encounters/encounter-condition');
const EncounterConditionValueModule = require('./schemas/encounters/encounter-condition-value');
const EvolutionChainModule = require('./schemas/evolution/evolution-chain');
const ChainLinkModule = require('./schemas/evolution/chain-link');
const EvolutionDetailModule = require('./schemas/evolution/evolution-detail');
const EvolutionTriggerModule = require('./schemas/evolution/evolution-trigger');
const GenerationModule = require('./schemas/games/generation');
const PokedexModule = require('./schemas/games/pokedex');
const PokemonEntryModule = require('./schemas/games/pokemon-entry');
const VersionModule = require('./schemas/games/version');
const VersionGroupModule = require('./schemas/games/version-group');
const ItemModule = require('./schemas/items/item');
const ItemSpritesModule = require('./schemas/items/item-sprite');
const ItemHolderPokemonModule = require('./schemas/items/item-holder-pokemon');
const ItemHolderPokemonVersionDetailModule = require('./schemas/items/item-holder-pokemon-version-detail');
const ItemAttributeModule = require('./schemas/items/item-attribute');
const ItemCategoryModule = require('./schemas/items/item-category');
const ItemFlingEffectModule = require('./schemas/items/item-fling-effect');
const ItemPocketModule = require('./schemas/items/item-pocket');
const MachineModule = require('./schemas/items/machine');
const LocationModule = require('./schemas/locations/location');
const LocationAreaModule = require('./schemas/locations/location-area');
const EncounterMethodRateModule = require('./schemas/locations/encounter-method-rate');
const EncounterVersionDetailsModule = require('./schemas/locations/encounter-version-details');
const PokemonEncounterModule = require('./schemas/locations/pokemon-encounter');
const PalParkAreaModule = require('./schemas/locations/pal-park-area');
const PalParkEncounterSpeciesModule = require('./schemas/locations/pal-park-encounter-species');
const RegionModule = require('./schemas/locations/region');
const MoveModule = require('./schemas/moves/move');
const ContestComboSetsModule = require('./schemas/moves/contest-como-sets');
const ContestComboDetailModule = require('./schemas/moves/contest-combo-detail');
const MoveFlavorTextModule = require('./schemas/moves/move-flavor-text');
const MoveMetaDataModule = require('./schemas/moves/move-meta-data');
const MoveStatChangeModule = require('./schemas/moves/move-stat-change');
const MoveAilmentModule = require('./schemas/moves/move-ailment');
const MoveBattleStyleModule = require('./schemas/moves/move-battle-style');
const MoveCategoryModule = require('./schemas/moves/move-category');
const MoveDamageClassModule = require('./schemas/moves/move-damage-class');
const MoveLearnMethodModule = require('./schemas/moves/move-learn-method');
const MoveTargetModule = require('./schemas/moves/move-target');
const AbilityModule = require('./schemas/pokemon/ability');
const AbilityEffectChangeModule = require('./schemas/pokemon/ability-effect-change');
const AbilityFlavorTextModule = require('./schemas/pokemon/ability-flavor-text');
const AbilityPokemonModule = require('./schemas/pokemon/ability-pokemon');
const CharacteristicsModule = require('./schemas/pokemon/characteristics');
const EggGroupModule = require('./schemas/pokemon/egg-group');
const GenderModule = require('./schemas/pokemon/gender');
const PokemonSpeciesGenderModule = require('./schemas/pokemon/pokemon-species-gender');
const GrowthRateModule = require('./schemas/pokemon/growth-rate');
const GrowthRateExperienceLevelModule = require('./schemas/pokemon/growth-rate-experiece-level');
const NatureModule = require('./schemas/pokemon/nature');
const NatureStatChangeModule = require('./schemas/pokemon/nature-stat-change');
const MoveBattleStylePreferenceModule = require('./schemas/pokemon/move-battle-style-preference');
const PokeathlonStatModule = require('./schemas/pokemon/pokeathlon-stat');
const NaturePokeathlonStatAffectSetsModule = require('./schemas/pokemon/nature-pokeathlon-stat-affect-sets');
const NaturePokeathlonStatAffectModule = require('./schemas/pokemon/nature-pokeathlon-stat-affect');

const LanguageModule = require('./schemas/common/language');
const EffectModule = require('./schemas/common/effect');
const FlavorTextModule = require('./schemas/common/flavor-text');
const NameModule = require('./schemas/common/name');

//-------------
const PokemonModule = require('./schemas/pokemon');
const PokemonTypeModule = require('./schemas/pokemon-type');
const TypeModule = require('./schemas/type');

const typeDefs = gql`
  type Query {
    getPokemon(offset: Int, limit: Int): NamedResourceList,
    getPokemonById(id: Int!): Pokemon
  }
  ${UnNamedResourceListModule}
  ${UnNamedResourceModule}
  ${NamedResourceListModule}
  ${NamedResourceModule}
  ${BerryModule}
  ${BerryFlavorMapModule}
  ${BerryFirmnessModule}
  ${BerryFlavorModule}
  ${FlavorBerryMapModule}
  ${ContestTypeModule}
  ${ContestNameModule}
  ${ContestEffectModule}
  ${SuperContestEffectModule}
  ${EncounterMethodModule}
  ${EncounterConditionModule}
  ${EncounterConditionValueModule}
  ${EvolutionChainModule}
  ${ChainLinkModule}
  ${EvolutionDetailModule}
  ${EvolutionTriggerModule}
  ${GenerationModule}
  ${PokedexModule}
  ${PokemonEntryModule}
  ${VersionModule}
  ${VersionGroupModule}
  ${ItemModule}
  ${ItemSpritesModule}
  ${ItemHolderPokemonModule}
  ${ItemHolderPokemonVersionDetailModule}
  ${ItemAttributeModule}
  ${ItemCategoryModule}
  ${ItemFlingEffectModule}
  ${ItemPocketModule}
  ${MachineModule}
  ${LocationModule}
  ${LocationAreaModule}
  ${EncounterMethodRateModule}
  ${EncounterVersionDetailsModule}
  ${PokemonEncounterModule}
  ${PalParkAreaModule}
  ${PalParkEncounterSpeciesModule}
  ${RegionModule}
  ${MoveModule}
  ${ContestComboSetsModule}
  ${ContestComboDetailModule}
  ${MoveFlavorTextModule}
  ${MoveMetaDataModule}
  ${MoveStatChangeModule}
  ${MoveAilmentModule}
  ${MoveBattleStyleModule}
  ${MoveCategoryModule}
  ${MoveDamageClassModule}
  ${MoveLearnMethodModule}
  ${MoveTargetModule}
  ${AbilityModule}
  ${AbilityEffectChangeModule}
  ${AbilityFlavorTextModule}
  ${AbilityPokemonModule}
  ${CharacteristicsModule}
  ${EggGroupModule}
  ${GenderModule}
  ${PokemonSpeciesGenderModule}
  ${GrowthRateModule}
  ${GrowthRateExperienceLevelModule}
  ${NatureModule}
  ${NatureStatChangeModule}
  ${MoveBattleStylePreferenceModule}
  ${PokeathlonStatModule}
  ${NaturePokeathlonStatAffectSetsModule}
  ${NaturePokeathlonStatAffectModule}

  ${LanguageModule}
  ${EffectModule}
  ${FlavorTextModule}
  ${NameModule}
  
  ${PokemonModule}
  ${PokemonTypeModule}
  ${TypeModule}
  
`;

module.exports = typeDefs;