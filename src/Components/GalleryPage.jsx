import React from "react";

import Gallery from "./Gallery/Gallery";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";
class GalleryPage extends React.Component {
  render() {
    return (
      <div className="GalleryPage">
        <Header />
        <Route component={Gallery}/>
      </div>
    );
  }
}

export default GalleryPage;
