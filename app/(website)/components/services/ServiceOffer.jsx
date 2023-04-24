import Link from 'next/link'
import React from 'react'

const ServiceOffer = () => {
  return (
    <section className="service-section">
  {/*-============spacing==========-*/}
  <div className="pd_top_80" />
  {/*-============spacing==========-*/}
  <div className="container">
    <div className="row align-items-end">
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="section_title type_one">
          <h4 className="sm_title"> What We Offer</h4>
          <div className="title_whole">
            <h2 className="title">Your One-Stop Real Estate Solution</h2>
          </div>
        </div>
        {/*-============spacing==========-*/}
        <div className="mr_bottom_15" />
        {/*-============spacing==========-*/}
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="position-relative">
          <p>We pride ourselves on being a leading player in the real estate industry. We are dedicated to providing our clients with top-notch land sales, property management, and development services that are tailored to meet their unique needs.</p>
        </div>
        {/*-============spacing==========-*/}
        <div className="mr_bottom_20" />
        {/*-============spacing==========-*/}
      </div>
    </div>
    {/*-============spacing==========-*/}
    <div className="pd_bottom_25" />
    {/*-============spacing==========-*/}
    <div className="service_post position-relative  ajax_service_enabled ">
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div className="service_box type_two hover_1_get">
          <Link href="/services#land-sale" className="img_bx">
              <div className="image trans hover_1">
                <img src="assets/images/service/service_land.jpg" className="img-fluid" alt="service-image" />
                <div className="oh ho_1" />
                <div className="oh ho_2" />
                <div className="oh ho_3" />
                <div className="oh ho_4" />
              </div>
            </Link>
            <div className="content_box trans">
            
              <div className="steps trans">1</div>
              <h4 className="title_24 trans">
                <Link href="/services#land-sale">
                 Land Sale
                </Link>
              </h4>
              <p className="trans">
              Looking to invest in land? Our team has extensive...
              </p>
              <Link href="/services#land-sale" className="rd_more">
                Read More <i className="fi-rr-arrow-small-right" />
              </Link>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div className="service_box type_two hover_1_get">
          <Link href="/services#property-development" className="img_bx">
              <div className="image trans hover_1">
                <img src="assets/images/service/service_dev.jpg" className="img-fluid" alt="service-image" />
                <div className="oh ho_1" />
                <div className="oh ho_2" />
                <div className="oh ho_3" />
                <div className="oh ho_4" />
              </div>
            </Link>
            <div className="content_box trans">
            
              <div className="steps trans">2</div>
              <h4 className="title_24 trans">
                <Link href="/services#property-development">
                 Property Development
                </Link>
              </h4>
              <p className="trans">
              We have a proven track record of successful development projects…
              </p>
              <Link href="/services#property-development" className="rd_more">
                Read More <i className="fi-rr-arrow-small-right" />
              </Link>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div className="service_box type_two hover_1_get">
          <Link href="/services#property-management" className="img_bx">
              <div className="image trans hover_1">
                <img src="assets/images/service/service_mgt.jpg" className="img-fluid" alt="service-image" />
                <div className="oh ho_1" />
                <div className="oh ho_2" />
                <div className="oh ho_3" />
                <div className="oh ho_4" />
              </div>
            </Link>
            <div className="content_box trans">
            
              <div className="steps trans">3</div>
              <h4 className="title_24 trans">
                <Link href="/services#property-management">
                 Property Management
                </Link>
              </h4>
              <p className="trans">
              Owning a property is a major investment. That's why we offer…
              </p>
              <Link href="/services#property-management" className="rd_more">
                Read More <i className="fi-rr-arrow-small-right" />
              </Link>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div className="service_box type_two hover_1_get">
          <Link href="/services#building-construction" className="img_bx">
              <div className="image trans hover_1">
                <img src="assets/images/service/service_build.jpg" className="img-fluid" alt="service-image" />
                <div className="oh ho_1" />
                <div className="oh ho_2" />
                <div className="oh ho_3" />
                <div className="oh ho_4" />
              </div>
            </Link>
            <div className="content_box trans">
            
              <div className="steps trans">4</div>
              <h4 className="title_24 trans">
                <Link href="/services#building-construction">
                 Building Construction
                </Link>
              </h4>
              <p className="trans">
              Looking to invest in land? Our team has extensive...
              </p>
              <Link href="/services#building-construction" className="rd_more">
                Read More <i className="fi-rr-arrow-small-right" />
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  {/*-============spacing==========-*/}
  <div className="pd_bottom_60" />
  {/*-============spacing==========-*/}
</section>

  )
}

export default ServiceOffer