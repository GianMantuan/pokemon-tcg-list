export interface IPokemonAttacks {
  cost: Array<string>;
  name: string;
  text: string;
  damage: string;
  convertedEnergyCost: number;
}

interface IPokemonWeakness {
  type: string;
  value: string;
}

export interface IPokemon {
  id: string;
  name: string;
  nationalPokedexNumber: number;
  imageUrl: string;
  imageUrlHiRes: string;
  types: Array<string>;
  supertype: string;
  subtype: string;
  evolvesFrom: string;
  hp: string;
  retreatCost: Array<string>;
  number: string;
  artist: string;
  rarity: string;
  series: string;
  set: string;
  setCode: string;
  attacks: Array<IPokemonAttacks>;
  weaknesses: Array<IPokemonWeakness>;
}

export interface IPokemonCard {
  id: string;
  name: string;
  imageUrl: string;
  types: Array<string>;
}
