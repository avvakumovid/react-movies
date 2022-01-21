import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import actionCreator from '../store/action-creators/actionCreator'

export const useAction = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actionCreator, dispatch)
}