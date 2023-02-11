import React from 'react'
import Section from './Section'
import { productData } from '../Database'

const ProductItem = ({ product: { showcase, newPrice, oldPrice, desc,href } }) => {
  return (
    <div className='products-item'>
      <div className='product-img'>
        <img src={showcase} alt='product' className='img-fluid' />
        <div className='overlay'>
          <a href={href} className="btn mybtn1">Buy Now</a>
        </div>
      </div>
      <div className='product-content'>
        <div className='product-price'>
          <span className='new-price'>${newPrice}</span>
        </div>
        <h5 className='product-name'>{desc}</h5>
      </div>
    </div>
  )
}

export { ProductItem }

export default function Products() {
  const productItems = productData
  return (
    <Section
      title='Our Products'
      subtitle='We have lots of excellent and high quality products'
      className='products-section'
      id='products'
    >
      <div className='row'>
        <div className='owl-carousel' id='product-carousel'>
          {productItems.map((product, index) => (
            <div className='col-lg-12' key={index}>
              <ProductItem product={product} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
