import { 
  ALL_LIST_ITEMS, 
  ADD_LIST_ITEM, 
  EDIT_LIST_ITEM, 
  DELETE_LIST_ITEM,
  CHANGE_ITEM_STATUS 
} from './types';

import apiFetch from './../api'

export const allListItems = () => dispatch => {
  apiFetch('/listItems')
    .then(items => {
      dispatch({
        type: ALL_LIST_ITEMS,
        payload: items
      })
    })
    .catch(error => {
      console.log(error);
    })
}

export const changeItemStatus = (item) => dispatch => {
  apiFetch(`/listItems/${item.id}`, 'PUT', item)
  .then(item => {
    dispatch({
      type: CHANGE_ITEM_STATUS,
      payload: item
    })
  })
  .catch(error => {
    console.log(error);
  })
}

export const addItem = (item) => dispatch => {
  apiFetch(`/listItems/`, 'POST', item)
  .then(item => {
    dispatch({
      type: ADD_LIST_ITEM,
      payload: item
    })
  })
  .catch(error => {
    console.log(error);
  })
}