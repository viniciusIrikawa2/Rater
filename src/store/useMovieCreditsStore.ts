import { create } from "zustand";
import { Credits } from "../@Types/credits";

interface MovieCreditsState {
    credits: Credits | null,
    setCredits: (movie: Credits) => void,
}

const useMovieCreditsStore  = create<MovieCreditsState>((set) => ({
    credits: null,
    setCredits: (movie) => set({ credits: movie })
}));

export default useMovieCreditsStore;