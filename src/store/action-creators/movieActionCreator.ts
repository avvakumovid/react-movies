import {Dispatch} from "react";
import {MovieAction, MovieActionTypes} from "../../types/movie";
import axios from "axios";

export const fetchGenre = () => {
    return async (dispatch: Dispatch<MovieAction>) => {
        try {
            dispatch({type: MovieActionTypes.FETCH_GENRE})
            let genres = await axios.get('http://localhost:5000/api/genres')
            dispatch({type: MovieActionTypes.FETCH_GENRE_SUCCESS, payload: genres.data})
        } catch (e) {
            dispatch({type: MovieActionTypes.FETCH_GENRE_ERROR, payload: 'Ошибка при загруке жанров'})
        }
    }
}
