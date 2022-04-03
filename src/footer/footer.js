import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <> 
    <div className='own'>
        <div className='footers'>
            <div className='footer'>
                <h2>RESOURCES</h2>
                <ul>
                   <li>About Us</li> 
                   <li>Tours</li> 
                   <li>Gallery</li> 
                   <li>Blog</li> 
                   <li>Contacts</li>
                </ul>
            </div>
            <div className='footer'>
                <h2>INFORMATION</h2>
                <ul>
                   <li>Wedding Tours</li> 
                   <li>Bus Tours</li> 
                   <li>Food & Wine</li> 
                   <li>Cruisse</li> 
                   <li>Summer Rest</li>
                </ul>
            </div>
            <div className='footer'>
                <h2>Abouts Us</h2>
                <ul>
                   <li>About Us</li> 
                   <li>Contacts</li> 
                   <li>Term & Conditions</li> 
                   <li>Our Team</li> 
                   <li>Services</li>
                </ul>
            </div>
            <div className='footer'>
                <img src='img4.png' alt='Thao' />
                <p>But I must explain to you how all this mistaken idea of denouncing pleasure.</p>
                <div className='contacts'>
                <a href='https://www.facebook.com/Thacthao0509' target =''><i class="fa-brands fa-facebook-f"></i></a>
                <a href='https://www.youtube.com/channel/UCL60Xl-I0Zen6QZ7CrVF_Lw' target="_"><i class="fa-brands fa-youtube"></i></a>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                </div>
            </div>
        </div>

            <hr></hr>
            <div className='last'>
                <p>AxiomThemes © 2022. All Rights Reserved.</p>
                <p>Powered with Travesia</p>
            </div>
        </div>
    </>
  )
}

export default Footer;
