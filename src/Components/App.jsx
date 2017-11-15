import React from "react";
import HomePage from "./HomePage";
import GalleryPage from "./GalleryPage";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import css from "../Content/Css/index";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route  path="/gallery/" component={GalleryPage} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;