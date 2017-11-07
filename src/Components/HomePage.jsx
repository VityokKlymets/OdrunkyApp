import React from "react";
import Slider from "./Slider";
import Header from "./Header";
import Foreword from "./Foreword";
import Info from "./Info";
import Footer from "./Footer";
import Images from "../Content/Images/sliderImages";
import $ from "jquery";
class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const ImagesSrc = Images;
    return (
      <div className="HomePage">
        <Header />
        <Slider Images={ImagesSrc} />
        <Foreword />
        <Info />
        <Footer />
      </div>
    );
  }
  componentDidMount() {
    //for parallax efect
    $(() => {
      $(window).bind("scroll", () => {
        console.log("somth");
        let wScroll = $(window).scrollTop(),
          SlideIt = function(DOMElement, speed) {
            let amount = wScroll / speed;
            let transformStr = `translate3d(0,${amount}%,0)`;
            $(DOMElement).css({
              transform: transformStr
            });
          };

        let slider = $(".Slider .slide");
        SlideIt(slider, 40);
      });
    });
  }
}
export default HomePage;
