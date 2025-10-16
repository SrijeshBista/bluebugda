import React from 'react'
import Link from 'next/link'

const Feature =() => {
  return (
    <section id='feature-section'>
      <div className='feature-main padding'>
            <div className='feature-title'>
                <h4></h4>
                <h1>Get More Exclusive our </h1>
                <h2>Features</h2>
            </div>

            <div className='feature-row'>
              <div className='feature-card'>
                <div className='first-box'>
                  <img src="./img.png"/>
                </div>
                <div className='first-row'>
                  <h2>Grow Business</h2>
                  <p>Use the right method for each of your service</p>
                </div>
                <div className='feature-btn'>
                  <Link href={'blog'}><button  className='btn'>Learn more</button></Link>
                </div>
              </div>
              <div className='feature-card'>
              <div className='first-box'>
                  <img src="./img.png"/>
                </div>
                <div className='first-row'>
                  <h2>Right Strategy</h2>
                  <p>Use the right method for each of your service</p>
                </div>
                <div className='feature-btn'>
                <Link href={'blog'}><button  className='btn'>Learn more</button></Link>
                </div>
              </div>
              <div className='feature-card'>
              <div className='first-box'>
                  <img src="./img.png"/>
                </div>
                <div className='first-row'>
                  <h2>Improve Efficience</h2>
                  <p>Use the right method for each of your service</p>
                </div>
                <div className='feature-btn'>
                <Link href={'blog'}><button  className='btn'>Learn more</button></Link>
                </div>

              </div>
            </div>
      </div>

    </section>
  )
}

export default Feature ;
