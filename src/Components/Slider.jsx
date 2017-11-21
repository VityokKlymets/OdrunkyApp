import React from "react";
import leftImg from "../Content/Images/Icons/ic_chevron_left_48px.svg";
import rightImg from "../Content/Images/Icons/ic_chevron_right_48px.svg";
import Preloader from "./Preloader";
class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.Images = props.Images;
    this.state = {
      currentImage: 0,
      imageLoaded: false
    };
  }
  nextImage() {
    let newValue =
      this.state.currentImage + 1 < this.Images.length
        ? this.state.currentImage + 1
        : this.state.currentImage;
    this.setState({
      currentImage: newValue,
      imageLoaded: false
    });
  }
  prevImage() {
    let newValue =
      this.state.currentImage - 1 >= 0 ? this.state.currentImage - 1 : 0;
    this.setState({
      currentImage: newValue,
      imageLoaded: false
    });
  }
  setImage(index) {
    this.setState({
      currentImage: index
    });
  }
  renderImage() {
    return (
      <div
        style={{
          backgroundImage: `url(${this.Images[this.state.currentImage]})`
        }}
        className={"slide-image"}
      >
        {this.renderControls()}
      </div>
    );
  }
  renderPreloader() {
    return (
      <div>
        <Preloader />
        <img
          src={this.Images[this.state.currentImage]}
          onLoad={() => {
            this.setState({ imageLoaded: true });
          }}
          className="hide"
        />
      </div>
    );
  }
  renderControls() {
    return (
      <div className="controls-block">
        <div
          className={`left${this.state.currentImage === 0 ? "" : " enable"}`}
          style={{ backgroundImage: `url(${leftImg})` }}
          onClick={() => {
            this.prevImage();
          }}
        />
        <div
          className={`right${this.state.currentImage === this.Images.length - 1
            ? ""
            : " enable"}`}
          style={{ backgroundImage: `url(${rightImg})` }}
          onClick={() => {
            this.nextImage();
          }}
        />
        <div className="controls">
          <div className="buttons">
            {this.Images.map((ignore, idx) => {
              return (
                <button
                  key={idx}
                  className={this.state.currentImage === idx ? "active" : null}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="Slider clearfix">
        <div className="slide">
          {this.state.imageLoaded ? this.renderImage() : this.renderPreloader()}
        </div>
        <div className="content">
          <h1>Lorem ipsum dolor sit.</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam consequatur odit non deleniti delectus saepe cum, molestias ipsam repudiandae ut fugiat blanditiis aut maiores perferendis et? Aliquam temporibus omnis nobis!</p>
        </div>
      </div>
    );
  }
}
export default Slider;
