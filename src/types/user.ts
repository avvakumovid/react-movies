type User = {
    id: string,
    username: string,
    roles: string[],
    watchlist: string[]
}


export interface UserState {
    currentUser: User,
    isAuth: boolean
}

export enum UserActionTypes  {
     AUTH_USER = 'AUTH_USER',
     LOGOUT_USER = 'LOGOUT_USER'
}

interface AuthUser {
    type: UserActionTypes.AUTH_USER,
    payload: User
}

interface LogoutUser {
    type: UserActionTypes.LOGOUT_USER,
}

export type UserAction = LogoutUser | AuthUser