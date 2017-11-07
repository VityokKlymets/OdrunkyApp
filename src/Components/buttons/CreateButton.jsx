import React from 'react'
import btnImg from '../../Content/Images/Icons/ic_create_48px.svg';
class CreateButton extends React.Component{
    render(){
        return (<div className='create-button nav-btn' onClick={this.props.onClick}>
            <img src={btnImg} title='edit'/>
        </div>)
    }
}
export default CreateButton;