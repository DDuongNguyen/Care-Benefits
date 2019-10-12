import {combineReducers} from
'redux'
import dayCareReducer from './dayCareReducer.js'
import appointmentReducer from './appointmentReducer.js'




export default combineReducers({
  dayCareReducer,
  appointmentReducer
})
