import Link from 'next/link'
import React from 'react'

const Hero = ({title,imageUrl}) => {
  return (
    <section className="page_header_default pg_bg_cover alignment_center">
  <div className="bakground_cover" style={{backgroundImage: `url(${imageUrl})`}} />
  <div className="page_header_content">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="banner_title_inner">
            <div className="title">
              <span className="main_tit">{title}</span> </div>
          </div>
        </div>
        <div className="col-lg-12 vankine">
          <ul className="breadcrumb m-auto">
            <li><Link href="/">Home</Link> </li>
            <li className="active">{title}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Hero