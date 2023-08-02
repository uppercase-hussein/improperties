import Link from 'next/link'
import React from 'react'
import client from '@/app/lib/contentful/client'

const getBlogPosts = async () => {
  const entries = await client.getEntries({
    content_type: 'posts'
  })
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}
const Footer = async () => {
  let posts = await getBlogPosts()
  return (
    <footer className="footer style_one style_five">
  <section className="md_content position-relative z_99">
    {/*-============spacing==========-*/}
    <div className="pd_top_160" />
    {/*-============spacing==========-*/}
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <div className="footer_widgets_box pd_bottom_30">
            <div className="logo_box">
              <a href="#" className="logo navbar-brand">
                <img src="assets/images/improp_white.webp" alt="Vankine" className="logo_default" />
              </a>
            </div>
            {/*-============spacing==========-*/}
            <div className="pd_bottom_35" />
            {/*-============spacing==========-*/}
            <div className="position-relative color_white">
            Your trusted real estate partner. Land sales, Property management, and Property development made easy
            </div>
            {/*-============spacing==========-*/}
            <div className="pd_bottom_25" />
            {/*-============spacing==========-*/}
            <div className="social-icons">
              <ul>
                <li>
                  <a href="https://web.facebook.com/improperties.ng" className="m_icon">
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/improperties.ng/" className="m_icon">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/2349039951233?text=I'm%20coming%20from%20your%20website" className="m_icon">
                    <i className="fab fa-whatsapp" />
                  </a>
                </li>                
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 pd_left_40">
          <div className="footer_widgets_box pd_bottom_30">
            <div className="fwidget_title">
              <h2 className="title color_white"> Quick Link </h2>
              {/*-============spacing==========-*/}
              <div className="pd_bottom_25" />
              {/*-============spacing==========-*/}
            </div>
            <div className="position-relative">
              <ul className="list_box list">
                <li>
                  <div className="d-flex align-items-center">
                    <div className="icon trans">
                      <i className="fi-rr-arrow-small-right color_white" />
                    </div>
                    <Link className="links color_white" href="/">
                      Home
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center">
                    <div className="icon trans">
                      <i className="fi-rr-arrow-small-right color_white" />
                    </div>
                    <Link className="links color_white" href="/about-us">
                      About Us
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center">
                    <div className="icon trans">
                      <i className="fi-rr-arrow-small-right color_white" />
                    </div>
                    <Link className="links color_white" href="/services">
                      What we do
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center">
                    <div className="icon trans">
                      <i className="fi-rr-arrow-small-right color_white" />
                    </div>
                    <Link className="links color_white" href="/our-properties">
                      Properties
                    </Link>
                  </div>
                </li>
                {/* <li>
                  <div className="d-flex align-items-center">
                    <div className="icon trans">
                      <i className="fi-rr-arrow-small-right color_white" />
                    </div>
                    <Link className="links color_white" href="/blog">
                      Blog
                    </Link>
                  </div>
                </li> */}
                <li>
                  <div className="d-flex align-items-center">
                    <div className="icon trans">
                      <i className="fi-rr-arrow-small-right color_white" />
                    </div>
                    <Link className="links color_white" href="/our-team">
                      Our Team
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center">
                    <div className="icon trans">
                      <i className="fi-rr-arrow-small-right color_white" />
                    </div>
                    <Link className="links color_white" href="/contact-us">
                      Contact Us
                    </Link>
                  </div>
                </li>
               
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="footer_widgets_box pd_bottom_30">
            <div className="fwidget_title">
              <h2 className="title color_white"> Our Blog</h2>
              {/*-============spacing==========-*/}
              <div className="pd_bottom_25" />
              {/*-============spacing==========-*/}
            </div>
            <section className="post_foo_box">
                {
                  posts.map((post, index) => {
                    let {title, coverImage, slug} = post.fields
                   if(index < 3) return (
                      <div className="foo_post_content">
                <Link href={`/post?title=${slug}&ref=${post.sys.id}`} className="image_box trans" >
                  <img className="img-fluid trans" src={coverImage?.fields.file.url} alt="blog" />
                  <svg className="trans" width={55} height={55} viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={28} cy={27} r={20} fill="white" />
                    <circle cx="27.5" cy="27.5" r="27.5" fill="white" fillOpacity="0.1" />
                    <path d="M22 33.25L33.25 22M33.25 22H24.8125M33.25 22V30.4375" stroke="#2D947A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <div className="content">
                  <h4 className="title_18">
                  <Link href={`/post?title=${slug}&ref=${post.sys.id}`} className="color_white">
                    {title}
                    </Link>
                  </h4>
                  {/* <p className="color_white"> Bradley R Grady </p> */}
                </div>
              </div>
                      )
                        })
                }
            </section>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <div className="footer_widgets_box pd_bottom_30">
            <div className="fwidget_title">
              <h2 className="title color_white"> Photo Gallery </h2>
              {/*-============spacing==========-*/}
              <div className="pd_bottom_25" />
              {/*-============spacing==========-*/}
            </div>
            <div className="g_box d-flex" style={{maxHeight:300, overflow:"scroll", overflowX:"hidden"}}>
            <div className="embedsocial-hashtag" data-ref="a513a828dcc46276a6dea5b6d1eff2f92a13fe26"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*-============spacing==========-*/}
    <div className="pd_bottom_40" />
    {/*-============spacing==========-*/}
  </section>
  <section className="mottom_content  position-relative z_99">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="position-relative">
            <ul className="list_box linline">
              <li>
                <div className="d-flex align-items-center">
                  <div className="icon trans">
                    <img src="assets/images/shield.svg" className="img-fluid" alt="img" />
                  </div>
                  <a className="links color_white" href="#">
                    Copyright {new Date().getFullYear()}, IM Intercontinental Ltd. RC: 1761229 All Rights Reserved
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 text-md-end">
          <div className="position-relative">
            <ul className="list_box linline">
              <li>
                <div className="d-flex align-items-center">
                  <div className="icon trans">
                    <i className="fi-rr-arrow-small-right" />
                  </div>
                  <Link className="links color_white" href="/privacy-policy">
                    Privacy policy
                  </Link>
                </div>
              </li>
              <li>
                <div className="d-flex align-items-center">
                  <div className="icon trans">
                    <i className="fi-rr-arrow-small-right" />
                  </div>
                  <Link className="links color_white" href="/terms-of-service">
                    Terms of service
                  </Link>
                </div>
              </li>
            
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*-============spacing==========-*/}
  <div className="pd_bottom_40" />
  {/*-============spacing==========-*/}
</footer>

  )
}

export default Footer