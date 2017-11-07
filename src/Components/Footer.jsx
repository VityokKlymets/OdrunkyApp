import React from 'react';
function Footer(){
    let date = new Date();
    
    return(
        <div className='Footer'>
           <p>Lorem ipsum dolor sit amet. {date.toDateString()}</p>
        </div>
    )
}
export default Footer;