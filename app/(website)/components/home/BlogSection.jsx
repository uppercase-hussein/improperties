import React from 'react'
import client from '@/app/lib/contentful/client'
import ResponsiveBlogSlider from './ResponsiveBlogSlider'

const getBlogPosts = async () => {
  const entries = await client.getEntries({
    content_type: 'posts'
  })
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}


const BlogSection = async () => {
  let posts = await getBlogPosts()
  return (
    <section className="blog-section">
  {/*-============spacing==========-*/}
  <div className="pd_top_90" />
  {/*-============spacing==========-*/}
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section_title text-center type_one">
          <h4 className="sm_title"> Latest News &amp; Blog</h4>
          <div className="title_whole">
            <h2 className="title"> Read Our Latest Articles</h2>
          </div>
        </div>
        {/*-============spacing==========-*/}
        <div className="pd_bottom_40" />
        {/*-============spacing==========-*/}
      </div>
    </div>
    <section className="blog_post position-relative   ajax_posts_enabled ">
      <div className="row ajaxcontainer">
        <ResponsiveBlogSlider posts={posts}/>
      </div>
    </section>
  </div>
  {/*-============spacing==========-*/}
  <div className="pd_top_70" />
  {/*-============spacing==========-*/}
</section>

  )
}

export default BlogSection