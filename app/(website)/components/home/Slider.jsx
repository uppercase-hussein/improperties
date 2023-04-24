'use client'
import Link from 'next/link'
import React from 'react'
import Slider from 'react-slick'

const PageSlider = () => {
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
  return (
    <div className="slider style_five">
  <Slider {...settings}>
    <div className="slide-item-content">
      <div className="image-layer" style={{backgroundImage: 'url(assets/images/slider/slider1.jpg)'}} />
      <div className="slide-item content_left">
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-md-12 text-center">
              <div className="slider_content">
                <h6 className="animate_up">
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
                <h6 className="animate_up">
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
                <h6 className="animate_up">
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
                <h6 className="animate_up">
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
    </div>
    </Slider>
  <div className="tab_postion_absolute">
    <div className="container">
      <div className="slider tab_slick">
        {/* <div className="title">
          <h3>Land Sale</h3>
        </div>
        <div className="title">
          <h3>Propery Development</h3>
        </div>
        <div className="title">
          <h3>Property Management</h3>
        </div>
        <div className="title">
          <h3>Building construction</h3>
        </div> */}
      </div>
    </div>
  </div>
</div>


  )
}

export default PageSlider