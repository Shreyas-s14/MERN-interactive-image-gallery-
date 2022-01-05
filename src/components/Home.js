import React, {useState, useEffect} from 'react'
import './Home.css'
import v1 from "./Assets/covervid7.mp4"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook, //??? faFacebook??
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import i1 from "./Assets/cars17.jpg"
import i2 from "./Assets/space8.jpg"
import i3 from "./Assets/nature2.jpg"
import i4 from "./Assets/cars16.jpg"
import i5 from "./Assets/nature9.jpg"
import i6 from "./Assets/space9.jpg"
import i7 from "./Assets/cars10.jpg"
import i8 from "./Assets/nature11.jpg"
import i9 from "./Assets/nature12.jpg"
import i10 from "./Assets/cars12.jpg"
import i11 from "./Assets/space5.jpg"
import i12 from "./Assets/nature15.jpg"


function Home() {
  const [user, setUser] = useState(null);   //u got terminal access??
  useEffect(() => {
    const u = localStorage.getItem("user")
    if (u.length > 0)
      setUser(JSON.parse(u));
    }, [])

    function handleImgClick(){
      
    } 
  


  return (
    <>
      <video autoPlay loop muted className="video">
        <source src={v1} type="video/mp4" />
      </video>
      <div>
        <h1 className="main-head">PicturesInSpaceTime</h1>
        {
          user ? <h2 className='Welcome'>Welcome, {user.name}! </h2> :
          ""
        }
        <form method="get" action="#here">
          <button className="GetStarted" type="submit">Get Started</button>
        </form>


        {/* <h1 className="hero-title">
          Storing Memories </h1>
        <h1 id="here" className="hero-title-2">
          Was Never </h1>
        <h1 className="hero-title-3">
          Easier!</h1> */}
      </div>

      <div className="social-container">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className="facebook social">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
           className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className="instagram social">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
      <form method="get" action="/dash-board">
        <button className="DashBoard" type="submit">DashBoard</button>
       </form>
      {/* <div>
        <div className="text4">Here at PicturesInSpaceTime you Can Upload, See pictures in Gallery, View Dashboard and much more!! we belive that everyone can should be able to save their dearest memories with them forever. Login to get full access !!</div>
        <form method="get" action="/log-in">
          <button className="log" type="submit">Login</button>
        </form> 
        <br></br>
        <br></br>
      </div> */}
      <div>
        <p className="favpic" >Some of our favorite and featured images ! </p>
      </div>
      <div>
      <img className="upl1" onClick={handleImgClick()} src={i2} />
      <img className="upl1" onClick={handleImgClick()} src={i1} />
      <img className="upl1" onClick={handleImgClick()} src={i3} />
      <img className="upl1" onClick={handleImgClick()} src={i4} />
      <img className="upl1" onClick={handleImgClick()} src={i5} />
      <img className="upl1" onClick={handleImgClick()} src={i6} />
      <img className="upl1" onClick={handleImgClick()} src={i7} />
      <img className="upl1" onClick={handleImgClick()} src={i8} />
      <img className="upl1" onClick={handleImgClick()} src={i9} />
      <img className="upl1" onClick={handleImgClick()} src={i10} />
      <img className="upl1" onClick={handleImgClick()} src={i11} />
      <img className="upl1" onClick={handleImgClick()} src={i12} />
      </div>

      
    </>
  );

}


export default Home;