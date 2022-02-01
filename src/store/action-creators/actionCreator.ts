import * as MovieAcrionCreator from './movieActionCreator'
import * as UserAcrionCreator from './userActionCreator'

export default {
    ...MovieAcrionCreator,
    ...UserAcrionCreator
}