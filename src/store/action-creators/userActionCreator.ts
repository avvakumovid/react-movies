import {Dispatch} from 'react';
import {UserAction, UserActionTypes} from '../../types/user';
import {Api} from '../../API/api';

export const loginAction = (username: string, password: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        const token = await Api.Login(username, password)
        localStorage.setItem('token', token)
        const data = await Api.Auth()
        dispatch({type: UserActionTypes.AUTH_USER, payload: data.user})
        localStorage.setItem('token', data.token)
    }
}

export const authAction = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        const data = await Api.Auth()
        dispatch({type: UserActionTypes.AUTH_USER, payload: data.user})
        localStorage.setItem('token', data.token)
    }
}

export const logoutAction = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        dispatch({type: UserActionTypes.LOGOUT_USER})
        localStorage.removeItem('token')
    }
}