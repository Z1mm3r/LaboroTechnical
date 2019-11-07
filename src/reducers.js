import { combineReducers } from 'redux'
import {
  SET_GENERAL_LABOR
} from './actions'

function skillScreen(state = {
  skills:{
    generalLabor:{
      skilled: false,
    },
  },
}, action){
  switch(action.type){
    case SET_GENERAL_LABOR:
      return{
        ...state,
        skills:{
          ...state.skills,
          generalLabor:{
            skilled: action.value
          }
        }
      }
    default:
      return state
  }
}

const labrocityApp = combineReducers({
  skillScreen,
})

export default labrocityApp