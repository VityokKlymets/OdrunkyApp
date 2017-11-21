import {
  BOOKMARK_ADDED,
  BOOKMARK_LOADED,
  BOOKMARK_DELETED,
  BOOKMARK_DATA_CHANGED
} from "./types";
export default function(state = [], action) {
  switch (action.type) {
    case BOOKMARK_ADDED:
      return [...state, action.data];
    case BOOKMARK_LOADED:
      return action.data;
    case BOOKMARK_DATA_CHANGED:
      return state.map((elem, idx) => {
        return elem._id === action.data._id ? action.data : elem;
      });
    case BOOKMARK_DELETED:
      return state.filter((value, index, arr) => {
        return value._id !== action.data.id;
      });

    default:
      return state;
  }
}
