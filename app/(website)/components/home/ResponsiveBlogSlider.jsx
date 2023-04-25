'use client'
import React from 'react'
import Slider from "react-slick";
import HomeBlogItem from './HomeBlogItem';

const ResponsiveBlogSlider = ({posts}) => {

let blogSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    swipeToSlide: true,
    autoplay: true,
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
  return (
    <Slider {...blogSettings}>
        {posts.map((post, index)=>{
          if(index < 3) return (<HomeBlogItem key={post.sys.id} post={post} />)
})}
</Slider>
  )
}

export default ResponsiveBlogSlider