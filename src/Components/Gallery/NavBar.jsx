import React from 'react';
class NavBar extends React.Component{
    render(){
        return (
            <div className='NavBar'>
                <div className='controls clearfix'>
                    {
                        this.props.children.map((child,idx)=>{
                            return React.cloneElement(child,{key : idx})
                        })
                    }
                </div>
            </div>
        )
    }
}
export default NavBar;  