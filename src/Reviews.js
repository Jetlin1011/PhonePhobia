import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

import './Review.css'

function Reviews({revarr}) {
  return (
    <div className='carousel-container bg-black color-dark rounded-pill w-100 m-0  '>
    
    <Carousel className=' text-dark carous p-2 rounded-pill border-1 ' indicators={false}>
      {revarr.map((item, index) => (
        <Carousel.Item key={index} className='p-0 border-1 rounded-pill bg-white text-dark  align-items-center justify-content-center'>
          <div className='d-block  w-100 rounded-pill carousal'>
            <div>
              <Carousel.Caption className='scr  custom-scrollbar rounded-pill" text-white  m-0 '>
                <p className='name p-1  mb-0 position-center'>{item.reviewer}</p>
                <p className='p-0 m-0'><b>{item.rating} stars <i class="fa-regular fa-star"></i></b></p>
                <p className=' p-0 m-0'>{item.comment}</p>
              </Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>


    </div>
  )
}

export default Reviews