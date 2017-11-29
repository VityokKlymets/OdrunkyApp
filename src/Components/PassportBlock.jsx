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
        <span>{this.state.count}</span>
      </div>
    );
  }
}
export default PassportBlock;
