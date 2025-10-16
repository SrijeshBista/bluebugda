import { useState } from "react"
import Link from "next/link"
const Trust =() => {
  return (
    <section id="trust-section">
      <div className="trust-main">
        <div className="trust-left">
            <div className="trust-img">
                <img src="./img.png" />
            </div>
        </div>
        <div className="trust-right">
            <div className="trust-title">
                <h1>Trusted By Thousand of Business <span> Worldwide</span></h1>
            </div>
            <div className="trust-des">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div className="trust-btn">
               <Link href={'contact'}> <button>Get Start</button></Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Trust;
