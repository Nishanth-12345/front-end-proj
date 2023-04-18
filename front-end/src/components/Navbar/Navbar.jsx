import React from 'react'
import Logo from '../../images/Logo.png'
import search from '../../images/Group 2964.png'
import admin from '../../images/Group 2966.png'
import heart from '../../images/Group 2965.png'
import home from '../../images/Group 2967.png'
import cart from '../../images/Cart.png'
import './Navbar.css'
import { useState } from 'react';
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
const Navbar = () => {

  const [ active, setActive] = useState('navbar')
  const showNav= () => {
    setActive('navbar actionNavbar')
}
const removeNav = () => {
    setActive('navbar')
}
  return (
   <div>
  
    <div className={active} >
     
     <div className='nav-1'>
      <div className='nav-2'>
        <ul className='ul-1'>
            <li className='li-1'>Free returns</li>
            <li className='li-2'>try at home</li>
            <li >24 hr dispatch</li>
        </ul>
       </div>
       <div className='nav-3'>
        <ul className='ul-2'>
            <li>Glasses</li>
            <li>Sunglasses</li>
            <li>Eye-Test</li>
            <li>Blogs</li>
        </ul>
      </div>
        
     </div>   
      
     <div>
          <img src={Logo} className='logo'></img>
     </div>
      <div className='nav-4'>
        <div className='nav-5'>
         <p>+441613125767</p>
         <p className='li-4'>Help</p>
         <p className='li-5'>login</p>
       </div>
       <div className='nav-6'>
         <div className='img-2'>
           <img src={search} />
           <img src={admin} />
           <img src={heart} />
           <img src={home} />
           <img src={cart} />
         </div>
       </div>
      </div>
      
    </div>
    <div onClick={removeNav} className="closeNavbar">
                        <AiFillCloseCircle className="icon" />
       </div>
       <div onClick={showNav} className='toggleNavbar'>
                    <TbGridDots className="icon"/>
                </div>
  </div>
  )
}

export default Navbar