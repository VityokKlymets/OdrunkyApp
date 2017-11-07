import React from "react";
import CloseButton from "../buttons/CloseButton";
class AlbumForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: "",
        description: "",
        images: []
      }
    };
  }
  onchange = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  };
  OnSubmit = e => {
    e.preventDefault();
    this.props.OnSubmit(this.state.data);
  };
  OnClose = () => {
    this.props.CloseForm();
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
            <h1>Додати альбом</h1>
            <label htmlFor="name">Ім'я :</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={e => {
                this.onchange(e);
              }}
            />
            <label htmlFor="description">Опис :</label>
            <input
              type="text"
              name="description"
              id="description"
              onChange={e => {
                this.onchange(e);
              }}
            />
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

export default AlbumForm;
