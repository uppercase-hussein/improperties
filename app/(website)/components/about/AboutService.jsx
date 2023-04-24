import Link from 'next/link'
import React from 'react'

const AboutService = () => {
  return (
    <section className="service-section">
  {/*-============spacing==========-*/}
  <div className="pd_top_60" />
  {/*-============spacing==========-*/}
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section_title text-center type_one">
          <h4 className="sm_title">We're here to help you achieve your </h4>
          <div className="title_whole">
            <h2 className="title"> Real Estate goals</h2>
          </div>
        </div>
        {/*-============spacing==========-*/}
        <div className="pd_top_40" />
        {/*-============spacing==========-*/}
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
        <div className="icon_box_only  border_color_1 bg_light_1  type_seven">
          <div className="icon">
            <i className=" flaticon-insurance-2" /></div>
          <div className="title_24">
            <Link href="/services#land-sale">
              Land Sale </Link></div>
          <p>Looking to invest in land? Our team has extensive knowledge of the market and can help you find the perfect...</p>
          <Link className="rd_more" href="/services#land-sale">
            Read More<i className="icontb fi-rs-arrow-small-right" />
          </Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
        <div className="icon_box_only  border_color_1 bg_light_1 type_seven">
          <div className="icon">
            <i className=" flaticon-insurance-2" /></div>
          <div className="title_24">
            <Link href="/services#property-development">
              Property Development </Link></div>
          <p>We have a proven track record of successful development projects, from site analysis to design and construction...</p>
          <Link className="rd_more" href="/services#property-development">
            Read More<i className="icontb fi-rs-arrow-small-right" />
          </Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
        <div className="icon_box_only  border_color_1 bg_light_1 type_seven">
          <div className="icon">
            <i className=" flaticon-iteration" /></div>
          <div className="title_24">
            <Link href="/services#building-constrction">
            Building construction</Link></div>
          <p>With years of industry experience, We have the expertise to handle all types of building construction projects...</p>
          <Link className="rd_more" href="#">
            Read More<i className="icontb fi-rs-arrow-small-right" />
          </Link>
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

export default AboutService