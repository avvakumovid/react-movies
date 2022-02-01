import {UserAction, UserActionTypes, UserState} from '../../types/user';

const initialState: UserState = {
    isAuth: false,
    currentUser: {
        id: '',
        roles: [],
        username: '',
        watchlist: []
    },
    watchlist: [],
    loading: false,
    error: '',
    token: ''
}

const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.AUTH_USER:
            return {...state, isAuth: true, currentUser: action.payload.user, token: action.payload.token}
        case UserActionTypes.LOGOUT_USER:
            return {...state, isAuth: false, currentUser: initialState.currentUser}
        case UserActionTypes.FETCH_WATCH_LIST_SUCCESS:
            return {...state, loading: false, watchlist: action.payload}
        case UserActionTypes.FETCH_WATCH_LIST_ERROR:
            return {...state, loading: false, error: action.payload}
        case UserActionTypes.LOAD:
            return {...state, loading: true, error: null}
        default:
            return state
    }
}

export default userReducer
