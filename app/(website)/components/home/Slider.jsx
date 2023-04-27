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
    {/* <div className="slide-item-content">
      <div className="image-layer" style={{backgroundImage: 'url(assets/images/slider/slider1.jpg)'}} />
      <div className="slide-item content_left">
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-md-12 text-center">
              <div className="slider_content">
                <h6 className="animate_up mb-5">
                Land Sale
                </h6>
                <h1 className="animate_left">Your Gateway to Building  <br />
                 Your Dream Property</h1>
                <div className="button_all animate_down">
                  <Link href="/contact-us" className="theme_btn color_white  animated">Get Started</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="slide-item-content">
      <div className="image-layer" style={{backgroundImage: 'url(assets/images/slider/slider3.jpg)'}} />
      <div className="slide-item content_left">
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-md-12 text-center">
              <div className="slider_content">
                <h6 className="animate_up mb-5">
                  Property Development
                </h6>
                <h1 className="animate_left"> Unlocking Your Property's  <br />
                Full Potential </h1>
                <div className="button_all animate_down">
                  <Link href="/contact-us" className="theme_btn color_white  animated">Get Started</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="slide-item-content">
      <div className="image-layer" style={{backgroundImage: 'url(assets/images/slider/slider4.jpg)'}} />
      <div className="slide-item content_left">
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-md-12 text-center">
              <div className="slider_content">
                <h6 className="animate_up mb-5">
                Property Management
                </h6>
                <h1 className="animate_left">Let Us Take Care Of <br />
                 Your Investment </h1>
                <div className="button_all animate_down">
                  <Link href="/contact-us" className="theme_btn color_white  animated">Get Started</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="slide-item-content">
      <div className="image-layer" style={{backgroundImage: 'url(assets/images/slider/slider2.jpg)'}} />
      <div className="slide-item content_left">
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-md-12 text-center">
              <div className="slider_content">
                <h6 className="animate_up mb-5">
                Building construction
                </h6>
                <h1 className="animate_left"> Building Your Vision  <br />
                With Precision </h1>
                <div className="button_all animate_down">
                  <Link href="/contact-us" className="theme_btn color_white  animated">Get Started</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    </Slider>
</div>


  )
}

export default PageSlider