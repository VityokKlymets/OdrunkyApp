import React from 'react';
import {Link} from 'react-router-dom';
import buttonImg from '../../Content/Images/Icons/ic_chevron_left_48px.svg';
class BackButton extends React.Component{
    render(){
        return(
            <div className='back-btn nav-btn'>
                <Link to={this.props.path}>
                    <img src={buttonImg} title='back' />
                </Link>
            </div>
        ) 
    }
}

export default BackButton;