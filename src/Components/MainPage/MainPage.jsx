import React, { Component } from 'react'
import './MainPage.css'
import userImg from '../../Image/avataaars.svg'

export default class MainPage extends Component {
  render() {
    return (
      <>
      <div id="main" className=' text-white main-cont min-vh-100 flex-column text-center d-flex justify-content-center align-items-center'>
        <div className="item text-center">
          <img src={userImg} alt="" className='w-75' />
        </div>
        <div className="caption">
        <h1 className='py-2 m-0 main-head'>START REACT</h1>

        <div className="main-star d-flex justify-content-center align-items-center">
          <div className="left-line"></div>
        <i className="fa-solid fa-star"></i>
        <div className="right-line"></div>          
        </div>
      
          <p className='mb-0'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
      </>
    )
  }
}
