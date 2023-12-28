import { useQuery } from '@tanstack/react-query';
import ApiClient, { FetchResponse } from '../services/api-client';
import ms from 'ms';
import { Trailer } from '../entities/Trailer';



const useTrailers = (gameId:number) => {
    const apiClient = new ApiClient<Trailer>(`/games/${gameId}/movies`);

    return useQuery<FetchResponse<Trailer>,Error>({
        queryKey:['trailers',gameId],
        queryFn: ()=>apiClient.getAll(),
        staleTime: ms('24')
       })
    
}

export default useTrailers