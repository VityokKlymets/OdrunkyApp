import {
  PROMISE,
  BOOKMARK_DATA_CHANGED,
  BOOKMARK_ADDED,
  BOOKMARK_LOADED,
  BOOKMARK_ADD_LOADING,
  BOOKMARK_LOADING,
  BOOKMARK_DELETE_START,
  BOOKMARK_DELETED
} from "../reducers/types.js";
import api from '../../api';
export const changeBookmarkData = params => {
  return {
    type: PROMISE,
    loadState: [
      "BOOKMARK_CHANGE_LOADING",
      BOOKMARK_DATA_CHANGED,
      "BOOKMARK_CHANGE_FAILURE"
    ],
    apiFunc: api.bookmarks.changeBookmarkData,
    params
  };
};
export const addBookmark = params => {
  return {
    type: PROMISE,
    loadState: [BOOKMARK_ADD_LOADING, BOOKMARK_ADDED, "BOOKMARK_ADD_FAILURE"],
    apiFunc: api.bookmarks.addBookmark,
    params
  };
};
export const deleteBookMark = params =>{
  return {
    type : PROMISE,
    loadState : [BOOKMARK_DELETE_START,BOOKMARK_DELETED,"BOOKMARK_DELETE_FAILURE"],
    apiFunc : api.bookmarks.deleteBookmark,
    params
  }
}
export const loadBookMark = ()=>{
    return {
        type : PROMISE,
        loadState : [BOOKMARK_LOADING,BOOKMARK_LOADED,"BOOKMARK_LOAD_FAILURE"],
        apiFunc : api.bookmarks.getBookmarks
    }
}