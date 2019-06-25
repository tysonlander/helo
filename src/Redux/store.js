import { createStore, combineReducers } from 'redux'
import reducer from './reducer'


const rootReducer = combineReducers({
  userInfo: reducer
})

export default createStore(rootReducer)