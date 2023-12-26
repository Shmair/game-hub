import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import ApiClient from "../services/api-client";
import { Game } from "./useGames";


const gamesAPI = new ApiClient<Game>('/games');
const useGame = (slug: string) => useQuery<Game,Error>({
        queryKey:["games",slug],
        queryFn: () => gamesAPI.get(slug),
        staleTime:ms('24')
    });

export default useGame;