import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";

const Caroussels = () => {
  return (
    <div >
      <div className="carousels">
        <Carousel className='carousels-content'>
          <div  className="carousels-img">
              <img src="https://cdn.pixabay.com/photo/2022/05/18/12/04/flower-7205106_1280.jpg" />
              <p className="legend">Legend 1</p>
          </div>
          <div className="carousels-img">
              <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_1280.jpg"   />
              <p className="legend">Legend 2</p>
          </div>
          <div className="carousels-img" >
              <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"  />
              <p className="legend">Legend 3</p>
          </div>
          <div className="carousels-img" >
              <img src="https://cdn.pixabay.com/photo/2014/12/16/22/25/sunset-570881_1280.jpg"  />
              <p className="legend">Legend 3</p>
          </div>
          <div className="carousels-img" >
              <img src="https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_1280.jpg"  />
              <p className="legend">Legend 3</p>
          </div>
         
        </Carousel>
        <div className='home-text'>
        Bienvenue dans chroflix, postez et lisez des <br />
        chroniques autant que vous voulez
        </div>
      </div>
    </div>
  )
}

export default Caroussels