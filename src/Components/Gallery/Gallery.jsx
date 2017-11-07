import React from "react";
import Album from "./Album";
import PhotoGrid from "./PhotoGrid";
import Photo from "./Photo";
import AlbumPreviews from "./AlbumPreviews";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Route, Switch } from "react-router-dom";
import { loadAlbums } from "../actionCreators/gallery/albums";
class Gallery extends React.Component {
  constructor(props){
    super(props);
    this.props.loadAlbums();
  }
  render() {
    return (
      <div className="Gallery">
          <Route
            exact
            path="/gallery"
            render={path => <AlbumPreviews match={path.match} />}
          />
          <Route exact path="/gallery/view/:albumId" component={PhotoGrid} />
          <Route path={`/gallery/view/:albumId/:photoId`} component={Photo} />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    albums: store.albums
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      loadAlbums
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
