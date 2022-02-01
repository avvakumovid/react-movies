import {UserAction, UserActionTypes, UserState} from '../../types/user';

const initialState: UserState = {
    isAuth: false,
    currentUser: {
        id: '',
        roles: [],
        username: '',
        watchlist: []
    }
}

const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.AUTH_USER:
            return {...state, isAuth: true, currentUser: action.payload}
        case UserActionTypes.LOGOUT_USER:
            return {...state, isAuth: false, currentUser: initialState.currentUser}
        default:
            return state
    }
}

export default userReducer
