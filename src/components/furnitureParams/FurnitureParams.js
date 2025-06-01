import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './FurnitureParams.css';
import furnitureProducts from '../../data/allProductsData/AllProductsData';

import { IoStar } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";

const FurnitureParams = () => {

  const { id } = useParams();
  const product = furnitureProducts.find(p => p.id === id);
  
  const [increment, setIncrement] = useState(1)
  
  const incrementFunction = () => {
    setIncrement(increment + 1)
  }
  const decrementFunction = () => {
    if(increment === 1){
      setIncrement(increment - 0)
    }else{
      setIncrement(increment - 1)
    }
  }


  return (
    <section className='furniture_details_sect'>
      <div className="furniture_details_container">
        <div className='product_image_div'>
          <img src={product.image} className="paimage" alt={product.name} />
        </div>
        <div className='furniture_details_div'>

          <div className='product_name_div'>
            <h2>{product.name}</h2>
            <p>View details</p>
          </div>
          <div className='rating_div'>
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <span>380 Review</span>
          </div>
          <div>
            <p>${product.price}</p>
          </div>
          <div className='furniture_description'>
            <p>{product.description}</p>
          </div>

          <div className='color_buttons'>
            <button style={{backgroundColor: "#396244"}}></button>
            <button style={{backgroundColor: "#6a3219"}}></button>
            <button style={{backgroundColor: "#bd4135"}}></button>
          </div>

          <div className='checkoutBtn_inc_dec_div'>
            <div className='inc_dec_div'>
              <button onClick={decrementFunction}> <FiMinus /> </button>
              <span>{increment}</span>
              <button onClick={incrementFunction}> <GoPlus className='GoPlus'/> </button>
            </div>
            <div className='checkout_div'>
              <button>Proceed to Checkout</button> 
            </div>
          </div>
          
        </div>
      </div>
    </section>

  );
};

export default FurnitureParams;
