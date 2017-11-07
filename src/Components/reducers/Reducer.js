import {combineReducers} from 'redux'

import ui from './uiReducer'
import albums from './albumsReducer'
const reducer = combineReducers({
    ui,
    albums,
});

export default reducer;
