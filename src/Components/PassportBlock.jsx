import React from "react";
import $ from "jquery";
class PassportBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count,
      description: this.props.description
    };
  }
  render() {
    return (
      <div className="pass-block" ref="block">
        <h3>{this.state.description}</h3>
        <div
          className="pass-img"
          style={{ backgroundImage: `url(${this.props.image})` }}
        />
        <span>0</span>
      </div>
    );
  }

  componentDidMount() {
    let interval;
    $(window).bind("scroll", () => {
      function come(elem) {
        var docViewTop = $(window).scrollTop(),
          docViewBottom = docViewTop + $(window).height(),
          elemTop = $(elem).offset().top,
          elemBottom = elemTop + $(elem).height();

        return elemBottom <= docViewBottom && elemTop >= docViewTop;
      }
      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }
      let block = $(this.refs.block),
        value = 0,
        spanElement = block.find("span");
     
      if (come(block))
        interval = setInterval(() => {
          if (value < this.state.count) {
            value++;
            spanElement.html(value);
          } else {
            clearInterval(interval);
          }
        }, getRandomInt(10, 20));
    });
  }
}
export default PassportBlock;
