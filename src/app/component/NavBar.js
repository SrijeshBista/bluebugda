// import React from "react";
"use client";
import { useState } from "react";
import Link from "next/link";

import { FaBars } from "react-icons/fa6";
const NavBar =()=>{
    const [showhamburger, setshowhamburger] = useState(false);
    // function to open hamburger 
    const openhamburger =()=>{
        setshowhamburger(true);
    }
    // function to close hamburger 
    const closehamburger =()=>{
        setshowhamburger(false);
    }

    return(
        <>
        <header>
            <div className="nav-main container">
                <div className="logo">
                <Link href={'/'}>  <img src="./bluebugdalogo.png"/></Link>
                </div>
                <div className="nav-bar">
                    <ul>
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'services'}>Service</Link></li>
                        <li><Link href={'blog'}>Blog</Link></li> 
                        <li><Link href={'contact'}>Contact</Link></li>
                    </ul>
                </div>
                
               
                <div className="hambar">
                   <button onClick={openhamburger}><FaBars/></button>
                </div>


            </div>
                {/* openhamburger  */}
                {showhamburger &&(
                    <>
                       {/* button for close  */}
                    <div className="closebtn container">
                        <button onClick={closehamburger}>X</button>
                    </div>
                    <div className="navs-main container">
                     <div className="navs-bar ">
                     <ul>
                         <li><Link href={'/'}>Home</Link></li>
                         <li><Link href={'services'}>Service</Link></li>
                         <li><Link href={'blog'}>Blog</Link></li>
                         <li><Link href={'contact'}>Contact</Link></li>
                     </ul>
                 </div>
                    </div>
                 </>
                )}
        </header>
        </>
    )
}
export default NavBar ;