import React from 'react'

const ContactMap = () => {
  return (
   <section className="contact-map-section">
  <div className="container-no">
    <div className="row">
      <div className="col-lg-12">
        <section className="map-section">
          {/*Map Outer*/}
          <div className="map-outer">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.468073555798!2d7.012556673977626!3d4.860948395114715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d34cb6edf659%3A0xafb650d30afdfeab!2sIM%20Properties%2C%20Portharcourt%20Head%20Office!5e0!3m2!1sen!2sng!4v1682288375572!5m2!1sen!2sng" height={450} style={{border: 0, width:"100%"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </section>
      </div>
    </div>
  </div>
</section>

  )
}

export default ContactMap