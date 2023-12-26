import { useInfiniteQuery } from '@tanstack/react-query';
import ms from 'ms';
import ApiClient, { FetchResponse } from '../services/api-client';
import useGameQueryStore from '../services/store';
import { Platform } from './usePlatforms';

export interface Game {
    id: number;
    slug:string,
    name: string;
    background_image:string;
    parent_platforms:{platform:Platform}[];
    metacritic:number;
    rating_top:number;
    description_raw:string
  }

  const gamesAPI = new ApiClient<Game>('/games');
  const useGames = () => {
  const gameQuery = useGameQueryStore();

  return useInfiniteQuery<FetchResponse<Game>, Error>({
  queryKey:['games',gameQuery],
  queryFn: ({pageParam = 1}) => gamesAPI.getAll({params:{
    genres:gameQuery.genreId,
    parent_platforms:gameQuery.platformId,
    ordering:gameQuery.sortOrder,
    search:gameQuery.searchText,
    page: pageParam
  }}),
  staleTime:ms('24'),
  keepPreviousData:true,
  getNextPageParam:(lastPage, allPages) => {
    return lastPage.next ? allPages.length + 1 : undefined;
  }
})
}
export default useGames;