import "./AboutUs.css"
import v1 from "./Assets/covervid13.mp4"
import i1 from "./Assets/nature5.jpg"
import i2 from "./Assets/space6.jpg"
import i3 from "./Assets/cars17.jpg"
import React, { useEffect, useState } from 'react'
function AboutUs()
{
    //changes here
   /* async function registerUSer(event)
    {   
        //event.preventDefault() //to stop it from resetting on refresh
        // link to the register page ??? u mean sign in  ??
        //console.log({email: email, password, password, name: name})
        console.log("Posting...");
        const response=await axios.fetch("http://localhost:5000"); //fetch request
    }
    */   
        
    const [user, setUser] = useState(null);
    useEffect(() => {
        const u = localStorage.getItem("user")
        if (u.length > 0)
            setUser(JSON.parse(u));
    }, [])
    
    //let ct={globalThis,count};
    
    return(
        <>
      

          <video autoPlay loop muted className="video">
             <source src={v1} type = "video/mp4" />
          </video> 

          <div className="about-us">
            <div className="abt-text">
              About Us
            </div>
            <div className="intro">
              Hi!, welcome to PicturesInSpaceTime. here we believe that pictures are the best way to represent emotions and store all kinds of memories, We are a photo-blogging website which help people to express themself through pictures.
              Our website provides a big array of features.   
            </div>

            <div className="glry">
                <a className="head1" href="/gallery">Gallery</a><br/><br/>
                Come along and view all the pictures uploaded, an assortment of pictures present to enjoy. For now there are genres like space, nature and cars. Just click on gallery and then click on any genre you want. 
                
            </div>
            <div className="upld">
                <a className="head2" href="/upload">Upload</a><br/><br/>
                Share your memories and store them here forever. We promise your photos are safe with us. View your photos any time. And the best part, there is no limit to the number of photos uploaded!!
                <img className="imgabt2" src={i2} />
            </div>
               <img className="imgabt1" src={i1} />
               <div className="dashbda">
                <a className="head3" href="/dash-board">DashBoard</a><br/><br/>
                View your own profile and see all the pictures uploaded by you!! all the pictures are stored there and will be there forever! There is no limit to the number of images.
                 </div>
                 <img className="imgabt3" src={i3} />
                 <br/><br/><br/><br/><br/>
          </div>
          
        
        </>
    );
}
export default AboutUs;