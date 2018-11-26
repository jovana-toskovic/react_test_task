import { 
  ALL_LIST_ITEMS, 
  ADD_LIST_ITEM, 
  EDIT_LIST_ITEM, 
  DELETE_LIST_ITEM,
  TRY_DELETE_ITEM,
  QUIT_DELETE_ITEM,
  CHANGE_ITEM_STATUS, 
} from './../actions/types.js'

const initialState = {
  items: [],
  clickDelete: false,
  itemId: ""
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
    case TRY_DELETE_ITEM:
      return {
        ...state,
        clickDelete: true,
        itemId: action.payload
      }
    case QUIT_DELETE_ITEM:
      return {
        ...state,
        clickDelete: false,
        itemId: "",
      }
    case DELETE_LIST_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => {

          return item.id !== action.payload
        })
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
