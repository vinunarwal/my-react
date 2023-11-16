import React from 'react'
import Image from '../Image/img5.png'
import Image2 from '../Image/img2.png'
import Image3 from '../Image/img3.png'
import Image4 from '../Image/img4.png'
const Section3 = () => {
  return (
    <>  
      <div className='sec3'>
        <div className='sec3-side-img'>
            <img src={Image} alt='Image not available'></img>
        </div>
        <div className='Section-3'>
            <div className='sec3_menu'>
            <div>
               <h3>BESTSELLER PRODUCTS</h3>
            </div>
            <div>              
                 <ul>
                <li><a href="/"><span> Men</span></a></li>
                <li><a href="/">Women</a></li>
                <li><a href="/">Accessories</a></li>
            </ul>
                 </div>
            </div>
    
        <div className='sec3_part2'>
        <div className='sec3_div1'>
        <div>
            <img src={Image2} alt='Image not available'></img>
        </div>
        <div>
            <h3>Graphic Design</h3>
            <p>English Department</p>
            <p>$16.48 <span>$6.48</span> </p>
        </div>
        </div>
        <div className='sec3_div2'>
        <div>
            <img src={Image3} alt='Image not available'></img>
        </div>
        <div>
            <h3>Graphic Design</h3>
            <p>English Department</p>
            <p>$16.48 <span>$6.48</span> </p>
        </div>
        </div>
        <div className='sec3_div3'>
        <div>
            <img src={Image4} alt='Image not available'></img>
        </div>
        <div>
            <h3>Graphic Design</h3>
            <p>English Department</p>
            <p>$16.48 <span>$6.48</span> </p>
        </div>
        </div>
        </div>

        <div className='sec3_part3'>
        <div className='sec3_div1'>
        <div>
            <img src={Image2} alt='Image not available'></img>
        </div>
        <div>
            <h3>Graphic Design</h3>
            <p>English Department</p>
            <p>$16.48 <span>$6.48</span> </p>
        </div>
        </div>
        <div className='sec3_div2'>
        <div>
            <img src={Image3} alt='Image not available'></img>
        </div>
        <div>
            <h3>Graphic Design</h3>
            <p>English Department</p>
            <p>$16.48 <span>$6.48</span> </p>
        </div>
        </div>
        <div className='sec3_div3'>
        <div>
            <img src={Image4} alt='Image not available'></img>
        </div>
        <div>
            <h3>Graphic Design</h3>
            <p>English Department</p>
            <p>$16.48 <span>$6.48</span> </p>
        </div>
        </div>
        </div>

        </div>
    </div>
    </>

      )
    }
    
    export default Section3