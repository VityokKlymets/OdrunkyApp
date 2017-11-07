import React from 'react'
import btnImg from '../../Content/Images/Icons/ic_delete_forever_48px.svg';
class DeleteButton extends React.Component{
    render(){
        return (<div className='edit-button' onClick={this.props.onClick}>
            <img src={btnImg} title='delete'/>
        </div>)
    }
}
export default DeleteButton;