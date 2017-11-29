import React from 'react';
function Footer(){
    let date = new Date();
    
    return(
        <div className='Footer'>
           <span>Одринки {date.toLocaleDateString()}</span>
        </div>
    )
}
export default Footer;