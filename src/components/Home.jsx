import React, { useState } from 'react'
import showCaseImg from '../img/productone.png';
import showCaseImg2 from '../img/producttwo.png';
import Button from './Button'

export default function Home() {
  const [homeContent, setHomeContent] = useState({
    title: "Modellor Coconut Coir Pith Block",
    detail: "Premium Compressed Coco Coir Block (1 Block, 10 lb.). Each block on hydration makes 18 to 20 Gallons of Coir. Coir is washed multiple times with fresh water and has low salt levels (low E.C) and balanced pH. The Coir offered is a great Seed Starter, 100% Natural and an Organic Grow Media. Use it Indoor, Outdoor, use as a Potting Mix, Grow Flowers, Grow Vegetables, do Home Gardening..", image: showCaseImg, id: 1
  });
  const changeProduct = () => (setHomeContent({
    title: "Modellor Coconut Coir Pith Brick",
    detail: "Modellor Premium Compressed Coconut Coir Brick (4 Bricks, 1.25 lb. each). 4 Coir Bricks on hydration makes 9 Gallons of Coir. Unlike others, Modellor Coir is washed multiple times with fresh water and has low salt levels (low E.C) and balanced pH. The Coir offered is a great Seed Starter, 100% Natural and an Organic Grow Media. Use it Indoor, Outdoor, use as a Potting Mix, Grow Flowers, Grow Vegetables, do Home Gardening.", image: showCaseImg2, id: 2
  }));
  const changeProductTwo = () => (setHomeContent({
    title: "Modellor Coconut Coir Pith Block",
    detail: "Premium Compressed Coco Coir Block (1 Block, 10 lb.). Each block on hydration makes 18 to 20 Gallons of Coir. Coir is washed multiple times with fresh water and has low salt levels (low E.C) and balanced pH. The Coir offered is a great Seed Starter, 100% Natural and an Organic Grow Media. Use it Indoor, Outdoor, use as a Potting Mix, Grow Flowers, Grow Vegetables, do Home Gardening.", image: showCaseImg, id: 1
  }))
  return (
    <section className='home-section' id='home'>
      <div className='bg-shapes'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='home-content'>
              <h1>{homeContent.title}</h1>
              <p id='product-detail'>{homeContent.detail}</p>
              <Button title='Buy for $150'></Button>
            </div>
          </div>
          <div className='col-lg-6 order-first order-lg-last'>
            <div className='home-img'>
              <img src={homeContent.image} alt='product' id='product-img' />
            </div>
          </div>
        </div>
        <div className="home-button">
        {(homeContent.id === 1) ? <button onClick={changeProduct} className="btn mybtn2">Next Product</button> : <button onClick={changeProductTwo} className="btn mybtn2">Prev Product</button>}
        </div>
      </div>
    </section>
  )
}
