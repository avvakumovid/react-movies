export interface MovieState {
    genre: any[];
    movies: any[];
    loading: boolean;
    error: null | string;
    totalPages: number;
    itemInPage: number;
}

export enum MovieActionTypes {
    FETCH_GENRE = 'FETCH_GENRE',
    FETCH_GENRE_SUCCESS = 'FETCH_GENRE_SUCCESS',
    FETCH_GENRE_ERROR = 'FETCH_GENRE_ERROR',
    FETCH_MOVIES_BY_GENRE = 'FETCH_MOVIES_BY_GENRE',
}

interface FetchGenreAction {
    type: MovieActionTypes.FETCH_GENRE;
}

interface FetchGenreSuccessAction {
    type: MovieActionTypes.FETCH_GENRE_SUCCESS;
    payload: any[]

}

interface FetchGenreErrorAction {
    type: MovieActionTypes.FETCH_GENRE_ERROR;
    payload: string
}

interface FetchMoviesByGenre {
    type: MovieActionTypes.FETCH_MOVIES_BY_GENRE;
    payload: {
        movies: any[],
        tottalPages: number,
        itemInPage: number,
    }
}


export type MovieAction =
    FetchGenreAction
    | FetchGenreSuccessAction
    | FetchGenreErrorAction
    | FetchMoviesByGenre
