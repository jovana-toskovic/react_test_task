import { 
  ALL_LIST_ITEMS, 
  ADD_LIST_ITEM, 
  EDIT_LIST_ITEM, 
  DELETE_LIST_ITEM  
} from './types';

import apiFetch from './../api'

export const allListItems = () => dispatch => {
  apiFetch('/listItems')
    .then(items => {
      console.log(items)
      dispatch({
        type: ALL_LIST_ITEMS,
        payload: items
      })
    })
    .catch(error => {
      console.log(error);
    })
}