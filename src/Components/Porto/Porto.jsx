import React, { Component } from 'react'
import './Porto.css'
import $ from 'jquery';
import image_1 from "../../Image/cabin.png"
import image_2 from "../../Image/cake.png"
import image_3 from "../../Image/circus.png"
import image_4 from "../../Image/game.png"
import image_5 from "../../Image/safe.png"
import image_6 from "../../Image/submarine.png"

export default class Porto extends Component {
  
  showImageOverlay= (e)=>{
    let parent = e.currentTarget
    let titleOfImage =  parent.children[0].firstChild.getAttribute("title-data")
    // console.log(titleOfImage)
    let imageSrc = parent.children[0].firstChild.getAttribute("src");
    let lightBox = document.querySelector(".lightBox")
    lightBox.classList.replace("d-none","d-flex")
    lightBox.children[0].children[1].innerHTML = titleOfImage;
    lightBox.children[0].children[3].setAttribute("src",imageSrc);

  }
//function to close lightbox when click on close
  closeLightBox= (e)=>{
    let lightBox = document.querySelector(".lightBox")
    lightBox.classList.replace("d-flex","d-none")
 }

  render() {
    //function to close lightbox when click outside the box
    $(document).click(function(e){
      if(e.target.classList.contains("lightBox") === true){
            let lightBox = document.querySelector(".lightBox")
              lightBox.classList.replace("d-flex","d-none");
      }
    })

    //function to close lightbox when press ESC
    $(document).keydown(function(e){
      if(e.key === "Escape"){
            let lightBox = document.querySelector(".lightBox")
              lightBox.classList.replace("d-flex","d-none");
      }
    })

    

    return (
      <>
      <div  className="lightBox m-auto d-none position-fixed start-0 end-0 top-0 bottom-0 justify-content-end align-items-center ">
        <div className="pb-2 rounded-2 position-relative lightBox-caption m-auto text-center">
        <div onClick={(e)=> this.closeLightBox(e)} className='closeBtn px-3 position-absolute top-0 end-0'><i class="fa-solid fa-xmark"></i></div>

        <h2 className='mt-3 main-title text-uppercase'>Portfofolio</h2>
        <div className="main-star w-50 m-auto d-flex pt-1 justify-content-center align-items-center">
          <div className="left-line bg-black"></div>
          <i className="fa-solid fa-star"></i>
          <div className="right-line bg-black"></div>          
        </div>

          <img  src={image_2} className=" overImg"/>
          <div className="text-light w-75 text-center m-auto">
          <p className='mb-0 py-2 px-4 text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
          </div>
          <button onClick={(e)=> this.closeLightBox(e)}  className='my-3 border-0 rounded-2 py-2 px-3 close-btn'><i class="pe-2 fa-solid fa-x"></i>Close Window</button>
        </div>

      </div>
      <section id="porto" className='porto text-center my-5'>
        <div className="container">
        <h2 className='main-title text-uppercase'>Portfofolio</h2>
        <div className="main-star w-50 m-auto d-flex justify-content-center align-items-center">
          <div className="left-line bg-black"></div>
          <i className="fa-solid fa-star"></i>
          <div className="right-line bg-black"></div>          
        </div>
        <div className="row gy-5 gx-5">
          <div className="col-lg-4 col-md-6" onClick={(e)=>this.showImageOverlay(e)}>
            <div className="grid-items position-relative overflow-auto">
              <img title-data="LOG CABIN" src={image_1} alt="" className='w-100' />
              <div className="overlay position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center">
                <div className="overlay-items">
                <i className="text-white fa-solid fa-plus"></i>
                </div>
              </div>

            </div>

          </div>
          <div className="col-lg-4 col-md-6" onClick={(e)=>this.showImageOverlay(e)}>
            <div className="grid-items position-relative overflow-auto">
              <img title-data="TASTY CAKE" src={image_2} alt="" className='w-100' />
              <div className="overlay position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center">
                <div className="overlay-items">
                <i className="text-white fa-solid fa-plus"></i>
                </div>
              </div>

            </div>

          </div>
          <div className="col-lg-4 col-md-6" onClick={(e)=>this.showImageOverlay(e)}>
            <div className="grid-items position-relative overflow-auto">
              <img title-data="CIRCUS TENT" src={image_3} alt="" className='w-100' />
              <div className="overlay position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center">
                <div className="overlay-items">
                <i className="text-white fa-solid fa-plus"></i>
                </div>
              </div>

            </div>

          </div>
          <div className="col-lg-4 col-md-6" onClick={(e)=>this.showImageOverlay(e)}>
            <div className="grid-items position-relative overflow-auto">
              <img title-data="CONTROLLER" src={image_4} alt="" className='w-100' />
              <div className="overlay position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center">
                <div className="overlay-items">
                <i className="text-white fa-solid fa-plus"></i>
                </div>
              </div>

            </div>

          </div>
          <div className="col-lg-4 col-md-6" onClick={(e)=>this.showImageOverlay(e)}>
            <div className="grid-items position-relative overflow-auto">
              <img title-data="LOCKED SAFE" src={image_5} alt="" className='w-100' />
              <div className="overlay position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center">
                <div className="overlay-items">
                <i className="text-white fa-solid fa-plus"></i>
                </div>
              </div>

            </div>

          </div>
          <div className="col-lg-4 col-md-6" onClick={(e)=>this.showImageOverlay(e)}>
            <div className="grid-items position-relative overflow-auto">
              <img title-data="SUBMARINE" src={image_6} alt="" className='w-100' />
              <div className="overlay position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center">
                <div className="overlay-items">
                <i className="text-white fa-solid fa-plus"></i>
                </div>
              </div>

            </div>

          </div>
        </div>

        </div>
      </section>

      
      </>
    )
  }
}
