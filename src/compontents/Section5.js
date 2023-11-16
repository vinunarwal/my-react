import React from 'react'
import Image8 from '../Image/img8.jpg'
import Image2 from '../Image/img2.png'
import Image3 from '../Image/img3.png'
import Image4 from '../Image/img4.png'
const Section5 = () => {
  return (
    <div className='sec5'>
        <div className='Section-5'>
            <div className='sec5_menu'>
            <ul>
                <li><a href="/">BESTSELLER PRODUCTS</a></li>
                <li><a href="/"><span> Men</span></a></li>
                <li><a href="/">Women</a></li>
                <li><a href="/">Accessories</a></li>
                <li></li>
            </ul>
                 <br/><hr/>
            </div>
    
        <div className='sec5_part2'>
        <div className='sec5_div1'>
        <div>
            <img src={Image2} alt='Image not available'></img>
        </div>
        <div>
            <h3>Graphic Design</h3>
            <p>English Department</p>
            <p>$16.48 <span>$6.48</span> </p>
        </div>
        </div>
        <div className='sec5_div2'>
        <div>
            <img src={Image3} alt='Image not available'></img>
        </div>
        <div>
            <h3>Graphic Design</h3>
            <p>English Department</p>
            <p>$16.48 <span>$6.48</span> </p>
        </div>
        </div>
        <div className='sec5_div3'>
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

        <div className='sec5_part2'>
        <div className='sec5_div1'>
        <div>
            <img src={Image2} alt='Image not available'></img>
        </div>
        <div>
            <h3>Graphic Design</h3>
            <p>English Department</p>
            <p>$16.48 <span>$6.48</span> </p>
        </div>
        </div>
        <div className='sec5_div2'>
        <div>
            <img src={Image3} alt='Image not available'></img>
        </div>
        <div>
            <h3>Graphic Design</h3>
            <p>English Department</p>
            <p>$16.48 <span>$6.48</span> </p>
        </div>
        </div>
        <div className='sec5_div3'>
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
        <div className='sec5-side-img'></div>
            <img className='sec5-img' src={Image8} alt='Image not available'></img>
    </div>
      )
    }
    
    export default Section5