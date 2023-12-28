import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import ApiClient, { FetchResponse } from '../services/api-client';
import ms from 'ms';
import Platform from '../entities/Platform';

const platformAPI = new ApiClient<Platform>('/platforms/lists/parents');

const usePlatforms = () => useQuery<FetchResponse<Platform>,Error>({
    queryKey: ["platforms"],
    queryFn: () => platformAPI.getAll(),
    staleTime: ms('24'), //24 * 60 * 60 * 1000, // 24 hours
    initialData: platforms
})
//const usePlatforms = () => useData<Platform>('/platforms/lists/parents'); 


export default usePlatforms;
