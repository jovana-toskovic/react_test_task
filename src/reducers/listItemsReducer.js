import { 
  ALL_LIST_ITEMS, 
  ADD_LIST_ITEM, 
  EDIT_LIST_ITEM, 
  DELETE_LIST_ITEM 
} from './../actions/types.js'

const initialState = {
  items: []
}

export default (state = initialState, action) => {
  switch(action.type){
    case ALL_LIST_ITEMS:
      return {
        ...state,
        items: action.payload
      }
    
      
    default:
      return state;
  }
}
