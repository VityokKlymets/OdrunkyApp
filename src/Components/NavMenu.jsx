import React from "react";
import { Link, NavLink } from "react-router-dom";
import img from "../Content/Images/sova.jpg";
class NavMenu extends React.Component {
  render() {
    return (
      <div className="NavMenu">
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="selected">
                Головна
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" activeClassName="selected">
                Галерея
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default NavMenu;
