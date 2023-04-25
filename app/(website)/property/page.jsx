import client from '@/app/lib/contentful/client'
import { displayAmount } from '@/app/utils/helpers'

const SingleProperty = async ({searchParams}) => {
    const {ref} = searchParams
    let property = await client.getEntry(ref)
    let { name, location, features, image, price, instalment3, instalment6, instalment12  } = property.fields
    image = image?.fields.file.url
  return (
    <section className="portfolio-dtail-section">
  {/*-============spacing==========-*/}
  <div className="pd_top_90" />
  {/*-============spacing==========-*/}
  <div className="container">
    <div className="row">
      <div className="col-lg-8 col-md-12 pd_right_30">
        <div className="image_box">
          <img src={image} className="img-fluid w_100" alt="img" />
        </div>
        {/*-============spacing==========-*/}
        <div className="pd_bottom_30" />
        {/*-============spacing==========-*/}
        <div className="section_title medium type_one">
          <div className="title_whole">
            <h2 className="title"> {name}</h2>
          </div>
          <div className="pd_bottom_15" />
          <h5>{location}</h5>
          <p> {features}</p>
        </div>
        {/*-============spacing==========-*/}
        <div className="pd_bottom_30" />
        {/*-============spacing==========-*/}
        <div className="pd_bottom_30" />
        {/*-============spacing==========-*/}
      </div>
      <div className="col-lg-4 col-md-12">
        <div className="section_title medium type_one">
          <div className="title_whole">
            <h2 className="title"> Pricing</h2>
          </div>
          <p> This property cost <h3 style={{display:"inline"}}>{displayAmount(price)}</h3></p>
          {
                instalment3 && <p>We also offer installment payment option for this property. See schedule below</p>
          }
        </div>
        {/*-============spacing==========-*/}
        <div className="pd_bottom_30" />
        {/*-============spacing==========-*/}
        <div className="position-relative rounded_radius_10 pd_left_30 pd_right_30 md_pd_left_15 md_pd_right_15 pd_top_30 pd_bottom_20 bg_light_1 overflow-hidden bg_op_1" style={{backgroundImage: 'url(assets/images/bg-2-2.png)!important'}}>
          <ul className="list_box list">
            <li>
              <div className="d-flex align-items-center justify-content-spacebetween flex-wrap">
                <span className="w_50">3 months</span>
                <strong className="w_50"> {displayAmount(instalment3)} </strong>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center justify-content-spacebetween flex-wrap">
                <span className="w_50">6 months</span>
                <strong className="w_50"> {displayAmount(instalment6)}</strong>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center justify-content-spacebetween flex-wrap">
                <span className="w_50">12 months</span>
                <strong className="w_50"> {displayAmount(instalment12)} </strong>
              </div>
            </li>
          </ul>
        </div>
        {/*-============spacing==========-*/}
        <div className="pd_bottom_30" />
        {/*-============spacing==========-*/}
        <div className="section_title type_one">
          <p> Please note that terms and conditions apply when paying with installment payments. These terms and conditions will be clearly outlined in your payment agreement, and we encourage you to review them carefully before making a purchase. If you have any questions or concerns about our installment payment options, please don't hesitate to contact us for more information</p>
        </div>
        {/*-============spacing==========-*/}
        <div className="pd_bottom_30" />
        {/*-============spacing==========-*/}
      </div>
    </div>
  </div>
  {/*-============spacing==========-*/}
  <div className="pd_bottom_60" />
  {/*-============spacing==========-*/}
</section>

  )
}

export default SingleProperty