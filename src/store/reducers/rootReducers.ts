import {combineReducers} from "redux";
import {movieReducer} from "./movieReducer";

export const rootReducer = combineReducers({
        movie: movieReducer
})

export type RootState = ReturnType<typeof rootReducer>
