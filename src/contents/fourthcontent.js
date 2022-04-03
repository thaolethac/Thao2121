import React from 'react';
import '../contents/fourthcontent.css';

const Fourthcontent = () => {
  return (
    <div className='fourthcontent'>
         <div className='headerr'>
            <i class='fas fa-align-center' id='f'></i>
            <h1>Top Travelling Destinations</h1>
            </div>
            <p className='p'>Travelling across the world is now much easier and fun.</p>
        <div>
            <ul className='ul1'>
                <li>
                    <img src='img6.png' alt='Thao' />
                    <h3>Paris, France</h3>
                    <p>Paris is a global center for art, fashion, gastronomy and culture.</p>
                    {/* <i class="material-icons">arrow_forward</i> */}
                </li>
                <li>
                    <img src='img7.png' alt='Thao' />
                    <h3>London, England</h3>
                    <p>London is a city with a history stretching back to Roman times.</p>
                    {/* <i class="material-icons">arrow_forward</i> */}
                </li>
                <li>
                    <img src='img8.png' alt='Thao' />
                    <h3>Tokyo, Japan</h3>
                    <p>Tokyo, busy capital, mixes ultra modern and traditional.</p>
                    {/* <i class="material-icons">arrow_forward</i> */}

                </li>
                <li>
                    <img src='img9.png' alt='Thao' />
                    <h3>New York, USA</h3>
                    <p>NY City comprises 5 boroughs between the Ocean.</p>
                    {/* <i class="material-icons">arrow_forward</i> */}

                </li>
            </ul>
        </div>
            {/* <div className='last'><button>VIEW ALL COUNTRIES</button></div> */}
    </div>
  )
}

export default Fourthcontent;
