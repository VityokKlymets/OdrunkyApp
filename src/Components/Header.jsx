import React from "react";
import logoPic from "../Content/Images/sova.jpg";
import {connect} from 'react-redux';
import {login} from './actionCreators/gallery/albums';
class Header extends React.Component {
  countOfClicks  = 0
  maxClicks = 5
  render() {
    return (
      <div className="Header">
        <div className="logo">
          <img src={logoPic} alt="logo" onClick={()=>{
            this.countOfClicks++;
            if(this.countOfClicks> this.maxClicks){
              this.props.login();
            }
          }}/>
        </div>
        <h1>Одринківська ЗОШ І–ІІ ступенів</h1>
      </div>
    );
  }
}
export default connect(null,{login})(Header);
