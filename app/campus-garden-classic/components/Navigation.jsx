import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <div className="navigation ">
  <div className="container">
    <header className="navbar" id="top" role="banner">
      <div className="navbar-header">
        <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <div className="navbar-brand nav" id="brand">
          <Link href="#"><img src="assets/images/improperties_logo.png" alt="brand" /></Link>
        </div>
      </div>
    </header>{/* /.navbar */}
  </div>{/* /.container */}
</div>


  )
}

export default Navigation
