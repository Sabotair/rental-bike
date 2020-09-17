import { combineReducers } from 'redux'
import { bikeReducer } from './bike/reducers'

export default combineReducers({
    bike: bikeReducer
})