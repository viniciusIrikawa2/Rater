import { create } from "zustand";
import { IGenre } from "../@Types/genres";

interface GenresStore{
    genres: IGenre[],
    setGenres: (genre: IGenre[]) => void
}

const useGenresStore = create<GenresStore>((set) =>( {
    genres: [],
    setGenres: (genres) => set({ genres })
}));

export default useGenresStore;

