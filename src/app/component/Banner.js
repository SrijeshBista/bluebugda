
import React from 'react'
import Link from 'next/link'

const Banner =()=> {
  return (
    <>
    <section id='banner-sec' className='padding'>
    <div className='banner-main'>
      <div className='banner-title'>
        <h1>Unlock Your <br/> <span> Perfect </span> Strategy</h1>
      </div>

      <div className='banner-paragraph'>
        <div className='paragraph-sec'>
        <p>Develop our products with our digital marketing services that are trusted and very experienced in their fields,let&apos;s try it</p>
        </div>
        
        <div className='banner-btn'>
         <Link href={'contact'}><button>Get started</button></Link> 
        </div>


      </div>
    </div>
      <div className='banner-image'>
        <div className='banner-right'>
          <img src='./bannerimg.png'/>
        </div>

        <div className='banner-left'>
          <img src='./img.png'/>
        </div>

      </div>
      <div className="infinite-scroll-container">
          <div className="scroll-wrapper">
            {/* First set of logos */}
            <div className="logo-container">
              <img src="/img/" alt="logo" />
              <img src="/img/" alt="logo" />
              <img src="/img/" alt="logo" />
              <img src="/img/" alt="logo" />
              <img src="/img/" alt="logo" />
              <img src="/img/" alt="logo" />
              <img src="/img/" alt="logo" />
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="logo-container">
              <img src="/img/" alt="logo" />
              <img src="/img/" alt="logo" />
              <img src="/img/" alt="logo" />
              <img src="/img/" alt="logo" />
              <img src="/img/" alt="logo" />
              <img src="/img/" alt="logo" />
              <img src="/img/" alt="logo" />
            </div>
          </div>
        </div>
    
    </section>
    </>
  )
}

export default Banner ;