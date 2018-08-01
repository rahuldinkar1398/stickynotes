import { combineReducers } from 'redux'
import { fetchDataReducer } from '../logic'

const rootReducer = combineReducers({
    fetchData: fetchDataReducer
})
export default rootReducer