import React from 'react'

const BlogItem = () => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
        <div className="blog_box type_two trans hover_1_get">
          <div className="blog_inner trans">
            <div className="image_box trans hover_1">
              <a href="blog-details.html">
                <img src="assets/images/blog/blog-9-min.png" className="img-fluid" alt="img" />
              </a>
              <div className="oh ho_1" />
              <div className="oh ho_2" />
              <div className="oh ho_3" />
              <div className="oh ho_4" />
              <span className="date_tm">
                <i className="fi-rr-calendar" />
                <time className="date published" dateTime="2023-01-03T10:03:20+00:00">Jan 3, 2023</time>
              </span>
            </div>
            <div className="content">
              <div className="d-flex authour align-items-center">
                <img src="assets/images/gavatar.png" alt="gavatar" className="img-fluid" /> Bradley R Grady
              </div>
              <h4 className="title_22">
                <a href="blog-details.html">Former insures only the marine perils</a>
              </h4>
              <p className="descs"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem…</p>
              <div className="bottn_flex">
                <a href="blog-details.html" className="rd_more">Read More <i className="fi-rr-arrow-small-right" />
                </a>
                {/* <small className="comments">
                  <i className="far fa-comment-dots" />
                  <a href="blog-details.html#respond" className="Comments are Closed">Post a Comment</a>
                </small> */}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default BlogItem