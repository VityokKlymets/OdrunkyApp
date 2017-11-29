import React from "react";
class NavBar extends React.Component {
  render() {
    const { children } = this.props;

    const reactElements =
      children instanceof Array ? [...children] : [children];
    console.log(reactElements);
    return (
      <div className="NavBar">
        <div className="controls clearfix">
          {reactElements.map((child, idx) => {
            return React.cloneElement(child, { key: idx });
          })}
        </div>
      </div>
    );
  }
}
export default NavBar;
