import React, { Component } from 'react'
import "./Footer.css"

export default class Footer extends Component {
  render() {
    return (
      <>
      <section  id="footer">
        <div className="container">
        <div className="row text-white text-center">
          <div className="col-md-4">
            <h3 className='fw-bolder mb-3'>LOCATION</h3>
            <p className='lead footer-cap'>2215 John Daniel Drive Clark, MO 65243</p>
          </div>
          <div className="col-md-4">
            <h3 className='fw-bolder mb-3'>AROUND THE WEB</h3>
            <div className='social icons d-flex align-items-center justify-content-center'>
              <div className="social-icon d-flex align-items-center justify-content-center">
              <i class="fa-brands fa-facebook-f "></i>
              </div>
              <div className="social-icon d-flex align-items-center justify-content-center">
              <i class="fa-brands fa-twitter"></i>
              </div>
              <div className="social-icon d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-link"></i>
              </div>
              <div className="social-icon d-flex align-items-center justify-content-center">
              <i class="fa-brands fa-dribbble"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h3 className='fw-bolder mb-3'>ABOUT FREELANCER</h3>
            <p className='lead footer-cap'>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
          </div>
        </div>
        
        </div>
        <div className="last-fotter text-center">
          <p className='mb-0 text-white'>Copyright © Your Website 2021</p>
        </div>

      </section>
      </>
    )
  }
}
