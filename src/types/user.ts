
type User = {
    id: string,
    username: string,
    roles: string[],
    watchlist: string[]
}

export type Movie = {
    _id: string
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: string,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: string,
    vote_count: string
}


export interface UserState {
    token: string,
    currentUser: User;
    isAuth: boolean;
    watchlist: Movie[];
    loading: boolean;
    error: null | string;
}

export enum UserActionTypes {
    AUTH_USER = 'AUTH_USER',
    LOGOUT_USER = 'LOGOUT_USER',
    FETCH_WATCH_LIST_SUCCESS = 'FETCH_WATCH_LIST_SUCCESS',
    FETCH_WATCH_LIST_ERROR = 'FETCH_WATCH_LIST_ERROR',
    LOAD = 'LOAD',
}

interface AuthUser {
    type: UserActionTypes.AUTH_USER,
    payload: {
        user: User,
        token: string
    }
}

interface LogoutUser {
    type: UserActionTypes.LOGOUT_USER,
}

interface FetchWatchListSuccess {
    type: UserActionTypes.FETCH_WATCH_LIST_SUCCESS,
    payload: Movie[]
}

interface FetchWatchListError {
    type: UserActionTypes.FETCH_WATCH_LIST_ERROR,
    payload: string
}

interface Load {
    type: UserActionTypes.LOAD;
}

export type UserAction =
    LogoutUser
    | AuthUser
    | FetchWatchListSuccess
    | Load
    | FetchWatchListError