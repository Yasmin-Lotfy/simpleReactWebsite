import React, { Component } from 'react'
import errorPage from '../../Image/err.jpg'

export default class Notfound extends Component {
  render() {
    return (
        <>
        <div className='text-center'>
            <img src={errorPage} alt="" className='w-75'/>
        </div>
        </>
    )
  }
}
