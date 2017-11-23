import React from "react";
import NavBar from "./Gallery/NavBar";
import CreateButton from "./buttons/CreateButton";
import AddButton from "./buttons/AddButton";
import Preloader from "./Preloader";
import BookForm from "./BookForm";
import ClearButton from "./buttons/ClearButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  addBookmark,
  changeBookmarkData,
  loadBookMark,
  deleteBookMark
} from "./actionCreators/bookmark";

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.props.loadBookMark();
    this.selectedBookmark = {};
    this.state = {
      current: 0,
      edit: false,
      bookForm: false
    };
  }
  onNavClick(e) {
    let index = parseInt(e.target.dataset.index);
    this.setState({
      current: index
    });
    this.selectedBookmark = {
      id: this.props.bookmarks[index]._id
    };
  }
  editToggle() {
    this.setState({
      edit: !this.state.edit
    });
    if (this.state.edit) {
      this.props.changeBookmarkData(this.selectedBookmark);
    }
  } 
  onDataChange(e) {
    this.selectedBookmark = {
      ...this.selectedBookmark,
      [e.target.name]: e.target.value
    };
  }
  toggleAddBookForm() {
    this.setState({
      bookForm: !this.state.bookForm
    });
  }
  onFormSubmit(data) {
    this.props.addBookmark(data);
    this.toggleAddBookForm();
  }
  renderOnLoadPreloader() {
    return <Preloader type="small" transparent />;
  }
  renderOnSendPreloader() {
    return <Preloader type="medium" fixed />;
  }
  onClearClick(id) {
    this.props.deleteBookMark({ id });
  }
  renderBook() {
    const activeBookmark = this.props.bookmarks[this.state.current];
    if(activeBookmark)
    this.selectedBookmark = {
      id: activeBookmark._id
    };
    return (
      <div className="Book clearfix">
        <NavBar>
          <CreateButton
            onClick={() => {
              this.editToggle();
            }}
          />
          <AddButton
            onClick={() => {
              this.toggleAddBookForm();
            }}
          />
        </NavBar>
        <nav>
          <ul>
            {this.props.bookmarks.map((elem, idx) => {
              return this.state.edit && idx === this.state.current ? (
                <label key={idx}>
                  <input
                    type="text"
                    defaultValue={elem.head}
                    name="head"
                    onChange={e => {
                      this.onDataChange(e);
                    }}
                  />
                  <ClearButton
                    onClick={() => {
                      this.onClearClick(this.props.bookmarks[idx]._id);
                    }}
                  />
                </label>
              ) : (
                <li
                  key={idx}
                  data-index={idx}
                  onClick={e => {
                    this.onNavClick(e);
                  }}
                >
                  {elem.head}
                </li>
              );
            })}
          </ul>
        </nav>
        <section>
          {activeBookmark && (
            <div>
              <h1>{activeBookmark.head}</h1>
              {this.state.edit ? (
                <textarea
                  defaultValue={activeBookmark.text}
                  name="text"
                  cols="80"
                  onChange={e => {
                    this.onDataChange(e);
                  }}
                />
              ) : (
                <p>{activeBookmark.text} </p>
              )}
            </div>
          )}
        </section>
      </div>
    );
  }
  render() {
    return (
      <div className="book-wrapper">
        {this.state.bookForm && (
          <BookForm
            onCloseForm={() => {
              this.toggleAddBookForm();
            }}
            onSubmit={data => {
              this.onFormSubmit(data);
            }}
          />
        )}
        {this.props.bookmarkSending &&
          !this.props.bookmarkSended &&
          this.renderOnSendPreloader()}
        {this.props.bookmarksLoading && !this.props.bookmarksLoaded
          ? this.renderOnLoadPreloader()
          : this.renderBook()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    bookmarks: state.bookmarks,

    bookmarksLoading: state.ui.bookmarksLoading,
    bookmarksLoaded: state.ui.bookmarksLoaded,

    bookmarkSending: state.ui.bookmarkSending,
    bookmarkSended: state.ui.bookmarkSended
  };
};
const mapDispathToProps = dispath => {
  return bindActionCreators(
    {
      loadBookMark,
      addBookmark,
      changeBookmarkData,
      deleteBookMark,
      changeBookmarkData
    },
    dispath
  );
};
export default connect(mapStateToProps, mapDispathToProps)(Book);
