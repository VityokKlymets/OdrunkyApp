import React from "react";
import AlbumPreview from "./AlbumPreview";
import NavBar from "./NavBar";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import BackButton from "../buttons/BackButton";
import CreateButton from "../buttons/CreateButton";
import AddButton from "../buttons/AddButton";
import {Link } from 'react-router-dom';
import { addAlbum, turnEditAlbums ,toggleAddAlbumForm } from "../actionCreators/gallery/albums";
import AlbumForm from "./AlbumForm";
class AlbumPreviews extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <NavBar>
          <BackButton path="/" />
          <CreateButton
            onClick={() => {
              this.editToggle();
            }}
          />
          <AddButton
            onClick={() => {
              this.props.toggleAddAlbumForm();
            }}
          />
        </NavBar>
        <div className="AlbumPreviews">
          {this.props.AlbumData.map((albumData, idx) => {
            return (
                <AlbumPreview path={this.props.match.path} data={albumData} key={idx}/>
            );
          })}
        </div>
        {this.props.albumFormData &&
        (
          <AlbumForm
            OnSubmit={data => {
              this.props.addAlbum(data);
              this.props.toggleAddAlbumForm();
            }}
            CloseForm={() => {
              this.props.toggleAddAlbumForm();
            }}
          />
        )}
      </div>
    );
  }
  editToggle() {
    this.props.edit
      ? this.props.turnEditAlbums(false)
      : this.props.turnEditAlbums(true);
  }
}
const mapStateToProps = state => {
  return {
    AlbumData: state.albums,
    edit: state.ui.albumsEdit,
    albumFormData : state.ui.albumFormData,
  };
};
const mapDispathToProps = dispatch => {
  return bindActionCreators(
    {
      turnEditAlbums,
      addAlbum,
      toggleAddAlbumForm
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispathToProps)(AlbumPreviews);
