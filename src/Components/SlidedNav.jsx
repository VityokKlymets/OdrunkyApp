import React from "react";

class SlidedNav extends React.Component {
  constructor(props) {
    super(props);
    this.links = props.links;
  }
  render() {
    return (
      <div className="SlidedNav">
        <div className="NavArrow">
          {this.links.map((elem, idx) => {
            return (
              <button key={idx} onClick={elem.onClick}>
                <span>{elem.text}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SlidedNav;
