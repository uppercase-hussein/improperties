import Link from 'next/link'
import React from 'react'

const Services = () => {
  return (
    <section className="service-section mr_bottom_minus_250 position-relative z_1">
  <div className="medium-container-two">
    <div className="row">
      <div className="col-lg-12">
        <div className="section_title text-center type_one">
          <h4 className="sm_title"> We have built a reputation for </h4>
          <div className="title_whole">
            <h2 className="title">Excellence and Reliability.</h2>
          </div>
        </div>
      </div>
    </div>
    {/*-============spacing==========-*/}
    <div className="pd_bottom_40" />
    {/*-============spacing==========-*/}
    <div className="service_post position-relative">
      <div className="row">
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
          <div className="service_box type_three hover_1_get">
          <Link href="/services#land-sale" className="img_bx">
              <div className="image trans hover_1">
                <img src="assets/images/service/service_land.jpg" className="img-fluid" alt="service" />
                <div className="oh ho_1" />
                <div className="oh ho_2" />
                <div className="oh ho_3" />
                <div className="oh ho_4" />
              </div>
            </Link>
            <div className="content_box trans">
              <div className="content_box_in trans">
                <div className="icon trans">
                  <i className=" flaticon-insurance-2 trans" /></div>
                <div className="steps trans">1</div>
                <h4 className="title_24 trans">
                  <Link href="/services#land-sale">Land Sale</Link></h4>
                <p className="trans">
                Looking to invest in land? Our team has extensive...</p>
                <Link href="/services#land-sale" className="rd_more">Read More<i className="fi-rr-arrow-small-right" /></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
          <div className="service_box type_three hover_1_get">
          <Link href="/services#property-development" className="img_bx">
              <div className="image trans hover_1">
                <img src="assets/images/service/service_dev.jpg" className="img-fluid" alt="service" />
                <div className="oh ho_1" />
                <div className="oh ho_2" />
                <div className="oh ho_3" />
                <div className="oh ho_4" />
              </div>
            </Link>
            <div className="content_box trans">
              <div className="content_box_in trans">
                <div className="icon trans">
                  <i className=" flaticon-travel-insurance trans" /></div>
                <div className="steps trans">2</div>
                <h4 className="title_24 trans">
                  <Link href="/services#property-development">Propery Development</Link></h4>
                <p className="trans">
                We have a proven track record of successful development projects…</p>
                <Link href="/services#property-development" className="rd_more">Read More<i className="fi-rr-arrow-small-right" /></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
          <div className="service_box type_three hover_1_get">
            <Link href="/services#property-management" className="img_bx">
              <div className="image trans hover_1">
                <img src="assets/images/service/service_mgt.jpg" className="img-fluid" alt="service" />
                <div className="oh ho_1" />
                <div className="oh ho_2" />
                <div className="oh ho_3" />
                <div className="oh ho_4" />
              </div>
            </Link>
            <div className="content_box trans">
              <div className="content_box_in trans">
                <div className="icon trans">
                <i className=" flaticon-insurance trans" /></div>
                <div className="steps trans">3</div>
                <h4 className="title_24 trans">
                  <Link href="/services#property-management">Property Management</Link></h4>
                <p className="trans">
                Owning a property is a major investment. That's why we offer…</p>
                <Link href="/services#property-management" className="rd_more">Read More<i className="fi-rr-arrow-small-right" /></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
          <div className="service_box type_three hover_1_get">
            <Link href="/services#building-construction" className="img_bx">
              <div className="image trans hover_1">
                <img src="assets/images/service/service_build.jpg" className="img-fluid" alt="service" />
                <div className="oh ho_1" />
                <div className="oh ho_2" />
                <div className="oh ho_3" />
                <div className="oh ho_4" />
              </div>
            </Link>
            <div className="content_box trans">
              <div className="content_box_in trans">
                <div className="icon trans">
                <i className=" flaticon-house trans" /></div>
                <div className="steps trans">4</div>
                <h4 className="title_24 trans">
                  <Link href="/services#building-construction">Building construction</Link></h4>
                <p className="trans">
                With years of industry experience, We have the expertise to...</p>
                <Link href="/services#building-construction" className="rd_more">Read More<i className="fi-rr-arrow-small-right" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Services