import React from 'react';
import v1 from "./Assets/covervid8.mp4"
import "./Upload.css"

const Title = () => {
  return (
    <>
   <video autoPlay loop muted className="video">
    <source src={v1} type = "video/mp4" />
    </video>
    
    <div className="title">
      <h2 className='header'>Uploads</h2>
      <p className='line'>Upload your pictures here to showcase your photography skills !</p>
      <br></br>
    </div>
    </>
  );
}

export default Title;

