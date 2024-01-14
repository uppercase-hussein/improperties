import Link from 'next/link'
import React from 'react'

const FooterCTA = () => {
  return (
   <section className="position-relative z_99 mr_bottom_minus_80">
  <div className="container">
    <div className="call_to_action style_one bg-dark">
      <div className="section_title type_one">
        <div className="title_whole">
          <h2 className="title">
         Want more? Become an ESP
          </h2>
        </div>
      </div>
      <div className="theme_btn_all">
        <Link href="/become-an-esp" className="theme_btn">
          Let's Get Started <span> <i className=" fi-rr-arrow-small-up" /></span>
        </Link>
      </div>
      <div className="d-flex align-items-center contact_header_one">
        <div className="icon_s">
          <i className=" fi-rr-headphones" />
        </div>
        <div className="content">
          {/* <h6 className="tite">Need Help?</h6> */}
          <div className="title_20"><a href="tel:+2349088888313">+2349088888313</a></div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default FooterCTA