import React from 'react'
import Image11 from '../Image/img11.png'
import Image12 from '../Image/img12.png'
import Image13 from '../Image/img13.png'
import Image14 from '../Image/img14.png'
import Logo1 from '../Image/logo1.png'
import Logo2 from '../Image/logo2.png'
import Logo3 from '../Image/logo3.png'
import Logo4 from '../Image/logo4.png'
import Logo5 from '../Image/logo5.png'
import Logo6 from '../Image/logo6.png'
const Section7 = () => {
  return (
    <div>
        <div className='sec7-part1'>
            <h2>BESTSELLER PRODUCTS</h2>
        </div>
        <div className='sec7'>
            <div>
                <img src={Image11} alt='Image not available'></img>
                <h3>Graphic Design</h3>
                <p>English Department</p>
                <p>$16.48 <span>$6.48</span> </p>
            </div>
            <div>
                <img src={Image12} alt='Image not available'></img>
                <h3>Graphic Design</h3>
                <p>English Department</p>
                <p>$16.48 <span>$6.48</span> </p>
            </div>
            <div>
                <img src={Image13} alt='Image not available'></img>
                <h3>Graphic Design</h3>
                <p>English Department</p>
                <p>$16.48 <span>$6.48</span> </p>
            </div>
            <div>
                <img src={Image14} alt='Image not available'></img>
                <h3>Graphic Design</h3>
                <p>English Department</p>
                <p>$16.48 <span>$6.48</span> </p>
            </div>

        </div>
        <div className='sec7-post'>
            <ul>
                <li> <img src={Logo1} alt='Image not available'></img></li>
                <li> <img src={Logo2} alt='Image not available'></img></li>
                <li> <img src={Logo3} alt='Image not available'></img></li>
                <li> <img src={Logo4} alt='Image not available'></img></li>
                <li> <img src={Logo5} alt='Image not available'></img></li>
                <li> <img src={Logo6} alt='Image not available'></img></li>
            </ul>
        </div>
    </div>
   )
  }
  export default Section7
