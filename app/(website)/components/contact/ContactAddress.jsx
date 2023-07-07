import React from 'react'

const ContactAddress = () => {
  return (
   <section className="contact-section">
  {/*-============spacing==========-*/}
  <div className="pd_top_80" />
  {/*-============spacing==========-*/}
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="contact_box_content">
          <div className="icon trans">
            <img src="assets/images/cont-1.png" alt="img" className="img-fluid" />
          </div>
          <div className="contact-infor">
            <h6 className="title_no_a_24"> Location</h6>
            <span>98 East-West Road Glass-house, along Eliozu, Port Harcourt, Nigeria.</span>
          </div>
        </div>
        {/*-============spacing==========-*/}
        <div className="pd_bottom_30" />
        {/*-============spacing==========-*/}
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="contact_box_content">
          <div className="icon trans">
            <img src="assets/images/cont-2.png" alt="img" className="img-fluid" />
          </div>
          <div className="contact-infor">
            <h6 className="title_no_a_24">Email</h6>
            <a href="mailto:improperties@gmail.com">improperties@gmail.com
            </a>
            <a href="mailto:info@improperties.ng">info@improperties.ng</a>
          </div>
        </div>
        {/*-============spacing==========-*/}
        <div className="pd_bottom_30" />
        {/*-============spacing==========-*/}
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="contact_box_content">
          <div className="icon trans">
            <img src="assets/images/cont-3.png" alt="img" className="img-fluid" />
          </div>
          <div className="contact-infor">
            <h6 className="title_no_a_24">Call Us</h6>
            <a href="tel:+2349088888313">+2349088888313</a>
          </div>
        </div>
        {/*-============spacing==========-*/}
        <div className="pd_bottom_30" />
        {/*-============spacing==========-*/}
      </div>
    </div>
  </div>
  {/*-============spacing==========-*/}
  <div className="pd_bottom_40" />
  {/*-============spacing==========-*/}
</section>

  )
}

export default ContactAddress