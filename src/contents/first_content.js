import React from 'react';
import '../contents/first_content.css'

const Firstcontent = () => {
  return (
    <>
        <div className='firstcontent'>
            <div className='headerr'>
            <i class='fas fa-align-center' id='f'></i>
            <h1>Select Offers For Traveling</h1>
            </div>
            <p className='p'>Inventore veritatis et quasi architecto beatae.</p>
            <ul className='ul'>
                <li>
                    <i class="fas fa-ambulance"></i>
                    <p>Different Coutries</p>
                </li>
                <li>
                    <i class="fas fa-cocktail"></i>
                    <p>Bus Tours</p>
                </li>
                <li>
                <i class='fas fa-archway'></i>               
                 <p>Food Tours</p>
                </li>

                <li>
                <i class='fas fa-baby-carriage'></i>
                    <p>Summer Rest</p>
                </li>
                <li>
                <i class='fas fa-bed'></i>
                    <p>Ship Cruises</p>
                </li>
                <li>
                <i class='fas fa-balance-scale-right'></i>
                    <p>Mountains Tours</p>
                </li>
            </ul>
        </div>
    </>
    )
}

export default Firstcontent