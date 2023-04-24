"use client";
import React from "react";
import Slider from "react-slick";

const Team = () => {
  let teamSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    swipeToSlide: true,
    autoplay: true,
    fade: true,
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
    <section className="team-section">
      {/*-============spacing==========-*/}
      <div className="pd_top_80" />
      {/*-============spacing==========-*/}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title text-center type_one">
              <h4 className="sm_title"> Our Team Members</h4>
              <div className="title_whole">
                <h2 className="title"> Meet Our Amazing Team</h2>
              </div>
            </div>
          </div>
        </div>
        {/*-============spacing==========-*/}
        <div className="pd_bottom_40" />
        {/*-============spacing==========-*/}
        <div className="row hide-on-lg">
          <Slider {...teamSettings}>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="team_box type_two">
                <div className="team_box_inner">
                  <div className="contnet">
                    <h6
                      className="title_22"
                      style={{ whiteSpace: "nowrap", overflow: "hidden" }}
                    >
                      <a href="#">Marcellinus Chimezie </a>
                    </h6>
                    <p style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
                      {" "}
                      MD & CEO
                    </p>
                  </div>
                  <div className="image_box">
                    <img
                      src="assets/images/team/marcel.webp"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="team_box type_two">
                <div className="team_box_inner">
                  <div className="contnet">
                    <h6
                      className="title_22"
                      style={{ whiteSpace: "nowrap", overflow: "hidden" }}
                    >
                      <a href="#">Jesse Phil </a>
                    </h6>
                    <p style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
                      {" "}
                      Director
                    </p>
                  </div>
                  <div className="image_box">
                    <img
                      src="assets/images/team/phil.webp"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="team_box type_two">
                <div className="team_box_inner">
                  <div className="contnet">
                    <h6
                      className="title_22"
                      style={{ whiteSpace: "nowrap", overflow: "hidden" }}
                    >
                      <a href="#">Marcellinus Chimezie </a>
                    </h6>
                    <p style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
                      {" "}
                      MD & CEO
                    </p>
                  </div>
                  <div className="image_box">
                    <img
                      src="assets/images/team/marcel.webp"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="team_box type_two">
                <div className="team_box_inner">
                  <div className="contnet">
                    <h6
                      className="title_22"
                      style={{ whiteSpace: "nowrap", overflow: "hidden" }}
                    >
                      <a href="#">Marcellinus Chimezie </a>
                    </h6>
                    <p style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
                      {" "}
                      MD & CEO
                    </p>
                  </div>
                  <div className="image_box">
                    <img
                      src="assets/images/team/marcel.webp"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="row hidden-xs">
          {/* <Slider {...teamSettings}> */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="team_box type_two">
                <div className="team_box_inner">
                  <div className="contnet">
                    <h6
                      className="title_22"
                      style={{ whiteSpace: "nowrap", overflow: "hidden" }}
                    >
                      <a href="#">Marcellinus Chimezie </a>
                    </h6>
                    <p style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
                      {" "}
                      MD & CEO
                    </p>
                  </div>
                  <div className="image_box">
                    <img
                      src="assets/images/team/marcel.webp"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="team_box type_two">
                <div className="team_box_inner">
                  <div className="contnet">
                    <h6
                      className="title_22"
                      style={{ whiteSpace: "nowrap", overflow: "hidden" }}
                    >
                      <a href="#">Jesse Phil </a>
                    </h6>
                    <p style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
                      {" "}
                      Director
                    </p>
                  </div>
                  <div className="image_box">
                    <img
                      src="assets/images/team/phil.webp"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="team_box type_two">
                <div className="team_box_inner">
                  <div className="contnet">
                    <h6
                      className="title_22"
                      style={{ whiteSpace: "nowrap", overflow: "hidden" }}
                    >
                      <a href="#">Marcellinus Chimezie </a>
                    </h6>
                    <p style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
                      {" "}
                      MD & CEO
                    </p>
                  </div>
                  <div className="image_box">
                    <img
                      src="assets/images/team/marcel.webp"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="team_box type_two">
                <div className="team_box_inner">
                  <div className="contnet">
                    <h6
                      className="title_22"
                      style={{ whiteSpace: "nowrap", overflow: "hidden" }}
                    >
                      <a href="#">Marcellinus Chimezie </a>
                    </h6>
                    <p style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
                      {" "}
                      MD & CEO
                    </p>
                  </div>
                  <div className="image_box">
                    <img
                      src="assets/images/team/marcel.webp"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          {/* </Slider> */}
        </div>
      </div>
      {/*-============spacing==========-*/}
      <div className="pd_bottom_80" />
      {/*-============spacing==========-*/}
    </section>
  );
};

export default Team;
