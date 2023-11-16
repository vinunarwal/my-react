import React from 'react'
import Search from '../Image/search.png'
import Cart from '../Image/cart.png'
import Heart from '../Image/heart.png'
import Person from '../Image/prsn.png'
import Vector from '../Image/Vector.png'

const Navbar = () => {
  return (
    <div>
      <div className="container-fluid">
            <div className="navbar">
              <div className='logo'>
                <ul>
                  <li><span><b> Bandage</b></span></li>
                </ul> 
                </div>
                <div className="nav_menu">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Shop <img src={Vector} alt='Not Available'></img> </a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">Pages</a></li>
                    </ul>
                </div>
                <div className="login">
                    <ul className='login'>
                      <li><img src={Person} alt='Not Available'></img> Login / Register</li>
                      <li><img src={Search} alt='Not Available'></img></li>
                      <li><img src={Cart} alt='Not Available'></img>1</li>
                      <li><img src={Heart} alt='Not Available'></img></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
