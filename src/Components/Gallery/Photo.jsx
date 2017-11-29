import React from "react";
import { connect } from "react-redux";
import CloseButton from "../buttons/CloseButton";
import { Link } from "react-router-dom";
import leftArrow from "../../Content/Images/Icons/ic_chevron_left_48px.svg";
import rightArrow from "../../Content/Images/Icons/ic_chevron_right_48px.svg";
class Photo extends React.Component {
  constructor(props) {
    super(props);
    let albumId = this.props.match.params.albumId;
    this.state = {
      currentId: parseInt(this.props.match.params.photoId),
      images: this.props.albums.filter(album => {
        return album._id == albumId;
      })[0].images
    };
  }
  nextImg() {
    let currentId =
      this.state.currentId < this.state.images.length - 1
        ? this.state.currentId + 1
        : 0;
    this.setState({
      currentId
    });
  }
  previousImg() {
    let currentId =
      this.state.currentId > 0
        ? this.state.currentId - 1
        : this.state.images.length - 1;
    this.setState({
      currentId
    });
  }
  render() {
    let albumId = this.props.match.params.albumId;
    return (
      <div>
        <div className="photo-background" />
        <div
          className="Photo"
          style={{
            backgroundImage: `url(${this.state.images[this.state.currentId]})`
          }}
        >
          <div
            className="left"
            onClick={() => {
              this.previousImg();
            }}
          />
          <div
            className="right"
            onClick={() => {
              this.nextImg();
            }}
          />
          <Link to={`/gallery/view/${albumId}`}>
            <CloseButton />
          </Link>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    albums: state.albums
  };
};
export default connect(mapStateToProps)(Photo);
