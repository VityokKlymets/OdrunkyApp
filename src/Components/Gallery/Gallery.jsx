import React from "react";
import Album from "./Album";
import PhotoGrid from "./PhotoGrid";
import Photo from "./Photo";
import AlbumPreviews from "./AlbumPreviews";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Route, Switch } from "react-router-dom";
import { loadAlbums } from "../actionCreators/gallery/albums";
import Preloader from "../Preloader";
class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.props.loadAlbums();
  }
  renderPreloader() {
    return <Preloader type="medium" fixed={true}/>;
  }
  renderRoute() {
    return (
      <div>
        <Route
          exact
          path="/gallery"
          render={path => <AlbumPreviews match={path.match} />}
        />
        <Route exact path="/gallery/view/:albumId" component={PhotoGrid} />
        <Route  path={`/gallery/view/:albumId/:photoId`} component={Photo} />
      </div>
    );
  }
  render() {
    return <div className="Gallery">
      {this.props.albumsLoaded && !this.props.albumsLoading ? this.renderRoute() : this.renderPreloader()}
    </div>
  }
}

const mapStateToProps = store => {
  return {
    albums: store.albums,
    albumsLoaded : store.ui.albumsLoaded,
    albumsLoading : store.ui.albumsLoading,
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
