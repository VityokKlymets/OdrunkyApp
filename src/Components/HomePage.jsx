import React from "react";
import Slider from "./Slider";
import Header from "./Header";
import Foreword from "./Foreword";
import Info from "./Info";
import Footer from "./Footer";
import Book from './Book';
import Passport from "./Passport";
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
        <Passport />
        <Book/>
        <Info />
        <Footer />
      </div>
    );
  }
  componentDidMount() {
    //for parallax efect
    $(() => {
      let slide = $(".Slider .slide"),
        controlsBlock = $(".Slider .controls-block"),
        fore_text = $(".Foreword .fore-text");
        
      $(window).bind("scroll", () => {
        let wScroll = $(window).scrollTop();
        function SlideIt(DOMElement, speed) {
          let amount = wScroll / speed;
          let transformStr = `translate3d(0,${amount}%,0)`;
          $(DOMElement).css({
            transform: transformStr
          });
        }
        function inFocus(jqueryElement) {
          let offsetTop = jqueryElement.offset().top,
            height = $(window).height();
          return wScroll > offsetTop-200&& wScroll < offsetTop+height;
        }

        fore_text.each((index, element) => {
          let block = $(element);
          if (inFocus(block)) {
            block.addClass('active');
          }
          // else{
          //   block.removeClass('active');
          // }
        });

       if(inFocus(slide)){
         controlsBlock.addClass('active');
       }
       else{
         controlsBlock.removeClass('active');
       }

      });
    });
  }
}
export default HomePage;
