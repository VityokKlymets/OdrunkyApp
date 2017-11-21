import React from "react";
import CloseButton from './buttons/CloseButton';
class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        head: "",
        text: ""
      }
    };
  }
  OnClose(){
      this.props.onCloseForm();
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.data);
  }
  onChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  };
  render() {
    return (
      <div className="BookForm fixedForm">
       <div className="photo-background" />
        <form
          onSubmit={e => {
            this.onSubmit(e);
          }}
        >
          <CloseButton
              onClick={() => {
                this.OnClose();
              }}
            />
          <h1>Add Bookmark</h1>
          <label htmlFor="head">Head :</label>
          <input
            type="text"
            name="head"
            id="head"
            onChange={e => {
              this.onChange(e);
            }}
          />
          <label htmlFor="text">Text :</label>
          <input
            type="text"
            name="text"
            id="text"
            onChange={e => {
              this.onChange(e);
            }}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}
export default BookForm;
