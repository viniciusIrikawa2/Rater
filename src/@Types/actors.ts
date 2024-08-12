export interface Actor {
    adult: boolean;
    also_known_as: string[];
    biography: string;
    birthday: string;
    deathday: string | null; 
    gender: number; 
    homepage: string | null;
    id: number;
    imdb_id: string;
    known_for_department: string;
    name: string;
    original_name: string;
    place_of_birth: string;
    popularity: number;
    profile_path: string; 
    known_for: Movie[]; 
}
interface Movie {
    backdrop_path: string;
    id: number;
    title: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    adult: boolean;
    original_language: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
