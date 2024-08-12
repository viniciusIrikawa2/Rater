import { create } from "zustand";
import { IGenre } from "../@Types/genres";

interface GenresStore{
    genres: IGenre[],
    setGenres: (genre: IGenre) => void
}

const useGenresStore = create<GenresStore>((set) =>( {
    genres: [],
    setGenres: (genre) => set((state) => ({  genres: [...state.genres, genre] }))
}));

export default useGenresStore;