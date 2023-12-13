import { useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import ApiClient from '../services/api-client';
import { Platform } from './usePlatforms';

export interface Game {
    id: number;
    name: string;
    background_image:string;
    parent_platforms:{platform:Platform}[];
    metacritic:number;
    rating_top:number;
  }

  const gamesAPI = new ApiClient<Game>('/games');
//const useGames = (gameQuery:GameQuery) => useData<Game>('/games', {params:{genres:gameQuery.genre?.id,platforms:gameQuery.platform?.id,ordering:gameQuery.sortOrder,search:gameQuery.searchText}},[gameQuery]); 
const useGames = (gameQuery:GameQuery) => useQuery<Game[], Error>({
  queryKey:['games',gameQuery],
  queryFn: () => gamesAPI.getAll({params:{
    genres:gameQuery.genre?.id,
    parent_platforms:gameQuery.platform?.id,
    ordering:gameQuery.sortOrder,
    search:gameQuery.searchText
  }}),
  staleTime:60 * 5 // 5 min
})

export default useGames;