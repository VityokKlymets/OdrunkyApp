import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import PhotoForm from "./PhotoForm";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  deleteAlbumPhoto,
  addPhotoToAlbum
} from "../actionCreators/gallery/albums";

import BackButton from "../buttons/BackButton";
import CreateButton from "../buttons/CreateButton";
import ClearButton from "../buttons/ClearButton";

import addButton from "../../Content/Images/Icons/ic_add_48px.svg";
class PhotoGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      photoForm: false
    };
  }
  render() {
    const albumId = this.props.match.params.albumId;
    const images = this.props.albums.filter(album => {
      return album._id == albumId;
    })[0].images;
    return (
      <div>
        <NavBar>
          <BackButton path="/gallery" />
          <CreateButton
            onClick={() => {
              this.EditToggle();
            }}
          />
        </NavBar>
        <div className="PhotoGrid">
          {images.map((img, idx) => {
            return (
              <div className="GridElement" key={idx}>
                {this.state.edit ? (
                  <ClearButton
                    onClick={() => {
                      this.props.deleteAlbumPhoto(albumId, idx);
                    }}
                  />
                ) : null}
                <Link to={`${this.props.match.url}/${idx}`}>
                  <img src={img} className="scalable" />
                </Link>
              </div>
            );
          })}
          {this.state.edit && (
            <div
              className="GridElement add-photo"
              onClick={() => {
                this.PhotoFormToggle();
              }}
            >
              <img src={addButton} title="add" className="scalable" />
            </div>
          )}
          {this.state.photoForm && (
            <PhotoForm
              OnSubmit={data => {
                this.OnPhotoSubmit(data);
                this.PhotoFormToggle();
              }}
              OnClose={() => {
                this.PhotoFormToggle();
              }}
              albumId={albumId}
            />
          )}
        </div>
      </div>
    );
  }
  PhotoFormToggle() {
    this.setState({
      photoForm: !this.state.photoForm
    });
  }
  OnPhotoSubmit = data => {
    this.props.addPhotoToAlbum(data);
  };
  EditToggle() {
    this.setState({
      edit: this.state.edit ? false : true
    });
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
      deleteAlbumPhoto,
      addPhotoToAlbum
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(PhotoGrid);
