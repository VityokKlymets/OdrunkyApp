import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers/Reducer";
import albumData from "./data/albumData";
import apiMiddleware from "./middleware/apiMiddleware";
const initialState = {
  albums: [],
  ui: {
    isAuthenticated : false,
    albumsEdit: false,
    albumSending : false,
    albumSended : false,
    albumFormData : false,

    albumsLoaded : false,
    albumsLoading : false,

    bookmarksLoaded : false,
    bookmarksLoading: true,

    bookmarkSending: false,
    bookmarkSended : false,
  },
  bookmarks : []
};
let createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer, initialState);
export default store;
