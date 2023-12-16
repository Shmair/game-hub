import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import ApiClient, { FetchResponse } from "../services/api-client";

export interface Genre{
    id : number;
    name: string;
    slug:string;
    image_background:string;
  }

  const genreAPI = new ApiClient<Genre>('/genres');

const useGenres = () =>  useQuery<FetchResponse<Genre>,Error>({ 
    queryKey: ["genres"],
    queryFn: () => genreAPI.getAll(),
    staleTime:24*60*60*1000, // 24 hours
    initialData:genres
  });

export default useGenres;
