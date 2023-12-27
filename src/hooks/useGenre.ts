import useGenres from "./useGenres";
import { Genre } from "../entities/Genre";

const useGenre = (id?:number):Genre|undefined => {
    const { data } = useGenres();
    return data?.results.find((obj) => obj.id === id);
};
export default useGenre;