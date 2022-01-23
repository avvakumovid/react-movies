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

export const fetchMoviesByGenreId = (page: number, id: number) => {
    return async (dispatch: Dispatch<MovieAction>) => {
        try {
            dispatch({type: MovieActionTypes.FETCH_GENRE})
            let movies = await axios.get('http://localhost:5000/api/movies', {
                params: {
                    page: page,
                    genreId: id
                }
            })
            dispatch({
                type: MovieActionTypes.FETCH_MOVIES_BY_GENRE,
                payload: {
                    movies: movies.data.movies,
                    tottalPages: movies.data.totalPage,
                    itemInPage: movies.data.itemInPage,
                }
            })
        } catch (e) {
            dispatch({type: MovieActionTypes.FETCH_GENRE_ERROR, payload: 'Ошибка при загруке жанров'})
        }
    }
}

export const fetchMovieById = (id: string | undefined) => {
    return async (dispatch: Dispatch<MovieAction>) => {
        try{
            dispatch({type: MovieActionTypes.FETCH_GENRE})
            let movie = await axios.get(`http://localhost:5000/api/movie/${id}`)
            dispatch({type: MovieActionTypes.FETCH_MOVIE_BY_ID, payload: movie.data})
        }catch (e) {
            dispatch({type: MovieActionTypes.FETCH_GENRE_ERROR, payload: 'Ошибка при загруке жанров'})
        }

    }
}
