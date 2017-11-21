import {combineReducers} from 'redux'

import ui from './uiReducer'
import albums from './albumsReducer'
import bookmarks from './bookmarkReducer'
const reducer = combineReducers({
    ui,
    albums,
    bookmarks,
});

export default reducer;
