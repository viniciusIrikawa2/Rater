import create from 'zustand';
import { IGenre } from '../@Types/genres';

interface SelectedGenresStore {
    selectedGenres: IGenre[];
    setSelectedGenres: (genre: IGenre) => void;
}

const useSelectedGenresStore = create<SelectedGenresStore>((set) => ({
    selectedGenres: [],
    setSelectedGenres: (genre) => set((state) => {
        const isSelected = state.selectedGenres.some((g) => g.id === genre.id);

        if (isSelected) {
            return {
                selectedGenres: state.selectedGenres.filter((g) => g.id !== genre.id), 
            };
        } else {
            return {
                selectedGenres: [...state.selectedGenres, genre],
            };
        }
    }),
}));

export default useSelectedGenresStore;
