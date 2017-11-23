import React from "react";
import leftImg from "../Content/Images/Icons/ic_chevron_left_48px.svg";
import rightImg from "../Content/Images/Icons/ic_chevron_right_48px.svg";
import Preloader from "./Preloader";
import $ from 'jquery';
class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.Images = props.Images;
    this.currentImage = 0;
    this.state = {
      imageLoaded: false
    };
  }
  renderImage() {
    return (
        this.props.Images.map((elem, idx) => {
          return (
            <div
              key={idx}
              style={{
                backgroundImage: `url(${elem})`,
                left : `${idx*100}%`
              }}

              className={'slide-image'}
            >
            </div>
          );
        })
    );
  }
  renderPreloader() {
    return (
      <div>
        <Preloader />
        <img
          src={this.Images[this.currentImage]}
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
          ref='left'
          className='left disabled'
          style={{backgroundImage: `url(${leftImg})` }}
        />
        <div
        ref='right'
          className='right'
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
          <div className="slides" ref='slides'>
            {this.state.imageLoaded ? this.renderImage() : this.renderPreloader()}
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
  componentDidMount = ()=>{
    let Slider  = $('.Slider')
    let slides = Slider.find('.slides'),
    left = Slider.find('.left'),
    right = Slider.find('.right');
    const slidesCount = this.props.Images.length;
    right.bind('click',()=>{
      if(this.currentImage<slidesCount-1){
        this.currentImage++;
        $(slides).css('left',`-${this.currentImage*100}%`);
        left.removeClass('disabled')
      }
    if(this.currentImage===slidesCount-1){
      right.addClass('disabled');
    }
    
  })
    left.bind('click',()=>{
      if(this.currentImage>0){
        this.currentImage--;
        $(slides).css('left',`-${this.currentImage*100}%`);
        right.removeClass('disabled');
      }
      if(this.currentImage===0)
      left.addClass('disabled')
      
    })
  }
}
export default Slider;
