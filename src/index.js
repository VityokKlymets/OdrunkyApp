import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './Components/HomePage';
import GalleryPage from './Components/GalleryPage';
import Album from './Components/Gallery/Album';
import AlbumPreviews from './Components/Gallery/AlbumPreviews';
import store from './Components/store/store'
import {Provider} from 'react-redux';
import {BrowserRouter , Route} from 'react-router-dom';
import css from './Content/Css/index';
const router = (
    <Provider store={store}>
    <BrowserRouter>
        <div>
            <Route exact path='/' component={HomePage}/>
            <Route path='/gallery/' component={GalleryPage}/>
        </div>
    </BrowserRouter>
    </Provider>
)

ReactDOM.render(
router,
document.getElementById('root'));
registerServiceWorker();
