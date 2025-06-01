import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './ProductFilters.css'

import { IoIosArrowDown } from "react-icons/io";

import furnitureProducts from '../../data/allProductsData/AllProductsData';

export const ProductFilters = () => {

    const minLimit = 0;
    const maxLimit = 2500;
    
    const [minPrice, setMinPrice] = useState(minLimit);
    const [maxPrice, setMaxPrice] = useState(maxLimit);
    const [visibleCount, setVisibleCount] = useState(12)
    
    const handleMinChange = (e) => {
      const value = Math.min(Number(e.target.value), maxPrice - 1);
      setMinPrice(value);
    };

    const handleMaxChange = (e) => {
      const value = Math.max(Number(e.target.value), minPrice + 1);
      setMaxPrice(value);
    }

    const handleShowMore = () => {
      setVisibleCount(visibleCount + 10)
    }

  return (
    <>
      <section className="product_filters_sect">
        <div className="product_filters_container">
          <div className='filter_side'>
              <div className="price-slider-container">
                <div className="slider">
                  <div
                    className="slider-range"
                    style={{
                      left: `${(minPrice / maxLimit) * 100}%`,
                      right: `${100 - (maxPrice / maxLimit) * 100}%`
                    }}
                  ></div>
                  <input
                    type="range"
                    min={minLimit}
                    max={maxLimit}
                    value={minPrice}  
                    onChange={handleMinChange}
                    className="thumb thumb-left"
                  />
                  <input
                    type="range"
                    min={minLimit}
                    max={maxLimit}
                    value={maxPrice}
                    onChange={handleMaxChange}
                    className="thumb thumb-right"
                  />
                </div>
                
                <div className="price-inputs">
                  <div>
                    <label>MIN:</label>
                    <input type="number" value={minPrice} onChange={handleMinChange} />
                  </div>
                  <div>
                    <label>MAX:</label>
                    <input type="number" value={maxPrice} onChange={handleMaxChange} />
                  </div>
                </div>
              </div>
                
              <div className='internal_memory'>
                  <div className='category_name_icon'>
                    <h3>Color</h3>
                    <IoIosArrowDown />
                  </div>
                  <div className='memory_filter'>
                    <div>
                      <input type='checkbox' id='checkbox_128' className='custom-checkbox' />
                      <label htmlFor='checkbox_128'>Black</label>
                    </div>
                    <div>
                      <input type='checkbox' id='checkbox_256' className='custom-checkbox' />
                      <label htmlFor='checkbox_256'>Brass</label>
                    </div>
                    <div>
                      <input type='checkbox' id='checkbox_512' className='custom-checkbox' />
                      <label htmlFor='checkbox_512'>White</label>
                    </div>
                    <div>
                      <input type='checkbox' id='checkbox_1tb' className='custom-checkbox' />
                      <label htmlFor='checkbox_1tb'>Green</label>
                    </div>
                    <div>
                      <input type='checkbox' id='checkbox_1tb' className='custom-checkbox' />
                      <label htmlFor='checkbox_1tb'>Red</label>
                    </div>
                  </div>
              </div>
                
              <div className='ram'>
                  <div className='category_name_icon'>
                    <h3>Category</h3>
                    <IoIosArrowDown />
                  </div>
                  <div className='memory_filter'>
                    <div>
                      <input type='checkbox' id='checkbox_128' className='custom-checkbox' />
                      <label htmlFor='checkbox_128'>Sofa</label>
                    </div>
                                              
                    <div>
                      <input type='checkbox' id='checkbox_256' className='custom-checkbox' />
                      <label htmlFor='checkbox_256'>Bed</label>
                    </div>
                                              
                    <div>
                      <input type='checkbox' id='checkbox_512' className='custom-checkbox' />
                      <label htmlFor='checkbox_512'>Dining Table</label>
                    </div>
                                              
                    <div>
                      <input type='checkbox' id='checkbox_1tb' className='custom-checkbox' />
                      <label htmlFor='checkbox_1tb'>Wardrobe</label>
                    </div>
                    <div>
                      <input type='checkbox' id='checkbox_1tb' className='custom-checkbox' />
                      <label htmlFor='checkbox_1tb'>Coffee Table</label>
                    </div>
                    <div>
                      <input type='checkbox' id='checkbox_1tb' className='custom-checkbox' />
                      <label htmlFor='checkbox_1tb'>Bookshelf</label>
                    </div>
                    <div>
                      <input type='checkbox' id='checkbox_1tb' className='custom-checkbox' />
                      <label htmlFor='checkbox_1tb'>Nightstand</label>
                    </div>
                    <div>
                      <input type='checkbox' id='checkbox_1tb' className='custom-checkbox' />
                      <label htmlFor='checkbox_1tb'>TV Stand</label>
                    </div>
                  </div>
              </div>
                
              <div className='screen_size'>
                  <div className='category_name_icon'>
                    <h3>Material</h3>
                    <IoIosArrowDown />
                  </div>
                  <div className='memory_filter'>
                    <div>
                      <input type='checkbox' id='checkbox_128' className='custom-checkbox' />
                      <label htmlFor='checkbox_128'>Wood </label>
                    </div>
                                              
                    <div>
                      <input type='checkbox' id='checkbox_256' className='custom-checkbox' />
                      <label htmlFor='checkbox_256'>Metal</label>
                    </div>
                                              
                    <div>
                      <input type='checkbox' id='checkbox_512' className='custom-checkbox' />
                      <label htmlFor='checkbox_512'>Glass</label>
                    </div>
                                              
                    <div>
                      <input type='checkbox' id='checkbox_1tb' className='custom-checkbox' />
                      <label htmlFor='checkbox_1tb'>Plastic</label>
                    </div>
                    <div>
                      <input type='checkbox' id='checkbox_1tb' className='custom-checkbox' />
                      <label htmlFor='checkbox_1tb'>Fabric</label>
                    </div>
                    <div>
                      <input type='checkbox' id='checkbox_1tb' className='custom-checkbox' />
                      <label htmlFor='checkbox_1tb'>Leather</label>
                    </div>
                  </div>
              </div>
                
              <div className='update_frequency'>
                  <div className='category_name_icon'>
                    <h3>Room</h3>
                    <IoIosArrowDown />
                  </div>
                  <div className='memory_filter'>
                    <div>
                      <input type='checkbox' id='checkbox_128' className='custom-checkbox' />
                      <label htmlFor='checkbox_128'>Living Room</label>
                    </div>
                                              
                    <div>
                      <input type='checkbox' id='checkbox_256' className='custom-checkbox' />
                      <label htmlFor='checkbox_256'>Bedroom</label>
                    </div>
                                              
                    <div>
                      <input type='checkbox' id='checkbox_512' className='custom-checkbox' />
                      <label htmlFor='checkbox_512'>Dining Room</label>
                    </div>
                                              
                    <div>
                      <input type='checkbox' id='checkbox_1tb' className='custom-checkbox' />
                      <label htmlFor='checkbox_1tb'>Office</label>
                    </div>
                    <div>
                      <input type='checkbox' id='checkbox_512' className='custom-checkbox' />
                      <label htmlFor='checkbox_512'>Outdoor</label>
                    </div>
                                              
                    <div>
                      <input type='checkbox' id='checkbox_1tb' className='custom-checkbox' />
                      <label htmlFor='checkbox_1tb'>Entryway</label>
                    </div>
                  </div>
              </div>
              <div className='update_frequency'>
                  <div className='category_name_icon'>
                    <h3>Ratings</h3>
                    <IoIosArrowDown />
                  </div>
                  <div className='memory_filter'>
                    <div>
                      <input type='checkbox' id='checkbox_128' className='custom-checkbox' />
                      <label htmlFor='checkbox_128'>5 stars</label>
                    </div>
                                              
                    <div>
                      <input type='checkbox' id='checkbox_256' className='custom-checkbox' />
                      <label htmlFor='checkbox_256'>4 stars & up</label>
                    </div>
                    <div>
                      <input type='checkbox' id='checkbox_256' className='custom-checkbox' />
                      <label htmlFor='checkbox_256'>3 stars & up</label>
                    </div>                           
                  </div>
              </div>
                
          </div>
          <div className='furniture_list'>
              {furnitureProducts.slice(0, visibleCount).map((product) => (
                  <>
                      <div key={product.id} className='product_list_card'>
                          <div className='product_list_card_image'>
                            <Link to={`/product-details/${product.id}`}>
                              <img src={product.image} alt={product.name} />                    
                            </Link>
                          </div>
                          <div className='product_context'>
                              <h3>{product.name}</h3>
                              <p>Price: <span>${product.price}</span> </p>
                              <Link to={`/product-details/${product.id}`}>
                                <button className='add_to_cart'>Details</button>
                              </Link>
                          </div>
                      </div>
                  </>
              ))}
          </div>
        </div>
      </section>
      
      <section className='show_more_btn_Sect'>
        <button onClick={handleShowMore} className='show_more_btn'>Show more</button>
      </section>
    </>
  )
}