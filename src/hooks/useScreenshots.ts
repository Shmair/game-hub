import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/api-client";
import Screenshot from "../entities/Screenshot";

const useScreenshots = (gameId:number) => {
    const apiClient = new ApiClient<Screenshot>(`games/${gameId}/screenshots`);

    return useQuery<FetchResponse<Screenshot>,Error>({
        queryKey:['screenshot',gameId],
        queryFn:() => apiClient.getAll()
    }) 
}

export default useScreenshots;