import React from 'react'
import Search from '../Image/search.png'
import Cart from '../Image/cart.png'
import Heart from '../Image/heart.png'
import Person from '../Image/prsn.png'
import Vector from '../Image/Vector.png'

const Navbar = () => {
  return (
    <>
      <div className="nav-2">
            <div className="navbar2">
              <div className='logo'>
                <ul>
                  <li><span><b> Bandage</b></span></li>
                </ul> 
                </div>
                <div className="login">
                    <ul className='login'>
                      <li><img src={Search} alt='Not Available'></img></li>
                      <li><img src={Cart} alt='Not Available'></img></li>
                      <li><img src={Heart} alt='Not Available'></img></li>
                    </ul>
                </div>
            </div>
            <div className="nav_menu-2">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Product</a></li>
                        <li><a href="/">Pricing</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </div>
        </div>
    </>
  )
}

export default Navbar
