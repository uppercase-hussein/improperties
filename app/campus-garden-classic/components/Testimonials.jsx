import React from 'react'

const Testimonials = () => {
  return (
   <section id="testimonials" className="block" data-scroll-reveal="enter left and move 30px">
  <div className="container">
    <header className="section-title"><h3>Testimonials</h3></header>
    <div className="owl-carousel testimonials-carousel">
      <blockquote className="testimonial">
        <figure>
          <div className="image">
            <img alt src="assets/img/client-01.jpg" />
          </div>
        </figure>
        <aside className="cite">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci justo, commodo non ante molestie, rhoncus tincidunt neque.</p>
          <footer>John Doe</footer>
        </aside>
      </blockquote>
      <blockquote className="testimonial">
        <figure>
          <div className="image">
            <img alt src="assets/img/client-02.jpg" />
          </div>
        </figure>
        <aside className="cite">
          <p>Fusce risus metus, placerat in consectetur eu, porttitor a est sed sed dolor lorem cras adipiscing</p>
          <footer>Natalie Jenkins</footer>
        </aside>
      </blockquote>
    </div>{/* /.testimonials-carousel */}
  </div>{/* /.container */}
</section>

  )
}

export default Testimonials
