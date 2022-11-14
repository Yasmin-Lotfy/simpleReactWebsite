import'./Navbar.css'
import React, { Component } from 'react'
import $ from 'jquery';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {


  clickNavBar=(e)=>{
    $(window).scrollTop(0)

    $(".nav-item").removeClass("checked")

    let targetLi = e.currentTarget;
    console.log($(".nav-item"))
    targetLi.classList.add("checked")
    $(".nav-link").css({color:"#fff"})
        $(".navbar-collapse").removeClass("show");
   
  }

  clickLogo=(e)=>{
    $(".nav-item").removeClass("checked")
    $(window).scrollTop(0)
 
  }
  
  render() { 
    
    return (<>
      <nav id="navBar-main" className="fixed-top navbar navbar-expand-lg  ">
      <div className="container">
        <Link onClick={(e)=> this.clickLogo(e)}  className="navbar-brand text-uppercase fs-3 py-3 fw-bolder text-white" to="">Start React</Link>
        <button className="navbar-toggler p-2 fs-6 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          MENU <i className=" fa-solid fa-bars"></i>  
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto align-items-center">
            <li onClick={(e)=> this.clickNavBar(e)} className="nav-item " >
              <Link className="nav-link " aria-current="page" to="porto">Portofolio</Link>
            </li>
            <li onClick={(e)=> this.clickNavBar(e)} className="nav-item">
              <Link className="nav-link " aria-current="page" to="about">About</Link>
            </li>
            <li onClick={(e)=> this.clickNavBar(e)} className="nav-item">
              <Link className="nav-link " aria-current="page" to="contact">Contact</Link>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
    
      
      </>
      )
  }
}

