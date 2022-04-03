import React, { useState } from 'react';
import './scroll.css';
// import Images from '../Header/image';

const Scroll = () => {
    
    const [up,setUp] = useState()
    const Click = () => {
        setUp(prev => prev - prev)
    }
    console.log()
  return (
    <>
        <div className='scroll'>
            <button onClick={Click}>
             <i class='fas fa-angle-double-up'></i>
            </button>
        </div>
    </>
  )
}

export default Scroll;