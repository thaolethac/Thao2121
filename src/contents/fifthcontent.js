import React from 'react';
import '../contents/fifthcontent.css';

const Fifthcontent = () => {
  return (
    <>
        <div className='fifthcontent'>
            <div className='left'>
                <div className='leftin'>
                {/* <img src='img3.jpg' alt='Thao' /> */}
                <h2>Sign up for Our Newsletter</h2>
                <p>But I must explain to you how all this istaken idea of denouncing.</p>
                <div><input type='text' placeholder='Your name' /></div>
                <div><input type='email' placeholder='Your Email Address'/></div>
                <button>SUBCRIBE</button>

                </div>

            </div>
            <div className='right'>
                <h1>Popular Tourism Countries</h1>
                <p>The World Tourism rankings are compiled by the United Nations World Tourism Organization as part of their World Tourism Barometer publication, which is released three times throughout the year.</p>
                <p>[tourmaster_tour_category filter-type=”tour_category” num-fetch=”4″ column-size=”2″ style=”grid” thumbnail-size=”travesia-thumb-tiny” orderby=”name” order=”asc”]</p>
            </div>

        </div>
    </>
  )
}

export default Fifthcontent;