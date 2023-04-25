import Link from 'next/link'
import React from 'react'

const SingleProperty = ({property}) => {
    let { name, location, slug } = property.fields
    let image = property.fields.image?.fields.file.url
  return (
    <div className="portfolio-wrapper col-xl-4 col-lg-4 col-md-6 col-sm-6 portfolio_category-life portfolio_category-medical">
    <div className="portfolio_box type_one hover_1_get">
      <div className="image_box hover_1">
        <img src={image} className="img-fluid" alt="img" />
        <Link href={`/property?title=${slug}&ref=${property.sys.id}`} data-fancybox="gallery" className="zm_btn trans" >
          <span className="fi-rs-cursor-plus zoom_icon" />
        </Link>
        <div className="oh ho_1" />
        <div className="oh ho_2" />
        <div className="oh ho_3" />
        <div className="oh ho_4" />
      </div>
      <div className="content_box">
        <div className="content_box_in  trans">
          <h2 className="title_22">
          <Link href={`/property?title=${slug}&ref=${property.sys.id}`} rel="bookmark">{name}</Link>
          </h2>
          <p> {location}</p>
          <Link href={`/property?title=${slug}&ref=${property.sys.id}`} className="lnk trans">
            <svg className="trans" width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 7.75H16M16 7.75L9.25 1M16 7.75L9.25 14.5" stroke="#008BF9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SingleProperty