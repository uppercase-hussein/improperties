import React from 'react'

const FactVideo = () => {
  return (
    <section className="fun-fact-video">
  <div className="d-flex flex-wrap">
    <div className="video-section w_100">
      {/*-============spacing==========-*/}
      <div className="pd_top_70 d_md_none" />
      {/*-============spacing==========-*/}
      <div className="image_video_box_only  type_one">
        <div className="image one">
          <img src="assets/images/team/improp_team.webp" alt="img" className="img-fluid" />
          <div className="video_box video-inner text-center">
            <a href="https://youtu.be/RN81h85V6D4" className="lightbox-image">
              <i className="fi-rr-play" />
            </a></div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default FactVideo