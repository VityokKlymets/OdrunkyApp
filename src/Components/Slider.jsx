import React from "react";
import leftImg from "../Content/Images/Icons/ic_chevron_left_48px.svg";
import rightImg from "../Content/Images/Icons/ic_chevron_right_48px.svg";
import Preloader from "./Preloader";
import $ from "jquery";
class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.Images = props.Images;
    this.currentImage = 0;
    this.state = {
      imageLoaded: props.Images.map(() => false)
    };
  }
  renderImage() {
    return this.props.Images.map((elem, idx) => {
      return (
        <div
          key={idx}
          style={{
            backgroundImage: `url(${elem})`,
            left: `${idx * 100}%`
          }}
          className={"slide-image"}
        >
          <img
            src={this.Images[this.currentImage]}
            onLoad={() => {
              let newValue = this.state.imageLoaded.slice();
              newValue[idx] = true;
              this.setState({ imageLoaded: newValue });
            }}
            className="hide"
          />
          {!this.state.imageLoaded[idx] && this.renderPreloader()}
        </div>
      );
    });
  }
  renderPreloader() {
    return <Preloader transparent type="small" />;
  }
  renderControls() {
    return (
      <div className="controls-block">
        <div
          ref="left"
          className="left disabled"
          style={{ backgroundImage: `url(${leftImg})` }}
        />
        <div
          ref="right"
          className="right"
          style={{ backgroundImage: `url(${rightImg})` }}
        />
      </div>
    );
  }
  render() {
    return (
      <div className="Slider clearfix">
        <div className="slide">
          {this.renderControls()}
          <div className="slides" ref="slides">
            {this.renderImage()}
          </div>
        </div>
        <div className="content">
          <h1>Lorem ipsum dolor sit.</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
            consequatur odit non deleniti delectus saepe cum, molestias ipsam
            repudiandae ut fugiat blanditiis aut maiores perferendis et? Aliquam
            temporibus omnis nobis!
          </p>
        </div>
      </div>
    );
  }
  componentDidMount = () => {
    let Slider = $(".Slider");
    let slides = Slider.find(".slides"),
      left = Slider.find(".left"),
      right = Slider.find(".right");
    const slidesCount = this.props.Images.length;
    const nextSlide = () => {
      if (this.currentImage < slidesCount - 1) {
        this.currentImage++;
        $(slides).css("left", `-${this.currentImage * 100}%`);
        left.removeClass("disabled");
        return true;
      }
      if (this.currentImage === slidesCount - 1) {
        right.addClass("disabled");
        return false;
      }
    };
    const prevSlide = () => {
      {
        if (this.currentImage > 0) {
          this.currentImage--;
          $(slides).css("left", `-${this.currentImage * 100}%`);
          right.removeClass("disabled");
          return true;
        }
        if (this.currentImage === 0) {
          left.addClass("disabled");
          return false;
        }
      }
    };
    let slidingToRight = true;
    let slidingToLeft = false;
    let sliding = setInterval(() => {
      if (slidingToRight) {
        if (!nextSlide()) {
          slidingToRight = false;
          slidingToLeft = true;
        }
      }
      if (slidingToLeft) {
        if (!prevSlide()) {
          slidingToLeft = false;
          slidingToRight = true;
        }
      }
    }, 3000);
    right.bind("click", () => {
      clearInterval(sliding);
      nextSlide();
    });
    left.bind("click", () => {
      clearInterval(sliding);
      prevSlide();
    });
  };
}
export default Slider;
