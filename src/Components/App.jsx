import React from 'react';
import SlidedNav from './SlidedNav';
import HomePage from './HomePage';
import GalleryPage from './GalleryPage';
import Leaf from './Leaf';
import {connect} from 'react-redux';

class App extends React.Component {
    render(){
        return <div className="app">
            {this.props.children}
        </div>
    }
}
export default App;