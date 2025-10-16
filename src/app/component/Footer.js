import React from 'react'

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';
const Footer =()=> {
  return (
    <>
    <footer>
      <div className='footer-main container '>
        <div className='footer-left'>
          <div className='logo'>
          <Link href={'/'}><img src="./bluebugdalogo.png"/></Link>
          </div>
          <div className='footer-des'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div className='footer-social-media'>
              <button> <Link href={' https://www.facebook.com/bluebugsoftware.np/'}>  <FaFacebookF/></Link></button>
              <button> <Link href={'https://www.instagram.com/bluebug.soft/'}>  <FaInstagram/></Link></button>
          </div>
        </div>
        <div className='footer-right'>
          <div className='footer-nav'>
            <ul>
              <h1>Quick Link</h1>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'services'}>Service</Link></li>
                <li><Link href={'blog'}>Blog</Link></li> 
                <li><Link href={'contact'}>Contact</Link></li>
            </ul>


            <ul>
            <h1>Legal Policy</h1>
              <li>Policy</li>
              <li>Terms and condition</li>
            </ul>


            <ul className='contact'>
            <h1>Contact Us</h1>
              <li>Address : </li>
              <li>Contact-no : 9766666103</li>
              <li>Email : Abc@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='copyright container'>
        <p>© Copyright 2025,developed by <span> BlueBug Software</span></p>
      </div>
    </footer>
      </>
  )
}

export default Footer ;
