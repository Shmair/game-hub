import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";
import genres from "../data/genres";

export interface Genre{
    id : number;
    name: string;
    slug:string;
    image_background:string;
  }
// const useGenres = () =>  ({data:genres, error:null, isLoading:false});//useData<Genre>('/genres'); 
  
// export default useGenres;

const useGenres = () =>  useQuery<Genre[],Error>({ 
    queryKey: ["genres"],
    queryFn: () => apiClient.get<FetchResponse<Genre>>('/genres')
      .then((res) => res.data.results),
    staleTime:24*60*60*1000, // 24 hours
    initialData:genres//{count: genres.length, result:genres}
  });

export default useGenres;
