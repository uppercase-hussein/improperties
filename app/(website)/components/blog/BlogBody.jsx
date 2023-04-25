
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

const BlogBody = ({post}) => {
    let mainImage = post.fields.mainImage[0]?.fields.file.url
  return (
   <section className="blog-detail-section">
  {/*-============spacing==========-*/}
  <div className="pd_top_90" />
  {/*-============spacing==========-*/}
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="blog_single_content">
          <div className="single-thumbnail">
            <img src={mainImage} className="img-fluid" alt="img" />
          </div>
          <div className="single_content_upper">
            <div className="post_single_content">
             
            {/* Post Body */}
            {documentToReactComponents(post.fields.body, {})}

            </div>
          </div>
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

export default BlogBody