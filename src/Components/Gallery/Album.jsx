import React from "react";
import Photo from "./Photo";
import PhotoGrid from "./PhotoGrid";
import { Switch, Route } from "react-router-dom";
import {connect} from 'react-redux';
class Album extends React.Component {
  render() {
    console.log(this.props);
    const albumId = this.props.match.params.albumId
    const Data = this.props.albums.filter(album => {
      return album._id == albumId})[0].images;
    
    console.log(Data);
    return (
      <div className="Album">
        <Switch>
         
          
        </Switch>
      </div>
    );
  }
}
const mapStateToProps =state =>{
  return {
    albums : state.albums
  }
}
export default connect(mapStateToProps)(Album);
