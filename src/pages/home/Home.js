import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './home.css'

import PopularProductsData from '../../data/popularProSliderData/PopularProSLiderData'
import CategotySlider from '../../data/categorySliderData/CategorySliderData'

import HomePageImage from '../../assets/images/2f3faaf8-27f1-4407-8004-526ce5a9322f.png'
import oldFurnitureimg from '../../assets/images/old-furniture.png'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import WhoWeAreIMG from '../../assets/images/who_we_are_image.png'
import traderImage from '../../assets/images/trade_card_img.png'

export const Home = () => {

const itemWidth = 310; 
const productsPerPage = 4;
const totalProducts = PopularProductsData.length;
const maxIndex = Math.max(0, totalProducts - productsPerPage);

const [slider, setSlider] = useState(0);

const prev = () => {
  if (slider > 0) setSlider(slider - 1);
};

const next = () => {
  if (slider < maxIndex) setSlider(slider + 1);
};

  return (
    <>
      <section className="home_first_section">
        <div className='image_container'>
          <img src={HomePageImage} alt="home" />
        </div>
        <div className='text_container'>
          <h3> DREAM YOUR ROOM</h3>
          <h1>Designed for Your Life</h1>
          <button>
            Sleep in Style
          </button>
        </div>
      </section>

      <section className='category_sect'>
        <div className='category_container'>

          <div>
            <h1>Gain fresh perspective</h1>
          </div>
          
          <div className='category_viewport'>
            <div className='category_track'>

              {CategotySlider.map((item, index) => (
                <>
                  <Link to={`/categorie/${item.id}`} >
                    <div key={index} className='category_item'>
                      <img src={item.image} />
                      <p> {item.name} </p>
                    </div>
                  </Link>
                </>
              ))}

            </div>
          </div>

        </div>
      </section>

      <section className='third_section'>
        <div className='third_section_container'>
          <div className='third_sect_context'>
            <h3>Yesterday’s <br /> Comforts</h3>
            <p>Make more room for the things you love with smart solutions for every space.</p>
            <button>shop furniture</button>
          </div>
          <div className='third_sect_image'>
            <img src={oldFurnitureimg} />
          </div>
        </div>
      </section>

      <section className='slider_section'>
        <div className='slider_container'>
          <h1>Popular Furniture</h1>

          <button onClick={prev} className='prev_btn'> <IoIosArrowBack /> </button>

          <div className='slider_viewport'>
            <div
              className='slider_track'
              style={{ transform: `translateX(-${slider * itemWidth}px)` }}
            >
              {PopularProductsData.map((popularItem, index) => (
                <div className='slider_item' key={index}>
                  <img src={popularItem.image} alt={popularItem.name} />
                  <h3>{popularItem.name}</h3>
                  <p>${popularItem.price}</p>
                  <button>Details</button>
                </div>
              ))}
            </div>
          </div>
            
          <button onClick={next} className='next_btn'> <IoIosArrowForward /> </button>
        </div>
      </section>

      <section className='fourth_section'>
        <div className='trade_aboutUs_container'>
          <div className='trade_card'>
            <img src={WhoWeAreIMG} />
            <h1>Trade</h1>
            <p>We’re dedicated to building long-term relationships with trade professionals who are seeking the best in quality and design. Sign-up for a trade account and receive a special discount off your order today.</p>
            <Link to='/registration'>
              <button>SIGN UP</button>
            </Link>
          </div>

          <div className='who_we_are_card'>
            <img src={traderImage} />
            <h1>Who We Are</h1>
            <p>At RetroZone, we believe timeless design never goes out of style. From our creative studio to your home, we’re dedicated to crafting furniture that blends vintage charm with modern comfort</p>
            <Link to='/registration'>
              <button>SIGN UP</button>
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}
