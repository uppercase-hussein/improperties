"use client"
import React from 'react'
// import OwlCarousel from 'react-owl-carousel';

const Features = () => {
  return (
   <section id="features" className="block">
  <div className="container">
    <header><h3>Why you should own a piece of Campus Garden Classic</h3></header>
    <div className="row">
      <div className="col-md-4 col-sm-4">
        <ul className="features-list">
          <li>Mini pleasure Park</li>
          <li>Central drainage system</li>
          <li>Perimeter Fence with gate house</li>
          {/* <li>Well structured layout with good drainage system</li> */}
          <li>Central borehole water supply </li>
          <li>Street lights with stable power supply</li>
          {/* <li>Good road network with interlocked</li> */}
          {/* <li>Instant Allocation</li> */}
          {/* <li>Highly Developed environment</li> */}
          {/* <li>Flexible payment plan</li> */}
        </ul>{/* /.features-list */}
      </div>{/* /.col-md-8 */}
      <div className="col-md-8 col-sm-8">
        <div className="image-carousel">

          <div className="image-carousel-slide">
            <div className="row">
              <div className="col-md-7 col-sm-7">
                <a href="assets/img/box-image-02.jpg" className="image-popup">
                  <img src="ads/1/assets/img/cgc.jpg" alt />
                </a>
              </div>
              <div className="col-md-5 col-sm-5">
                <h4>Experience the allure</h4>
                <p>Welcome to Campus Garden Classic, where dreams take root in the embrace of nature. This is more than land; it's the canvas for your ideal home, a place where life unfolds in harmony with the surroundings.</p>
                <a href="#" className="btn btn-lg"> Contact Us for Details <span className="fa fa-toggle" /></a>
              </div>
            </div>{/* /.row */}
          </div>
        </div>
      </div>
   
    </div>
   
  </div>{/* /.container */}
</section>

  )
}

export default Features
