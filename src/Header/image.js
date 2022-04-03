import React, { useEffect } from 'react';
import '../Header/image.css';
import { useState, useRef } from 'react';
// import Scroll from '../scroll/scroll';

const Images = () => {
  const data = [
    {
      url : "img1.jpg"
    },
    {
      url : "img2.jpg"
    },
    {
      url : "img3.jpg"
    }
    

  ]
  console.log(data.length)
  const Click21 = () => {
      console.log()
  }
  // const [image, setImage] = useState(0)
  const [click, setClick] = useState(true)
  const [hehe, setHehe] = useState(true)
  const [ kaka, setKaka] =useState(true)
  const inputElement = useRef()
  const Click = () => {
      setClick(!click)
      inputElement.current.focus()
      
  }
  // useEffect(() =>{
  //   setInterval(() => {
  //     setImage(prev => prev +1)
  //   }, 5000);
  // },[image]) 
  let image = 0;
  setInterval(() => {
      image = image +1
  }, 5000);
  const Click1 = () => {
        setHehe(!hehe)
        inputElement.current.focus()
  }
  // const Click3 = () => {
  //     setHehe(true)
  // }
  const Click11 = () => {
      setKaka(!kaka)
  }
  return (
    <>
  
        <div className='chat'>

        <div className='secound' title='Chat with us' >
          { hehe ? <i class="fa-brands fa-facebook-messenger" onClick={Click21}></i> :
          (
          <div className={"hide"}>
            <div class = "close">
              <h1>HI THERE</h1>
              <i class="fa-solid fa-xmark"></i>
            </div>
            <div>
            <input type="text" placeholder = 'Enter your message ...' ref={inputElement}/>
            <i class="fa-solid fa-paper-plane-top"></i>
            </div>
            <i class="fa-brands fa-facebook-messenger" onClick={Click1}></i>

          </div>
          
          )
          }
          </div>
        </div>
               <img src={data[image].url} alt='Thao' className='fix' />
        <div className='header'>
            <div className={kaka ? 'navbar' : 'navbar navbar1' }>
                <a href='#HOME'><img src='img4.png' alt='Thao' /></a>
                <a href='#HOME'>HOME</a>
                <a href='#FEATURES'>FEATURES</a>
                <a href='#BLOG'>BLOG</a>
                <a href='#AUBOUT US'>AUBOUT US</a>
                <a href='#TOURS'>TOURS</a>
                <i class='far fa-edit'></i>
                {click ? <i class="fa fa-volume-control-phone"> 0397760186</i> : <input  class='search' type='text' placeholder='Search...' ref={inputElement} />}
                <i class='fas fa-search' onClick={Click}></i>
                <i class="material-icons">perm_contact_calendar</i>
            </div>
            <hr></hr>
            <div className='content' onClick={Click11} >
                <p>WHAT NEXT COUNTRY ?</p>
                <h2>Discover Night Paris</h2>
                <button>BOOK YOUR TRAVEL</button>
            </div>
        </div>
    </>
  )
}

export default Images