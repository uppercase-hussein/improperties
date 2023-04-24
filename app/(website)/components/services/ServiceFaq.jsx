import React from 'react'

const ServiceFaq = () => {
  return (
   <section className="faq-section">
  {/*-============spacing==========-*/}
  <div className="pd_top_80" />
  {/*-============spacing==========-*/}
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="section_title type_one">
          <h4 className="sm_title"> Frequently Asked Questions</h4>
          <div className="title_whole">
            <h2 className="title"> Answers to Your Real Estate Questions</h2>
          </div>
          {/*-============spacing==========-*/}
          <div className="pd_bottom_20" />
          {/*-============spacing==========-*/}
        </div>
        <div className="position-relative br_left_3px_theme_color pd_left_10">
        Whether you're looking to buy, sell, rent, or manage a property, our FAQ can help answer your questions and provide useful information. If you don't find what you're looking for, feel free to contact us for more assistance.
        </div>
        {/*-============spacing==========-*/}
        <div className="pd_bottom_30" />
        {/*-============spacing==========-*/}
        <div className="block_faq">
          <div className="accordion-box">
            <div className="accordion active-block">
              <div className="question  faq_header active">
                <div className="question_box ">
                  <div className="title_no_a_18 trans">What types of properties does IM Properties sell?
                  </div>
                  <span className="icon_fq trans fi-rs-arrow-small-right" />
                </div>
              </div>
              <div className="answer accordion-content current">
                We offer a diverse portfolio of properties for sale, including residential, commercial, industrial, and agricultural properties.
              </div>
            </div>
            <div className="accordion ">
              <div className="question faq_header ">
                <div className="question_box">
                  <div className="title_no_a_18 trans">What property management services does IM Properties provide?
                  </div>
                  <span className="icon_fq trans fi-rs-arrow-small-right" />
                </div>
              </div>
              <div className="answer accordion-content ">
              IM Properties offers a full range of property management services, including tenant screening, rent collection, property maintenance, lease negotiations, and more.
              </div>
            </div>
            <div className="accordion">
              <div className="question  faq_header ">
                <div className="question_box ">
                  <div className="title_no_a_18 trans">
                  Does IM Properties provide financing options for property purchases?
                  </div>
                  <span className="icon_fq trans fi-rs-arrow-small-right" />
                </div>
              </div>
              <div className="answer accordion-content">
              Yes, IM Properties can provide financing options for real estate transactions, such as mortgage loans, bridge loans, and construction loans.
              </div>
            </div>

            <div className="accordion">
              <div className="question  faq_header ">
                <div className="question_box ">
                  <div className="title_no_a_18 trans">
                  Can IM Properties help with property development projects?
                  </div>
                  <span className="icon_fq trans fi-rs-arrow-small-right" />
                </div>
              </div>
              <div className="answer accordion-content">
              Yes, IM Properties specializes in property development and can offer services such as site analysis, planning, design, construction, and marketing.
              </div>
            </div>

            <div className="accordion">
              <div className="question  faq_header ">
                <div className="question_box ">
                  <div className="title_no_a_18 trans">
                  How does IM Properties determine the fair market value of a property?
                  </div>
                  <span className="icon_fq trans fi-rs-arrow-small-right" />
                </div>
              </div>
              <div className="answer accordion-content">
              IM Properties can provide property valuation services to determine the fair market value of a property. This involves analyzing market trends, comparable properties, and other factors to provide an accurate estimate.
              </div>
            </div>
          </div>
        </div>
        {/*-============spacing==========-*/}
        <div className="pd_bottom_40" />
        {/*-============spacing==========-*/}
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 pd_left_30">
        <div className="image_box_only  type_three">
          <div className="left">
            <div className="image one">
              <img src="assets/images/service/im_doc.jpeg" alt="img" className="img-fluid" />
            </div>
            <div className="image two">
              <img src="assets/images/service/im_gift.jpeg" alt="img" className="img-fluid" />
            </div>
          </div>
          <div className="right">
            <div className="image three">
              <img src="assets/images/about1.webp" alt="img" className="img-fluid" />
            </div>
          </div>
        </div>
        {/*-============spacing==========-*/}
        <div className="pd_bottom_40" />
        {/*-============spacing==========-*/}
      </div>
    </div>
  </div>
  {/*-============spacing==========-*/}
  <div className="pd_bottom_50" />
  {/*-============spacing==========-*/}
</section>

  )
}

export default ServiceFaq