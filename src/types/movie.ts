export interface MovieState {
    genre: any[];
    loading: boolean;
    error: null | string
}

export enum MovieActionTypes {
    FETCH_GENRE = 'FETCH_GENRE',
    FETCH_GENRE_SUCCESS = 'FETCH_GENRE_SUCCESS',
    FETCH_GENRE_ERROR = 'FETCH_GENRE_ERROR'
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

export type MovieAction =
    FetchGenreAction
    | FetchGenreSuccessAction
    | FetchGenreErrorAction
