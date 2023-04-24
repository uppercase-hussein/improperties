import Link from 'next/link'
import React from 'react'

const AboutDetails = () => {
  return (
    <section className="about-section position-relative">
  {/*-============spacing==========-*/}
  <div className="pd_top_90" />
  {/*-============spacing==========-*/}
  <div className="auto-container">
    <div className="row align-items-start">
    <div className="col-lg-6 col-md-12">
        <div className="image_box_only type_seven">
          <div className="icon_box_only type_four inline_box trans">
            <div className="icon">
              {/* <img src="assets/images/icon-image-1.png" alt="img" className="img-fluid" /> */}
            </div>
            <div className="content">
              <div className="title_18">
                <a href="#">
                  Land Sale
                </a>
              </div>
            </div>
            <a className="link" href="#">
              <svg width={30} height={32} viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx={15} cy={17} r={15} fill="var(--color-set-two-three-6)">
                </circle>
                <g clipPath="url(#clip0_117_28468)">
                  <path d="M15.0757 24.3888C15.8841 25.207 17.6847 24.9358 17.8785 23.6492C19.0847 15.6614 25.1202 8.92269 29.6876 2.57279C30.954 0.813155 28.042 -0.858436 26.7921 0.88025C22.6184 6.68227 17.3578 12.7875 15.2998 19.828C12.948 17.4244 10.5867 15.0437 7.94892 12.9317C6.27842 11.5936 3.88886 13.951 5.57736 15.3031C9.01404 18.0559 11.984 21.2659 15.0757 24.3888Z" fill="var(--color-set-two-three-5)" />
                </g>
                <defs>
                  <clipPath id="clip0_117_28468">
                    <rect width={25} height={25} fill="white" transform="translate(5)" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
          <div className="icon_box_only type_four position_two trans">
            <div className="icon">
              {/* <img src="assets/images/icon-image-2.png" alt="img" className="img-fluid" /> */}
            </div>
            <div className="content">
              <div className="title_18">
                <a href="#">
                  Property Management
                </a>
              </div>
            </div>
            <a className="link" href="#">
              <svg width={30} height={32} viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx={15} cy={17} r={15} fill="var(--color-set-two-three-6)">
                </circle>
                <g clipPath="url(#clip0_117_28462)">
                  <path d="M15.0757 24.3888C15.8841 25.207 17.6847 24.9358 17.8785 23.6492C19.0847 15.6614 25.1202 8.92269 29.6876 2.57279C30.954 0.813155 28.042 -0.858436 26.7921 0.88025C22.6184 6.68227 17.3578 12.7875 15.2998 19.828C12.948 17.4244 10.5867 15.0437 7.94892 12.9317C6.27842 11.5936 3.88886 13.951 5.57736 15.3031C9.01404 18.0559 11.984 21.2659 15.0757 24.3888Z" fill="var(--color-set-two-three-5)" />
                </g>
                <defs>
                  <clipPath id="clip0_117_28462">
                    <rect width={25} height={25} fill="white" transform="translate(5)" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
          <div className="fun_facts type_two" style={{backgroundColor:"#f90a0ce6"}}>
            <h4>
              <span className="count">5</span>
              <small>
                + </small></h4>
            <h6 className="title_no_a_26">Years Of
              Experience</h6>
          </div>
          <div className="m_image">
            <img src="assets/images/team/improp_team.webp" alt="img" className="img-fluid" />
          </div>
        </div>
      </div>
    
      <div className="col-lg-6 col-md-6 col-sm-12 pd_left_30">
        <div className="section_title type_one">
          <h4 className="sm_title">  We are IM Properties </h4>
          <div className="title_whole">
            <h2 className="title"> Your Comprehensive Real Estate Partner </h2>
          </div>
        </div>
        {/*-============spacing==========-*/}
        <div className="mr_bottom_20" />
        {/*-============spacing==========-*/}
        <div className="fom_tab_box custom_tabs only_tab_content">
          <ul className="nav nav-tabs links trans" role="tablist">
            <li className="nav-item">
              <button className="nav-link active" id="aboutuss-tabtab" data-bs-toggle="tab" data-bs-target="#aboutuss" type="button" role="tab" aria-controls="aboutuss" aria-selected="false">
                Core Values <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </li>
           
            <li className="nav-item">
              <button className="nav-link " id="vision-tabtab" data-bs-toggle="tab" data-bs-target="#vision" type="button" role="tab" aria-controls="vision" aria-selected="false">
                Vision <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </li>

            <li className="nav-item">
              <button className="nav-link " id="mission-tabtab" data-bs-toggle="tab" data-bs-target="#mission" type="button" role="tab" aria-controls="mission" aria-selected="false">
                Mission <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </li>
          </ul>
          <div className="s_tabs_content tab-content">
            <div className="tab-pane  active" id="aboutuss" role="tabpanel" aria-labelledby="aboutuss-tabtab">
              <div className="tab_content_box">
                <div className="content">
                We are committed to providing you with the highest level of service and professionalism so, whether you're looking to buy, sell, or develop property, we have the expertise and experience to guide you every step of the way. </div>
                <div className="d-flex">
                  <ul>
                    <li>
                      <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12.5" cy="12.5" r="12.5" fill="#36DB9F">
                        </circle>
                        <g>
                          <path d="M11.8363 18.7066C12.2244 19.0994 13.0886 18.9692 13.1817 18.3516C13.7607 14.5175 16.6577 11.2829 18.85 8.23494C19.4579 7.39031 18.0602 6.58795 17.4602 7.42252C15.4568 10.2075 12.9317 13.138 11.9439 16.5174C10.815 15.3637 9.68161 14.221 8.41548 13.2072C7.61364 12.5649 6.46665 13.6965 7.27713 14.3455C8.92674 15.6668 10.3523 17.2076 11.8363 18.7066Z" fill="white" />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={12} height={12} fill="white" transform="translate(7 7)" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span> Integrity
                      </span>
                    </li>
                    <li>
                      <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12.5" cy="12.5" r="12.5" fill="#36DB9F">
                        </circle>
                        <g>
                          <path d="M11.8363 18.7066C12.2244 19.0994 13.0886 18.9692 13.1817 18.3516C13.7607 14.5175 16.6577 11.2829 18.85 8.23494C19.4579 7.39031 18.0602 6.58795 17.4602 7.42252C15.4568 10.2075 12.9317 13.138 11.9439 16.5174C10.815 15.3637 9.68161 14.221 8.41548 13.2072C7.61364 12.5649 6.46665 13.6965 7.27713 14.3455C8.92674 15.6668 10.3523 17.2076 11.8363 18.7066Z" fill="white" />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={12} height={12} fill="white" transform="translate(7 7)" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span> Innovation
                      </span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12.5" cy="12.5" r="12.5" fill="#36DB9F">
                        </circle>
                        <g>
                          <path d="M11.8363 18.7066C12.2244 19.0994 13.0886 18.9692 13.1817 18.3516C13.7607 14.5175 16.6577 11.2829 18.85 8.23494C19.4579 7.39031 18.0602 6.58795 17.4602 7.42252C15.4568 10.2075 12.9317 13.138 11.9439 16.5174C10.815 15.3637 9.68161 14.221 8.41548 13.2072C7.61364 12.5649 6.46665 13.6965 7.27713 14.3455C8.92674 15.6668 10.3523 17.2076 11.8363 18.7066Z" fill="white" />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={12} height={12} fill="white" transform="translate(7 7)" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span> Client-centricity</span>
                    </li>
                    <li>
                      <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12.5" cy="12.5" r="12.5" fill="#36DB9F">
                        </circle>
                        <g>
                          <path d="M11.8363 18.7066C12.2244 19.0994 13.0886 18.9692 13.1817 18.3516C13.7607 14.5175 16.6577 11.2829 18.85 8.23494C19.4579 7.39031 18.0602 6.58795 17.4602 7.42252C15.4568 10.2075 12.9317 13.138 11.9439 16.5174C10.815 15.3637 9.68161 14.221 8.41548 13.2072C7.61364 12.5649 6.46665 13.6965 7.27713 14.3455C8.92674 15.6668 10.3523 17.2076 11.8363 18.7066Z" fill="white" />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={12} height={12} fill="white" transform="translate(7 7)" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span> Affordability </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
           
            <div className="tab-pane  " id="vision" role="tabpanel" aria-labelledby="vision-tabtab">
              <div className="tab_content_box">
                <div className="content">
                To be the no.1 real estate company in sub-sahara Africa and the world.</div>
                <div className="d-flex">
                  <ul>
                    <li>
                      <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12.5" cy="12.5" r="12.5" fill="#36DB9F">
                        </circle>
                        <g>
                          <path d="M11.8363 18.7066C12.2244 19.0994 13.0886 18.9692 13.1817 18.3516C13.7607 14.5175 16.6577 11.2829 18.85 8.23494C19.4579 7.39031 18.0602 6.58795 17.4602 7.42252C15.4568 10.2075 12.9317 13.138 11.9439 16.5174C10.815 15.3637 9.68161 14.221 8.41548 13.2072C7.61364 12.5649 6.46665 13.6965 7.27713 14.3455C8.92674 15.6668 10.3523 17.2076 11.8363 18.7066Z" fill="white" />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={12} height={12} fill="white" transform="translate(7 7)" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span> Integrity
                      </span>
                    </li>
                    <li>
                      <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12.5" cy="12.5" r="12.5" fill="#36DB9F">
                        </circle>
                        <g>
                          <path d="M11.8363 18.7066C12.2244 19.0994 13.0886 18.9692 13.1817 18.3516C13.7607 14.5175 16.6577 11.2829 18.85 8.23494C19.4579 7.39031 18.0602 6.58795 17.4602 7.42252C15.4568 10.2075 12.9317 13.138 11.9439 16.5174C10.815 15.3637 9.68161 14.221 8.41548 13.2072C7.61364 12.5649 6.46665 13.6965 7.27713 14.3455C8.92674 15.6668 10.3523 17.2076 11.8363 18.7066Z" fill="white" />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={12} height={12} fill="white" transform="translate(7 7)" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span> Innovation
                      </span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12.5" cy="12.5" r="12.5" fill="#36DB9F">
                        </circle>
                        <g>
                          <path d="M11.8363 18.7066C12.2244 19.0994 13.0886 18.9692 13.1817 18.3516C13.7607 14.5175 16.6577 11.2829 18.85 8.23494C19.4579 7.39031 18.0602 6.58795 17.4602 7.42252C15.4568 10.2075 12.9317 13.138 11.9439 16.5174C10.815 15.3637 9.68161 14.221 8.41548 13.2072C7.61364 12.5649 6.46665 13.6965 7.27713 14.3455C8.92674 15.6668 10.3523 17.2076 11.8363 18.7066Z" fill="white" />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={12} height={12} fill="white" transform="translate(7 7)" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span> Client-centricity</span>
                    </li>
                    <li>
                      <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12.5" cy="12.5" r="12.5" fill="#36DB9F">
                        </circle>
                        <g>
                          <path d="M11.8363 18.7066C12.2244 19.0994 13.0886 18.9692 13.1817 18.3516C13.7607 14.5175 16.6577 11.2829 18.85 8.23494C19.4579 7.39031 18.0602 6.58795 17.4602 7.42252C15.4568 10.2075 12.9317 13.138 11.9439 16.5174C10.815 15.3637 9.68161 14.221 8.41548 13.2072C7.61364 12.5649 6.46665 13.6965 7.27713 14.3455C8.92674 15.6668 10.3523 17.2076 11.8363 18.7066Z" fill="white" />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={12} height={12} fill="white" transform="translate(7 7)" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span> Affordability </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="tab-pane  " id="mission" role="tabpanel" aria-labelledby="mission-tabtab">
              <div className="tab_content_box">
                <div className="content">
                To bring the real estate dream of many into reality with our total commitment to affordable housing and multi payment plans and support. </div>
                <div className="d-flex">
                  <ul>
                    <li>
                      <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12.5" cy="12.5" r="12.5" fill="#36DB9F">
                        </circle>
                        <g>
                          <path d="M11.8363 18.7066C12.2244 19.0994 13.0886 18.9692 13.1817 18.3516C13.7607 14.5175 16.6577 11.2829 18.85 8.23494C19.4579 7.39031 18.0602 6.58795 17.4602 7.42252C15.4568 10.2075 12.9317 13.138 11.9439 16.5174C10.815 15.3637 9.68161 14.221 8.41548 13.2072C7.61364 12.5649 6.46665 13.6965 7.27713 14.3455C8.92674 15.6668 10.3523 17.2076 11.8363 18.7066Z" fill="white" />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={12} height={12} fill="white" transform="translate(7 7)" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span> Integrity
                      </span>
                    </li>
                    <li>
                      <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12.5" cy="12.5" r="12.5" fill="#36DB9F">
                        </circle>
                        <g>
                          <path d="M11.8363 18.7066C12.2244 19.0994 13.0886 18.9692 13.1817 18.3516C13.7607 14.5175 16.6577 11.2829 18.85 8.23494C19.4579 7.39031 18.0602 6.58795 17.4602 7.42252C15.4568 10.2075 12.9317 13.138 11.9439 16.5174C10.815 15.3637 9.68161 14.221 8.41548 13.2072C7.61364 12.5649 6.46665 13.6965 7.27713 14.3455C8.92674 15.6668 10.3523 17.2076 11.8363 18.7066Z" fill="white" />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={12} height={12} fill="white" transform="translate(7 7)" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span> Innovation
                      </span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12.5" cy="12.5" r="12.5" fill="#36DB9F">
                        </circle>
                        <g>
                          <path d="M11.8363 18.7066C12.2244 19.0994 13.0886 18.9692 13.1817 18.3516C13.7607 14.5175 16.6577 11.2829 18.85 8.23494C19.4579 7.39031 18.0602 6.58795 17.4602 7.42252C15.4568 10.2075 12.9317 13.138 11.9439 16.5174C10.815 15.3637 9.68161 14.221 8.41548 13.2072C7.61364 12.5649 6.46665 13.6965 7.27713 14.3455C8.92674 15.6668 10.3523 17.2076 11.8363 18.7066Z" fill="white" />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={12} height={12} fill="white" transform="translate(7 7)" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span> Client-centricity</span>
                    </li>
                    <li>
                      <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12.5" cy="12.5" r="12.5" fill="#36DB9F">
                        </circle>
                        <g>
                          <path d="M11.8363 18.7066C12.2244 19.0994 13.0886 18.9692 13.1817 18.3516C13.7607 14.5175 16.6577 11.2829 18.85 8.23494C19.4579 7.39031 18.0602 6.58795 17.4602 7.42252C15.4568 10.2075 12.9317 13.138 11.9439 16.5174C10.815 15.3637 9.68161 14.221 8.41548 13.2072C7.61364 12.5649 6.46665 13.6965 7.27713 14.3455C8.92674 15.6668 10.3523 17.2076 11.8363 18.7066Z" fill="white" />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={12} height={12} fill="white" transform="translate(7 7)" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span> Affordability </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*-============spacing==========-*/}
        <div className="pd_bottom_30" />
        {/*-============spacing==========-*/}
        <div className="theme_btn_all">
          <Link href="/contact-us" className="theme_btn">
            Send us a message
            <span> <i className=" fi-rr-envelope" /></span>
          </Link>
        </div>
        {/*-============spacing==========-*/}
        <div className="pd_bottom_70" />
        {/*-============spacing==========-*/}
      </div>
    </div>
  </div>
  <div className="ab_img_right_bottom z_minus_1">
    <img src="assets/images/bg-2.png" className="img-fluid" alt="img" />
  </div>
</section>
  )
}

export default AboutDetails