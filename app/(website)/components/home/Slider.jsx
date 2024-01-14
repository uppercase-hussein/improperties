'use client'
import Link from 'next/link'
import React from 'react'
import Slider from 'react-slick'

const PageSlider = ({slides}) => {
  let settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,
    autoplay:true,
    fade: true,
    swipe:true,
    swipeToSlide:true,
  }

  // console.log(slides)
  return (
    <div className="slider style_five">
  <Slider {...settings}>
    {
      slides.map((slide, index) => {
        return (
          <div key={index} className="slide-item-content">
            <div className="image-layer" style={{backgroundImage: `url(${slide.fields.image.fields.file.url})`}} />
            <div className="slide-item content_left">
              <div className="auto-container">
                <div className="row align-items-center">
                  <div className="col-md-12 text-center">
                    <div className="slider_content">
                      <h6 className="animate_up mb-5">
                        {slide.fields.subtitle}
                      </h6>
                      <h1 className="animate_left">{slide.fields.ttile}</h1>
                      <div className="button_all animate_down">
                        <Link href="/contact-us" className="theme_btn color_white  animated">{slide.fields.ctaText}</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })
    }
    </Slider>
</div>


  )
}

export default PageSlider