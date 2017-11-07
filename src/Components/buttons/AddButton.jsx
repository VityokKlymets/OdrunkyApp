import React from 'react'
import btnImg from '../../Content/Images/Icons/ic_add_48px.svg';
class AddButton extends React.Component{
    render(){
        return (<div className='add-button nav-btn' onClick={this.props.onClick}>
            <img src={btnImg} title='add'/>
        </div>)
    }
}
export default AddButton;