import {MovieAction, MovieActionTypes, MovieState} from "../../types/movie";

const initialState : MovieState = {
    genre: [],
    loading: false,
    error: null
}
export const movieReducer = (state = initialState, action : MovieAction): MovieState => {
    switch (action.type){
        case MovieActionTypes.FETCH_GENRE:
            return {...state, loading: true, error: null}
        case MovieActionTypes.FETCH_GENRE_SUCCESS:
            return {...state, loading: false, genre: action.payload}
        case MovieActionTypes.FETCH_GENRE_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}