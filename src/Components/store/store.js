import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers/Reducer";
import albumData from "./data/albumData";
import apiMiddleware from "./middleware/apiMiddleware";
const initialState = {
  albums: [],
  ui: {
    albumsEdit: false,
    albumFormDataSending : false,
    albumFormData : false,
  }
};
let createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer, initialState);
export default store;
