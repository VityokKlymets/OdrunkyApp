import React from "react";
import Slider from "./Slider";
import NavMenu from "./NavMenu";
import Header from './Header';
import Info from "./Info";
import Footer from "./Footer";
import Book from './Book';
import Passport from "./Passport";
import Images from "../Content/Images/sliderImages";
class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const ImagesSrc = Images;
    return (
      <div className="HomePage">
        <NavMenu />
        <Header/>
        <Slider Images={ImagesSrc} />
        <Passport />
        <Book/>
        <Info />
        <Footer />
      </div>
    );
  }
}
export default HomePage;
