import TestimonialSlide from './TestimonialSlide'
import client from "@/app/lib/contentful/client";

const getTestimonials = async () => {
    const entries = await client.getEntries({
      content_type: 'testimonials'
    })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

const Testimonials = async ()  => {
    let testimonials = await getTestimonials()
  return (
   <section className="testimonial-section">
  {/*-============spacing==========-*/}
  <div className="pd_top_90" />
  {/*-============spacing==========-*/}
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section_title text-center type_one">
          <h4 className="sm_title"> Testimonials</h4>
          <div className="title_whole">
            <h2 className="title"> Discover what others are saying about us</h2>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="testimonial_carousel  position-relative position_one nav_false dot_true"> */}
      {/* <div className="theme_carousel owl-theme owl-carousel" data-options="{&quot;loop&quot;: true , &quot;margin&quot;: 20, &quot;autoheight&quot;:true, &quot;lazyload&quot;:true, &quot;nav&quot;: true, &quot;dots&quot;: true, &quot;autoplay&quot;: false, &quot;autoplayTimeout&quot;: 6000,  &quot;smartSpeed&quot;: 300, &quot;responsive&quot;:{ &quot;0&quot; :{ &quot;items&quot;: &quot;1&quot; }, &quot;320&quot; :{ &quot;items&quot; : &quot;1&quot; }, &quot;500&quot; :{ &quot;items&quot; : &quot;1&quot; }, &quot;768&quot; :{ &quot;items&quot; : &quot;2&quot; } , &quot;992&quot;:{ &quot;items&quot; : &quot;3&quot; }, &quot;1200&quot;:{ &quot;items&quot; : &quot;3&quot; }}}"> */}
     <TestimonialSlide testimonials={testimonials} />
      {/* </div> */}
    {/* </div> */}
  </div>
  {/*-============spacing==========-*/}
  <div className="pd_top_70" />
  {/*-============spacing==========-*/}
</section>


  )
}

export default Testimonials