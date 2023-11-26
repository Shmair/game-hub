import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

export interface Genre{
    id : number;
    name: string;
    slug:string;
    image_background:string;
  }
  interface FetchGenresResponse {
    count: number;
    next: string;
    previous: string;
    results: Genre[];
}
const useGenres = () => {
    const [genres,setGenres] = useState<Genre[]>([]);
    const [error,setError] = useState();
    const [isLoading, setIsLoadeding] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
       setIsLoadeding(true);
        apiClient
          .get<FetchGenresResponse>("/genres", { signal: controller.signal })
          .then((res) => {
            setGenres(res.data.results);
            setIsLoadeding(false);
          })
          .catch((error) => {
              if (error instanceof CanceledError) return;
              setError(error.message);
              setIsLoadeding(false);
          });
  
          return () => controller.abort();
      },[]);
  
      return {genres, error, isLoading};
  }



export default useGenres;
