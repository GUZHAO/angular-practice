import {Rank} from './rank.options';

export interface Skill {
  Category: string;
  Rank: Rank;
  Ability: string;
  Modifier: string;
  Target: string;
  Range: string;
  ElementEffect: string;
  Damage: string;
}
