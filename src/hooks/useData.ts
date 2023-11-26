import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";


  interface FetchResponse<T> {
    count: number;
    results: T[];
}
const useData = <T>(endpoint:string) => {
    const [data,setData] = useState<T[]>([]);
    const [error,setError] = useState();
    const [isLoading, setIsLoadeding] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
       setIsLoadeding(true);
        apiClient
          .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
          .then((res) => {
            setData(res.data.results);
            setIsLoadeding(false);
          })
          .catch((error) => {
              if (error instanceof CanceledError) return;
              setError(error.message);
              setIsLoadeding(false);
          });
  
          return () => controller.abort();
      },[]);
  
      return {data, error, isLoading};
  }



export default useData;
