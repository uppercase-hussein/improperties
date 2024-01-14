import React from 'react'

const Contact = () => {
  return (
   <section id="contact" className="block background-color-grey-dark has-dark-background">
  <div className="container">
    <div className="row">
      <div className="col-md-4 col-sm-4">
        <header><h3>Reach Us</h3></header>
        <section className="agent">
          <div className="agent-contact">
            <div><strong>Phone:</strong> <a href='tel:+2349088888313'>(+234) 908 8888 313</a></div>
            <div><strong>E-mail:</strong> <a href="mailto:improperties@gmail.com">improperties@gmail.com</a></div>
            <hr/>
            <div>Visit our office at Mega Glass complex along Eliozu-Rumuokoro East-west road beside Okmas construction compan</div>
          </div>
        </section>
      </div>
      <div className="col-md-8 col-sm-8">
        <header><h3>Contact Form</h3></header>
        <form role="form" id="form-contact" method="post" action="#">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="form-group">
                <label htmlFor="contact-form-name">Your Name<em>*</em></label>
                <input type="text" className="form-control" id="contact-form-name" name="contact-form-name" required />
              </div>{/* /.form-group */}
            </div>{/* /.col-md-6 */}
            <div className="col-md-6 col-sm-6">
              <div className="form-group">
                <label htmlFor="contact-form-email">Your Email<em>*</em></label>
                <input type="email" className="form-control" id="contact-form-email" name="contact-form-email" required />
              </div>{/* /.form-group */}
            </div>{/* /.col-md-6 */}
          </div>{/* /.row */}
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="form-group">
                <label htmlFor="contact-form-message">Your Message<em>*</em></label>
                <textarea className="form-control" id="contact-form-message" rows={6} name="contact-form-message" required defaultValue={""} />
              </div>{/* /.form-group */}
            </div>{/* /.col-md-12 */}
          </div>{/* /.row */}
          <div className="form-group">
            <button type="submit" className="btn pull-right btn-large" id="form-contact-submit">Send a Message</button>
          </div>{/* /.form-group */}
          <div id="form-status" />
        </form>{/* /#form-contact */}
      </div>
    </div>
  </div>
</section>

  )
}

export default Contact
