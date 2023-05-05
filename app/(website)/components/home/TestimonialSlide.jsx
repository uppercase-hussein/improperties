'use client'
import Slider from 'react-slick'

const TestimonialSlide = ({testimonials}) => {
    let settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        swipeToSlide: true,
        autoplay:true,
        swipe:true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      }

  return (<>
    <Slider {...settings}>
        {
            testimonials.map((testimonial, index) => {
                return (
                    <div className="testimonial_box type_two ">
                    <div className="auth d-flex align-items-center clearfix">
                      <div className="image_box">
                        <img src={testimonial.fields.image.fields.file.url} alt="img" className="img-fluid" style={{objectPosition:"top"}} />
                      </div>
                      <div className="cont">
                        <h4 className="title_no_a_24">{testimonial.fields.name}</h4>
                        <p>{testimonial.fields.title}</p>
                      </div>
                    </div>
                    <div className="title_no_a_22 t_comment">
                      <sup>“</sup>{testimonial.fields.comment}
                      <sub>“</sub></div>
                    <div className="box">
                      {/* <h6>Jacob Leonardo</h6> */}
                      <p>
                        {Array.from({length: testimonial.fields.rating}, (v, i) => (
                            <i key={i} className="fa fa-star fill" />
                        ))}
                        {Array.from({length: 5 - testimonial.fields.rating}, (v, i) => (
                            <i key={i} className="fa fa-star empty" />
                        ))}
                        </p>
                    </div>
                  </div>
                )
            }
            )
        }
       
        </Slider>
        </>
  )
}

export default TestimonialSlide