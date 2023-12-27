import { Platform } from './Platform';
import {Genre} from "../entities/Genre"
import {Publishers} from "../entities/Publishers"

export interface Game {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  rating_top: number;
  description_raw: string;
  genres:Genre[],
  publishers:Publishers[]
}
