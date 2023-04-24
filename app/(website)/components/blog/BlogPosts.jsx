import React from 'react'
import BlogItem from './BlogItem'

const BlogPosts = () => {
  return (
   <section className="blog_post position-relative">
  {/*-============spacing==========-*/}
  <div className="pd_top_90" />
  {/*-============spacing==========-*/}
  <div className="container">
    <div className="row">
      <BlogItem/>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <div className="pagination-area">
          <nav>
            {/* <ul className="pagination justify-content-center">
              <li className="active page-item">
                <a href="blog-details.html" className="page-link">1</a>
              </li>
              <li className=" page-item">
                <a href="blog-details.html" className="page-link">2</a>
              </li>
              <li className="next_link page-item">
                <a href="blog-details.html">
                  <i className="fa fa-arrow-right" />
                </a>
              </li>
            </ul> */}
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/*-============spacing==========-*/}
  <div className="pd_bottom_70" />
  {/*-============spacing==========-*/}
</section>

  )
}

export default BlogPosts