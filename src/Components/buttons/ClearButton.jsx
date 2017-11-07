import React from 'react'
import btnImg from '../../Content/Images/Icons/ic_clear_48px.svg';
class CreateButton extends React.Component{
    render(){
        return (<div className='clear-button' onClick={this.props.onClick}>
            <img src={btnImg} title='clear'/>
        </div>)
    }
}
export default CreateButton;