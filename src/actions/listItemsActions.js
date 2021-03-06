import { 
  ALL_LIST_ITEMS, 
  ADD_LIST_ITEM, 
  EDIT_LIST_ITEM, 
  DELETE_LIST_ITEM,
  TRY_DELETE_ITEM,
  QUIT_DELETE_ITEM,
  TRY_EDIT_ITEM,
  QUIT_EDIT_ITEM,
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

export const tryDeleteItem = (itemId) => dispatch => {
  dispatch({
    type: TRY_DELETE_ITEM,
    payload: itemId
  })
}

export const quitDeleteItem = () => dispatch => {
  dispatch({
    type: QUIT_DELETE_ITEM
  })
}

export const tryEditItem = (itemId) => dispatch => {
  dispatch({
    type: TRY_EDIT_ITEM,
    payload: itemId
  })
}

export const quitEditItem = () => dispatch => {
  dispatch({
    type: QUIT_EDIT_ITEM
  })
}

export const editListItem = (item) => dispatch => {
  apiFetch(`/listItems/${item.id}`, 'PUT', item)
  .then(item => {
    dispatch({
      type: EDIT_LIST_ITEM,
      payload: item
    })
  })
  .catch(error => {
    console.log(error);
  })
}

export const deleteListItem = (itemId) => dispatch => {
  apiFetch(`/listItems/${itemId}`, 'DELETE')
  .then((resp) => {
    dispatch({
      type: DELETE_LIST_ITEM,
      payload: itemId
    })
  })
  .catch(error => {
    console.log(error);
  })
}
