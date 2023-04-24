import React from 'react'

const ContactForm = () => {
  return (
    <section className="form-section bg_light_1 position-relative">
  {/*-============spacing==========-*/}
  <div className="pd_top_90" />
  {/*-============spacing==========-*/}
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-12">
        <div className="section_title type_one">
          <h4 className="sm_title"> Get In Touch</h4>
          <div className="title_whole">
            <h2 className="title">We would love to hear from you! </h2>
          </div>
          <p> Whether you have a question, need more information about our services, or just want to say hello, we are here to help.</p>
        </div>
        {/*-============spacing==========-*/}
        <div className="pd_bottom_40" />
        {/*-============spacing==========-*/}
        <div className="social-icons">
          <ul>
            <li><a href="https://web.facebook.com/improperties.ng" className="m_icon"> <i className="fab fa-facebook" />
              </a></li>
            <li><a href="https://www.instagram.com/improperties.ng/" className="m_icon"> <i className="fab fa-instagram" />
              </a></li>
            <li><a href="https://wa.me/2349039951233?text=I'm%20coming%20from%20your%20website" className="m_icon"> <i className="fab fa-whatsapp" />
              </a></li>

          </ul>
        </div>
        {/*-============spacing==========-*/}
        <div className="pd_bottom_20" />
        {/*-============spacing==========-*/}
      </div>
      <div className="col-lg-8 col-md-12">
        <section className="contact_form_box_all">
          <div className="contact_form_shortcode">
            <form id="contact-form" method="post" action="" role="form">
              <div className="messages" />
              <div className="controls">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <input type="text" name="name" placeholder="Name *" required="required" data-error="Enter Your Name" />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <input type="text" name="email" required="required" placeholder="Email *" data-error="Enter Your Email Id" />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <input type="text" name="subject" required="required" placeholder=" Subject" />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <textarea name="message" placeholder="Additional Information... " rows={3} required="required" data-error="Please, leave us a message." defaultValue={""} />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group mg_top apbtn">
                      <button className="theme_btn" type="submit">Send Message</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  </div>
  <div className="ab_img_left_bottom z_0 mr_top_minus_150">
    <img src="assets/images/bg-1.png" className="img-fluid" alt="img" />
  </div>
  {/*-============spacing==========-*/}
  <div className="pd_bottom_90" />
  {/*-============spacing==========-*/}
</section>

  )
}

export default ContactForm