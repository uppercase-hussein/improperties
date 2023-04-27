import moment from 'moment'
import Link from 'next/link'
import React from 'react'

const HomeBlogItem =  ({post}) => {
  let coverImage = post.fields.coverImage?.fields.file.url
  return (
    // <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
    <div className="col-xl-11 col-lg-11 col-md-12 col-sm-12">
        <div className="blog_box type_two trans hover_1_get">
          <div className="blog_inner trans">
            <div className="image_box trans hover_1">
            <Link href={`/post?title=${post.fields.slug}&ref=${post.sys.id}`}>
                <img src={coverImage} className="img-fluid" alt="img" />
              </Link>
              <div className="oh ho_1" />
              <div className="oh ho_2" />
              <div className="oh ho_3" />
              <div className="oh ho_4" />
              <span className="date_tm">
                <i className="fi-rr-calendar" />
                <time className="date published" dateTime={post.sys.createdAt}>
                  {moment(post.sys.createdAt).format("MMM Do YYYY, h:mm A")}
                  </time>
              </span>
            </div>
            <div className="content">
              <div className="d-flex authour align-items-center">
                <img src="admin-image.png" alt="gavatar" className="img-fluid" /> IM Admin
              </div>
              <h4 className="title_22">
                <Link href={`/post?title=${post.fields.slug}&ref=${post.sys.id}`}>{post.fields.title}</Link>
              </h4>
              <p className="descs"> {post.fields.excerpt}…</p>
              <div className="bottn_flex">
              <Link href={`/post?title=${post.fields.slug}&ref${post.sys.id}`}  className="rd_more">Read More <i className="fi-rr-arrow-small-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default HomeBlogItem