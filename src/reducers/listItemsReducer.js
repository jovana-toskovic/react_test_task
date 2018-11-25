import { 
  ALL_LIST_ITEMS, 
  ADD_LIST_ITEM, 
  EDIT_LIST_ITEM, 
  DELETE_LIST_ITEM,
  CHANGE_ITEM_STATUS, 
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
    case ADD_LIST_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items]
      }

    case CHANGE_ITEM_STATUS:
      return {
        ...state,
        items: state.items.map((item) => {
          if(item.id !== action.payload.id){
            return item
          } else {
            
            return action.payload
          }
        })
      }
      
    default:
      return state;
  }
}
