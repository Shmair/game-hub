import usePlatforms, { Platform } from "./usePlatforms";

const usePlatform = (id?: number):Platform|undefined => {
    const { data } = usePlatforms();
    return data?.results.find((obj) => obj.id == id);
};
export default usePlatform;