import React, { Component } from 'react'
import './About.css'

export default class About extends Component {
  render() {
    return (
      <>
      <section id='about' >
      <div className="container text-center">
      <h2 className='mt-3 text-white main-title text-uppercase'>ABOUT</h2>
        <div className="main-star w-50 m-auto d-flex pt-1 justify-content-center align-items-center">
          <div className="left-line "></div>
          <i className="text-white fa-solid fa-star"></i>
          <div className="right-line"></div>          
        </div>
        <div className="row text-start text-white">
          <div className="col-md-4 offset-md-2">
            <p className='lead'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          <div className="col-md-4">
            <p className='lead'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
          </div>
        </div>
      </div>
      </section>
      
      </>
    )
  }
}
