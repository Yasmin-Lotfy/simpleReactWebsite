import React, { Component } from 'react'
import './Contacts.css'

export default class Contact extends Component {
  render() {
    return (
      <>
      <section id="contact">
        <div className="container py-5 text-center">
        <h2 className='main-title text-uppercase'>Contact Us</h2>
        <div className="main-star w-50 m-auto d-flex justify-content-center align-items-center">
          <div className="left-line bg-black"></div>
          <i className="fa-solid fa-star"></i>
          <div className="right-line bg-black"></div>          
        </div>
        <div className="contact-form text-start m-auto w-75">
          <input type="text" placeholder='Name' className='rounded-0 form-control mx-auto' />
          <input type="email" placeholder='Email Address' className='rounded-0 form-control mx-auto' />
          <input type="phone" placeholder='Phone Number' className='rounded-0 form-control mx-auto' />
          <textarea type="phone" placeholder='Message' className='rounded-0 form-control mx-auto' ></textarea>
          <button className='send-btn'>Send</button>

        </div>
        </div>
      </section>
      </>
      
    )
  }
}
