import React from "react";
import AlbumPreview from "./AlbumPreview";
import NavBar from "./NavBar";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import BackButton from "../buttons/BackButton";
import CreateButton from "../buttons/CreateButton";
import AddButton from "../buttons/AddButton";
import { Link } from "react-router-dom";
import {
  addAlbum,
  turnEditAlbums,
  toggleAddAlbumForm
} from "../actionCreators/gallery/albums";
import AlbumForm from "./AlbumForm";
import Preloader from "../Preloader";
class AlbumPreviews extends React.Component {
  constructor(props) {
    super(props);
  }
  renderPreloader() {
    return <Preloader type="small" fixed={true}/>;
  }
  renderNavbar() {
    return (
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
    );
  }
  renderAlbumForm() {
    return (
      <AlbumForm
        OnSubmit={data => {
          this.props.addAlbum(data);
          this.props.toggleAddAlbumForm();
        }}
        CloseForm={() => {
          this.props.toggleAddAlbumForm();
        }}
      />
    );
  }
  renderPreviews() {
    return (
      <div className="AlbumPreviews">
        {this.props.AlbumData.map((albumData, idx) => {
          return (
            <AlbumPreview
              path={this.props.match.path}
              data={albumData}
              key={idx}
            />
          );
        })}
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.renderNavbar()}
        {this.props.albumSending&&!this.props.albumSended
          ? this.renderPreloader()
          : this.renderPreviews()}
        {this.props.albumFormData && this.renderAlbumForm()}
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
    albumFormData: state.ui.albumFormData,
    albumSended : state.ui.albumSended,
    albumSending: state.ui.albumSending,
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
