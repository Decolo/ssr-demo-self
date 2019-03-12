import { FETCH_ABOUT_DATA } from './action'

export default (state = {
  list: []
}, action) => {
  switch(action.type) {
    case FETCH_ABOUT_DATA:
      const list = [...state.list, 1]
      return {
        ...state,
        list
      }
    default: 
      return state
  }
}