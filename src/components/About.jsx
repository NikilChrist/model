import React from 'react'
import aboutImg from '../img/overview.jpg'
import Section from './Section'
import SectionTitle from './SectionTitle'

export default function About() {
  return (
    <Section className='about-section' id='about'>
      <div className='row'>
        <div className='col-lg-6 d-flex'>
          <div className='about-img'>
            <img src={aboutImg} alt='product' />
          </div>
        </div>

        <div className='col-lg-6 order-first order-lg-last'>
          <SectionTitle
            title='About Product'
            subtitle='Coconut coir pith is being extensively used as a soil-less medium for agri-horticultural purposes.'
            isLeft
          />

          <div className='about-content'>

            <ul className='list-unstyled'>
              <li>
                <i className='fas fa-check'></i>
                ENJOY GARDENING – GROW LIKE A PRO! – Modellor Coir is light, fluffy and easy to handle. Coir helps with water retention, aeration, drainage and helps with strong root growth. Mix with various soil mixes or your favorite nutrients. This is the Best Growing Medium. See your plants grow and have fun.
              </li>
              <li>
                <i className='fas fa-check'></i>
                GIVE BACK TO THE ENVIRONMENT – MOTHER EARTH WILL THANK YOU! - Modellor Coir is Environmentally Friendly, 100% Natural, Organic, Biodegradable. No Additives added Ever! Dried in open sun. Great alternative to mined Peat Moss.
              </li>
              <li>
                <i className='fas fa-check'></i>
                PLANTS LOVE THIS CLEAN AND LOW SALT COIR – GIVE ME MORE! - Unlike others, Modellor Coir is washed multiple times with fresh water to lower salts levels. Coir has very low salts (low EC), has a balanced pH that is ideal for Seed Germination. Coir is Clean and has high yield.
              </li>
              <li>
                <i className='fas fa-check'></i>
                LOVE YOUR MODELLOR PREMIUM COIR – STORE EXTRA AWAY! - Coir block will make 18 to 20 gallons of loose fluffy coir. Don’t need so much, use only a portion of the coir block that you need and store the extra away for later use. Coir is dehydrated and compressed to help storage.
              </li>
              <li>
                <i className='fas fa-check'></i>
                GROW WHERE YOU LIKE – INDOOR, OUTDOOR – ORDER NOW! - Use Modellor Coir to grow Indoors, grow Outdoors, use it as a Potting Mix or mix it with Soil or Compost, Grow Flowers, Grow Vegetables, use as a Mushroom Substrate, use as a Seed Starter.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
