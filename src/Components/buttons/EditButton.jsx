import React from 'react'
import btnImg from '../../Content/Images/Icons/ic_create_48px.svg';
class EditButton extends React.Component{
    render(){
        return (<div className='edit-button' onClick={this.props.onClick}>
            <img src={btnImg} title='edit'/>
        </div>)
    }
}
export default EditButton;