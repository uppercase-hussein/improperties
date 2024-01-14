import React from 'react'

const DetailsBoxes = () => {
  return (
    <section id="boxes" className="block background-color-grey-light">
  <div className="container">
    <div className="box" data-scroll-reveal="enter top and move 30px">
      <div className="image width-50 pull-left">
        <img src="assets/img/box-image-01.jpg" className="top-50" alt />
      </div>
      <div className="description width-50">
        <div className="description-wrapper">
          <header><h3>Plenty of Room For Everyone <br /> Even For Your Car</h3></header>
          <p>We understand your privacy. Every person should have his own space where he can live his own private live.
            Even the smallest apartments are big and space enough to feel comfortable.
            And we think that your car deserves the same in the garage.</p>
          <a href="#home" className="btn roll">Be the first to know!</a>
        </div>
      </div>{/* /.description */}
    </div>{/* /.box */}
    <div className="box" data-scroll-reveal="enter bottom and move 30px">
      <div className="description width-30 pull-left">
        <div className="description-wrapper top-180">
          <header><h3>Spectacular Views</h3></header>
          <p>Start your day by enjoying the unforgettable view from your home.
            Open the window and smell the fresh air of the pure nature.</p>
          <a href="#home" className="btn roll">Be the first to know!</a>
        </div>
      </div>{/* /.description */}
      <div className="image width-70">
        <img src="assets/img/box-image-02.jpg" alt />
      </div>
    </div>{/* /.box */}
    <section className="video" data-scroll-reveal="enter left and move 30px">
      <iframe src="http://player.vimeo.com/video/34741214?title=0&byline=0&portrait=0&color=ffffff" width={500} height={281} frameBorder={0} webkitallowfullscreen mozallowfullscreen allowFullScreen />
    </section>
    <div className="box with-empty-space" data-scroll-reveal="enter right and move 30px">
      <div className="width-40 pull-left">
        <div className="empty-space" />
      </div>
      <div className="description width-60">
        <div className="description-wrapper">
          <header><h3>Plenty of Room For Everyone <br /> Even For Your Car</h3></header>
          <p>We understand your privacy. Every person should have his own space where he can live his own private live.
            Even the smallest apartments are big and space enough to feel comfortable.
            And we think that your car deserves the same in the garage.</p>
          <a href="#home" className="btn roll">Be the first to know!</a>
        </div>
      </div>{/* /.description */}
    </div>{/* /.box */}
  </div>{/* /.container */}
</section>

  )
}

export default DetailsBoxes
