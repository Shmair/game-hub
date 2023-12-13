import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import ApiClient from '../services/api-client';

export interface Platform {
    id: number;
    name: string;
    slug:string;
}
const platformAPI = new ApiClient<Platform>('/platforms/lists/parents');

const usePlatforms = () => useQuery<Platform[]>({
    queryKey:['platforms'],
    queryFn: () => platformAPI.getAll(),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: platforms
})
//const usePlatforms = () => useData<Platform>('/platforms/lists/parents'); 


export default usePlatforms;