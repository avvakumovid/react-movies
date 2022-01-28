import {Dispatch} from 'react';
import {MovieAction, MovieActionTypes} from '../../types/movie';
import axios from 'axios';
import {Api} from '../../API/api';

export const fetchGenre = () => {
    return async (dispatch: Dispatch<MovieAction>) => {
        try {
            dispatch({type: MovieActionTypes.LOAD})
            let genres = await axios.get('https://avvakumov-movies-backend.herokuapp.com/api/genres')
            dispatch({type: MovieActionTypes.FETCH_GENRE_SUCCESS, payload: genres.data})
        } catch (e) {
            dispatch({type: MovieActionTypes.FETCH_GENRE_ERROR, payload: 'Ошибка при загруке жанров'})
        }
    }
}

export const fetchMoviesByGenreId = (page: number, id: number) => {
    return async (dispatch: Dispatch<MovieAction>) => {
        try {
            dispatch({type: MovieActionTypes.LOAD})
            let movies = await axios.get('https://avvakumov-movies-backend.herokuapp.com/api/movies', {
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
        try {
            if(id === undefined){
                dispatch({type: MovieActionTypes.FETCH_MOVIE_BY_ID, payload: {}})
                return
            }
            dispatch({type: MovieActionTypes.LOAD})
            let movie = await axios.get(`https://avvakumov-movies-backend.herokuapp.com/api/movie/${id}`)
            let treilerId = await Api.FetchMovieTrailer(movie.data.id)
            let payload = {...movie.data, treilerId: treilerId}
            dispatch({type: MovieActionTypes.FETCH_MOVIE_BY_ID, payload: payload})

        } catch (e) {
            dispatch({type: MovieActionTypes.FETCH_GENRE_ERROR, payload: 'Ошибка при загруке фильма'})
        }

    }
}

export const resetMovie = () => {
    return (dispatch : Dispatch<MovieAction>) => {
        dispatch({type: MovieActionTypes.RESET_MOVIE})
    }
}

