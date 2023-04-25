'use client'
import Link from 'next/link';
import Slider from 'react-slick'

const SinglePropertySec = ({properties}) => {
    let propertySettings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        swipeToSlide: true,
        autoplay: true,
        // fade: true,
        swipe: true,
        swipeToSlide: true,
        infinite: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
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
      };
  return (
    <div className="row">
    <Slider {...propertySettings}>
        {
            properties.map((property, index) => {
                let {name, location, image, slug} = property.fields
               if(index < 10){return (
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="team_box type_two">
                        <div className="team_box_inner">
                            <div className="contnet">
                            <h6 className="title_22" style={{whiteSpace: "nowrap", overflow: "hidden"}}>
                                <Link href={`/property?title=${slug}&ref=${property.sys.id}`}>{name}</Link>
                            </h6>
                            <p style={{whiteSpace: "nowrap", overflow: "hidden"}}> {location}</p>
                            </div>
                            <div className="image_box">
                            <Link href={`/property?title=${slug}&ref=${property.sys.id}`}><img src={image?.fields.file.url} alt="img" className="img-fluid" /></Link>
                            </div>
                        </div>
                        </div>
                    </div>
                )}
            })
        }
    </Slider>
  </div>
  )
}

export default SinglePropertySec