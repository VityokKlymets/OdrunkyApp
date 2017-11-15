import React from "react";
import { Link, NavLink } from "react-router-dom";
import img from "../Content/Images/sova.jpg";
class Header extends React.Component {
  render() {
    return (
      <div className="Header">
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
        <div className="head">
          <div
            className="logo"
            style={{
              backgroundImage: `url(${img})`
            }}
          />
          <h1>Школа Одринки</h1>
        </div>
      </div>
    );
  }
}
export default Header;
