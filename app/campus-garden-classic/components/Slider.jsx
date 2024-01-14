"use client"
import { displayAmount } from '@/app/utils/helpers'
import React from 'react'

const Slider = () => {
  return (
  <section id="slider">
  <div className="flexslider loading">
    <div id="loading-icon"><i className="fa fa-cog fa-spin" /></div>
    <ul className="slides">
      <li className="slide slide-has-parallax"><img src="ads/1/assets/img/slide-01.jpg" className="parallax-bg" alt="" /></li>
      <li className="slide slide-has-parallax"><img src="ads/1/assets/img/slide-02.jpg" className="parallax-bg" alt="" /></li>
      <li className="slide slide-has-parallax"><img src="ads/1/assets/img/slide-03.jpg" className="parallax-bg" alt="" /></li>
    </ul>{/* /.slides */}
  </div>{/* /.flexslider */}
  <div className="slider-banner">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-8">
          <div className="title">
            <h2>Campus Garden Classic</h2>
            <figure className="subtitle">Discover the Perfect Canvas for Your Dream Home</figure>
            <h5>Located Besides Rivers State  University Extension, Abara. </h5>
            <i className="fa fa-arrow-circle-o-right" />
          </div>{/* /.title */}
        </div>{/* /.col-md-8 */}
        <div className="col-md-4 col-sm-4">
          <div className="form-slider-wrapper form-has-parallax">
            <header>
              <h3>Now</h3>
              <h1>{displayAmount(550)},000/plot</h1>
            </header>
            <hr />
            <form role="form" id="form-slider">
              <div className="form-group">
                <label htmlFor="name">Your Name<em>*</em></label>
                <input type="text" className="form-control" id="name" name="name" required />
              </div>{/* /.form-group */}
              <div className="form-group">
                <label htmlFor="email">Your Email<em>*</em></label>
                <input type="email" className="form-control" id="email" name="email" required />
              </div>{/* /.form-group */}
              <div className="form-group">
                <label htmlFor="phone">Your Phone<em>*</em></label>
                <input type="text" className="form-control" id="phone" name="phone" required />
              </div>{/* /.form-group */}
              <div className="form-group">
                <div id="form-slider-status" />
                <button type="submit" id="form-slider-submit" className="btn btn-default">Get Notified!</button>
              </div>{/* /.form-group */}
            </form>{/* /#form-slider */}
            <figure>*Required Fields</figure>
          </div>{/* /.form-slider-wrapper */}
        </div>{/* /.col-md-4 */}
      </div>{/* /.row */}
    </div>{/* /.container */}
  </div>{/* /.slider-banner */}
</section>

  )
}

export default Slider
