import React from "react";

import Gallery from "./Gallery/Gallery";
import NavMenu from "./NavMenu";
import { Switch, Route } from "react-router-dom";
class GalleryPage extends React.Component {
  render() {
    return (
      <div className="GalleryPage">
        <NavMenu />
        <Route component={Gallery}/>
      </div>
    );
  }
}

export default GalleryPage;
