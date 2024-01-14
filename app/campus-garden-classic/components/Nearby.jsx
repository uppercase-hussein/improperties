import React from 'react'

const Nearby = () => {
  return (
    <section id="features" className="block">
    <div className="container">
      <header><h3>Institutions and Facilities Nearby</h3></header>
      <div className="row">
      <div className="col-md-8 col-sm-8">
          <div className="image-carousel">
  
            <div className="image-carousel-slide">
              <div className="row">
                <div className="col-md-7 col-sm-7">
                  <a href="assets/img/box-image-02.jpg" className="image-popup">
                    <img src="ads/1/assets/img/cgc.jpg" alt />
                  </a>
                </div>
                <div className="col-md-5 col-sm-5">
                  <p>Explore the vibrant tapestry of convenience that surrounds Campus Garden Classic. From esteemed schools to essential services, this community is seamlessly connected to the heartbeat of convenience and accessibility. Immerse yourself in a neighborhood that not only offers picturesque landscapes but also ensures that every essential is just a stone's throw away. Welcome to Campus Garden Classic, where proximity meets perfection</p>
                  <a href="#" className="btn btn-lg"> Contact Us for Details <span className="fa fa-toggle" /></a>
                </div>
              </div>{/* /.row */}
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-4">
          <ul className="features-list">
          <li>Port Harcourt Int'l Airport</li>
            <li>Rivers State University</li>
            <li>Pacesetters University</li>
            <li>Stella Marris University</li>
          </ul>
        </div>
       
     
      </div>
     
    </div>{/* /.container */}
  </section>
  )
}

export default Nearby
