import React from "react";
import Photo from "./Photo";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import {
  removeAlbum,
  changeAlbumName,
  changeAlbumDescription,
  deleteAlbum,
  changeAlbumData
} from "../actionCreators/gallery/albums";

import classNames from "classnames";
import EditButton from "../buttons/EditButton";
import DeleteButton from "../buttons/DeleteButton";
class AlbumPreview extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.data);
    this.state = {
      edit: false,
      data : {
        name : this.props.data.name,
        description : this.props.data.description,
        albumId : this.props.data._id
      }
    };
  }
  OnInputChange = e =>{
    let newData = {...this.state.data};
    newData[e.target.name] = e.target.value
    this.setState({
      data : newData
    })
  }
  render() {
    let data = this.props.data;
    return (
      <div className="AlbumPreview">
        {this.props.editable ? (
          <div className="control clearfix">
            <EditButton
              onClick={() => {
                this.editToggle();
              }}
            />
            <DeleteButton
              onClick={() => {
                this.props.deleteAlbum(this.props.data._id);
              }}
            />
          </div>
        ) : null}
        <div className="preview">
          <div
            className={`previewBox ${classNames({
              scalable: !this.props.editable
            })}`}
          >
            {this.state.edit ? (
              <input
                type="text"
                defaultValue={this.state.data.name}
                name= 'name'
                onChange={e => {
                  this.OnInputChange(e)
                }}
              />
            ) : (
              <h3>{this.state.data.name}</h3>
            )}
            <Link to={`/gallery/view/${this.props.data._id}`}>
              <figure>
                <img src={data.images[0]} />
                <figcaption>{data.count}</figcaption>
              </figure>
              </Link>
            {this.state.edit ? (
              <input
                type="text"
                defaultValue={this.state.data.description}
                name='description'
                onChange={e => {
                  this.OnInputChange(e);
                }}
              />
            ) : (
              <p>{this.state.data.description}</p>
            )}
          </div>
        </div>
      </div>
    );
  }
  editToggle() {
    this.setState({
      edit: !this.state.edit
    });
    if(this.state.edit){
      this.props.changeAlbumData(this.state.data);
    }
  }
}
const mapStateToProps = store => {
  return {
    editable: store.ui.albumsEdit
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      changeAlbumDescription,
      changeAlbumName,
      removeAlbum,
      deleteAlbum,
      changeAlbumData
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(AlbumPreview);
