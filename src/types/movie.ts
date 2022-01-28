export interface MovieState {
    genre: any[];
    movies: any[];
    loading: boolean;
    error: null | string;
    totalPages: number;
    itemInPage: number;
    movie: any,
    movieTreilerId: string
}

export enum MovieActionTypes {
    LOAD = 'LOAD',
    FETCH_GENRE_SUCCESS = 'FETCH_GENRE_SUCCESS',
    FETCH_GENRE_ERROR = 'FETCH_GENRE_ERROR',
    FETCH_MOVIES_BY_GENRE = 'FETCH_MOVIES_BY_GENRE',
    FETCH_MOVIE_BY_ID = 'FETCH_MOVIE_BY_ID',
    FETCH_MOVIE_TREILER_ID = 'FETCH_MOVIE_TREILER_ID',
    RESET_MOVIE = 'RESET_MOVIE'
}

interface Load {
    type: MovieActionTypes.LOAD;
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

interface FetchMovieById {
    type: MovieActionTypes.FETCH_MOVIE_BY_ID;
    payload: any
}

interface FetchMovieTrailerId {
    type: MovieActionTypes.FETCH_MOVIE_TREILER_ID;
    payload: string
}

interface ResetMovie {
    type: MovieActionTypes.RESET_MOVIE
}

export type MovieAction =
    Load
    | FetchGenreSuccessAction
    | FetchGenreErrorAction
    | FetchMoviesByGenre
    | FetchMovieById
    | FetchMovieTrailerId
    | ResetMovie
