import React from "react";
import CloseButton from "../buttons/CloseButton";
class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        albumId : this.props.albumId,
        images: []
      }
    };
  }
  OnSubmit = e => {
    e.preventDefault();
    this.props.OnSubmit(this.state.data);
  };
  OnClose = () => {
    this.props.OnClose();
  };
  OnFilesAdd = e => {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      const loadFile = file => {
        return new Promise((resolve, reject) => {
          let reader = new FileReader();
          reader.onload = event => {
            let data = event.target.result;
            resolve(data);
          };
          reader.onerror = error => {
            reject(error);
          };
          reader.readAsDataURL(file);
        });
      };
      const files = e.target.files;
      const reader = window.FileReader;
      const images = [];
      for (let i = 0; i < files.length; i++) {
        loadFile(files[i]).then(data => {
          images.push(data);
        });
      }
      this.setState({
        data: { ...this.state.data, images }
      });
    } else {
      alert("The File APIs are not fully supported in this browser.");
    }
  };
  render() {
    return (
      <div>
        <div className="photo-background" />
        <div className="AlbumForm">
          <form
            onSubmit={e => {
              this.OnSubmit(e);
            }}
          >
            <CloseButton
              onClick={() => {
                this.OnClose();
              }}
            />
            <h1>Додати фото</h1>

            <label htmlFor="file-field">Фото :</label>
            <input
              type="file"
              name="images"
              id="file-field"
              multiple="true"
              onChange={e => {
                this.OnFilesAdd(e);
              }}
            />
            <button type="submit">Відправити</button>
          </form>
        </div>
      </div>
    );
  }
}

export default PhotoForm;
