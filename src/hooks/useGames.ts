import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import ApiClient, { FetchResponse } from '../services/api-client';
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
const useGames = (gameQuery:GameQuery) => useInfiniteQuery<FetchResponse<Game>, Error>({
  queryKey:['games',gameQuery],
  queryFn: ({pageParam = 1}) => gamesAPI.getAll({params:{
    genres:gameQuery.genre?.id,
    parent_platforms:gameQuery.platform?.id,
    ordering:gameQuery.sortOrder,
    search:gameQuery.searchText,
    page: pageParam
  }}),
  staleTime:24 * 60 * 60 * 1000, // 24 hours
  keepPreviousData:true,
  getNextPageParam:(lastPage, allPages) => {
    return lastPage.next ? allPages.length + 1 : undefined;
  }
})

export default useGames;