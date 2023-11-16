import React from 'react'

// import { productsData } from '../data/Section2'
const Section2 = (props) => {
    console.log("props=>", props);
  return (
    <> 
    <div className='sec2'>
    {
        props.data.map((product, index)=>{
         return   (
        <div key={index} className='sec2_div1'>
            <div className='sec2-content'>
            <p>{product.tag}</p>
            <h2>{product.title}</h2>
            <p>{product.des}</p>
        </div>
        <div>
            <img src={product.img} alt='Image not available'></img>
        </div>
        </div>
         )
    
        })
    }   
    </div>
    </>

      )
    }
    
    export default Section2