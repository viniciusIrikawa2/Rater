import { create } from 'zustand';
import { Movie } from '../components/@Types/movies';

interface MovieState {
    movies: Movie[]
    setMovies: (movies: Movie[]) => void,
}

const useMovieStore  = create<MovieState>((set) => ({
    movies: [],
    setMovies: (movies) => set({ movies }),
}));

export default useMovieStore ;