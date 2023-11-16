import React from 'react'
import Image9 from '../Image/img9.png'
import Image10 from '../Image/img10.png'
const Section6 = () => {
  return (
    <div>
        <div className='sec6'>
        <div className='sec6-part2'>
            <h2>MOST POPULAR</h2>
            <p>
              We focus on ergonomics and meeting <br/>
              you where you work. It's only a <br/>
              keystroke away.
            </p>
            <img src={Image9} alt='Image not available'></img>
            <p>English Department</p>
            <p>15 Sales</p>
            <p>$16.48 <span>$6.48</span> </p>
        </div>
        <div className='sideimg2'>
        <img src={Image10} alt='Image not available'></img>
        </div>
        </div>

    </div>
    )
 }
        
export default Section6