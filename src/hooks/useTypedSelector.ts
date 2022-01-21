import {TypedUseSelectorHook, useSelector} from 'react-redux'
import {RootState} from "../store/reducers/rootReducers";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector