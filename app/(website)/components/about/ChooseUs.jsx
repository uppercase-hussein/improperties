import Link from 'next/link'
import React from 'react'

const ChooseUs = () => {
  return (
    <section className="content-section">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="section_title type_one">
          <h4 className="sm_title"> Why Choose Us</h4>
          <div className="title_whole">
            <h2 className="title"> Experience, Expertise, and Tailored Solutions</h2>
          </div>
          <p> At IM Properties, we are passionate about what we do and take pride in our work. We are dedicated to delivering excellence in everything we do, and we strive to exceed your expectations. Contact us today to learn more about how we can help you achieve your real estate goals.</p>
        </div>
        {/*-============spacing==========-*/}
        <div className="pd_bottom_40" />
        {/*-============spacing==========-*/}
        <div className="theme_btn_all">
          <Link href="/contact-us" className="theme_btn">
            Contact Us <span><i className=" fi-rr-arrow-small-right" /></span>
          </Link>
        </div>
        {/*-============spacing==========-*/}
        <div className="pd_bottom_120" />
        {/*-============spacing==========-*/}
      </div>
      <div className="col-lg-6">
        <div className="image_video_box_only  type_one mr_bottom_minus_90 z_1">
          <div className="image one height_530px">
            <img src="assets/images/team/improp_team2.webp" alt="img" className="img-fluid height_530px" /> 
            <div className="video_box video-inner text-center">
              <a href="https://youtu.be/RN81h85V6D4" className="lightbox-image">
                <i className="fi-rr-play" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default ChooseUs