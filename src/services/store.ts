import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

export interface GameQuery {
    genreId?: number;
    setGenreId:(id:number)=>void;
    platformId?: number;
    setPlatformId:(id:number) => void;
    sortOrder: string;
    setSortOrder: (sort:string) => void;
    searchText: string;
    setSearchText:(text:string) => void;
  }

  const useGameQueryStore = create<GameQuery>(set => ({
    genreId:undefined,
    platformId:undefined,
    sortOrder:'',
    searchText:'',
    setGenreId: (genreId) => set(() => ({genreId})),
    setPlatformId: (platformId) => set(() => ({platformId})),
    setSortOrder: (sortOrder) => set(() => ({sortOrder})),
    setSearchText: (text) => set(() => ({searchText:text,genreId:undefined,platformId:undefined,sortOrder:undefined})),
  }))

  if (process.env.NODE_ENV == 'development')
    mountStoreDevtool('gameQueryStore Store', useGameQueryStore);

  export default useGameQueryStore;