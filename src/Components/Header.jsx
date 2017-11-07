import React from 'react';
import {Link} from 'react-router-dom';
import img from '../Content/Images/sova.jpg';
class Header extends React.Component{
    render(){
          return (
          <div className="Header">
                <div className="head">
                  <img src={img}/>
                  <h1>Школа Одринки</h1>
                </div>
            <nav>
                  <ul>
                        <li><Link to={'/'}>Головна</Link></li>
                        <li><Link to={'/gallery'}>Галерея</Link></li>
                  </ul>
            </nav>
         </div>
          )
    }
}
export default Header;