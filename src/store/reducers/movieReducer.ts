import {MovieAction, MovieActionTypes, MovieState} from "../../types/movie";

const initialState: MovieState = {
    genre: [],
    movies: [],
    loading: false,
    error: null,
    totalPages: 1,
    itemInPage: 20,
    movie: null
}
export const movieReducer = (state = initialState, action: MovieAction): MovieState => {
    switch (action.type) {
        case MovieActionTypes.FETCH_GENRE:
            return {...state, loading: true, error: null}
        case MovieActionTypes.FETCH_GENRE_SUCCESS:
            return {...state, loading: false, genre: action.payload}
        case MovieActionTypes.FETCH_GENRE_ERROR:
            return {...state, loading: false, error: action.payload}
        case MovieActionTypes.FETCH_MOVIES_BY_GENRE:
            return {
                ...state,
                loading: false,
                movies: action.payload.movies,
                totalPages: action.payload.tottalPages,
                itemInPage: action.payload.itemInPage
            }
        case MovieActionTypes.FETCH_MOVIE_BY_ID:
            return {...state, movie: action.payload}
        default:
            return state
    }
}