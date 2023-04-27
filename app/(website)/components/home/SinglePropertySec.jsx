'use client'
import Link from 'next/link';
import Slider from 'react-slick'
import SingleProperty from '../properties/SingleProperty';

const SinglePropertySec = ({properties}) => {
    let propertySettings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        swipeToSlide: true,
        autoplay: true,
        // fade: true,
        swipe: true,
        swipeToSlide: true,
        infinite: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return ( properties.map((property, index) =>{if(index < 6){ return <SingleProperty key={property.sys.id} property={property} /> }}))
    }

export default SinglePropertySec