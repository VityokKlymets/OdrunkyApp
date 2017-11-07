import React from 'react'
import btnImg from '../../Content/Images/Icons/ic_highlight_off_48px.svg';
class CloseButton extends React.Component{
    render(){
        return (<div className='close-button'  onClick={!this.props.onClick ? null : this.props.onClick}>
            <img src={btnImg} title='close'/>
        </div>)
    }
}
export default CloseButton;