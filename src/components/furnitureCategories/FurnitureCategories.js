import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import './furnitureCategories.css'
import CategoryPageData from '../../data/categoryPageData/CategoryPageData'

import { FaSlidersH } from 'react-icons/fa';
import { BsGrid3X2GapFill } from "react-icons/bs";
import { CiGrid2V } from "react-icons/ci";


const FurnitureCategories = () => {

  const { id } = useParams()
  const FurnitureCategories = CategoryPageData[id];
  const dataLength = FurnitureCategories.length - 1

  const intro = FurnitureCategories[0];
  const [visibleProducts, setVisibleProducts] = useState(10)

  const handleShowMoreProducts = () => {
    setVisibleProducts(visibleProducts + 10)
  }

  return (
    <>
      <section className='categorie_image_name_Sect'>
        <div className='categorie_image_name_container'>
          <h1> {intro.startingname} </h1>
          <img src={intro.startingImage} />
        </div>
      </section>

      <section className='furniture_filter_Sect'>
        <div className='furniture_filter_container'>

          <div className='fillters_icons'>
            <span>
              <FaSlidersH />
              Filters
            </span>
            <p>clear filters</p>
          </div>

          <div>
            <div className='results_div'>
              <span>
                {dataLength} Results
              </span>
            </div>

            <div className='products_view'>
              <span>VIEW</span>
              <BsGrid3X2GapFill />
              <CiGrid2V />
            </div>

            <div className='sort_products'>
              <p>sort by --</p>
              <select className='select_div'>
                <option>Recommended</option>
                <option>New Arrivals</option>
                <option>Price Low to High</option>
                <option>Price High to Low</option>
              </select>
            </div>

          </div>

        </div>
      </section>

      <section className='mapped_furniture_sect'>
        <div className='mapped_furnitrure_container'>
          {FurnitureCategories.slice(1, visibleProducts).map((furniture, index) => (
            <>
              <div key={index} className='furniture_item'>
                <div className='furniture_item_img'>
                  <img src={furniture.image}  />
                </div>

                <div className='furniture_color_div'>
                  <button style={{backgroundColor: '#c0a182', padding: "6px", borderRadius: '100%', border: "1px solid #222"}}></button>
                  <button style={{backgroundColor: '#5a4d44', padding: "6px", borderRadius: '100%', border: "1px solid #222"}}></button>
                  <button style={{backgroundColor: '#212121', padding: "6px", borderRadius: '100%', border: "1px solid #222"}}></button>
                  <button style={{backgroundColor: '#242424', padding: "6px", borderRadius: '100%', border: "1px solid #222"}}></button>
                  <button style={{backgroundColor: '#272727', padding: "6px", borderRadius: '100%', border: "1px solid #222"}}></button>
                  <button style={{backgroundColor: '#3a463a', padding: "6px", borderRadius: '100%', border: "1px solid #222"}}></button>
                </div>

                <div className='furniture_item_context'>
                  <div className='furniture_name'>
                    <p>Design Within Reach</p>
                    <p> {furniture.name} </p>
                  </div>
                  <div className='furniture_price'>
                    <p> {furniture.price} </p>
                  </div>
                </div>
                
              </div>
            </>
          ))}

        </div>
        <button onClick={handleShowMoreProducts} className='show_furniture_btn'>Show more</button>
      </section>
    </> 
  )
}


export default FurnitureCategories
