import React, { useEffect, useState } from 'react'
import './Gallery.css';
import v1 from "./Assets/covervid6.mp4"
import v2 from "./Assets/covervid15.mp4"
import CardItem from './CardItem';
function Gallery() {

    const [user, setUser] = useState(null);
    useEffect(() => {
        const u = localStorage.getItem("user")
        if (u.length > 0)
            setUser(JSON.parse(u));
    }, [])

    if (!user) return(
        <>
        <video autoPlay loop muted className="video">
             <source src={v2} type="video/mp4" />
         </video>
       <h1 className="Errt">Please Login to view This Page !</h1>
       <a className="Dash4" href="/log-in">Login</a>
       </>
      );

    return (<>
        <video autoPlay loop muted className="video">
            <source src={v1} type="video/mp4" />
        </video>
        <div className="gallery">
            <div className="gallery-text">
                Gallery
            </div>
             <div className='cards'>
                <h1>Check out these EPIC Destinations!</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem className='cards__item--1'
                                src='images/cars.jpg'
                                text='Get Mesmerised by Engineering Marvels'
                                label='Cars'
                                path='/gallery/cars'
                            />
                            <CardItem className='cards__item--2'
                                src='images/naturelogo.jpeg'
                                text='Look deep into nature'
                                label='Nature'
                                path='/gallery/nature'
                            />
                            <CardItem className='cards__item--3'
                                src='images/spacelogo.jpg'
                                text='Hey sky, take off your hat, Im on my way!'
                                label='Space'
                                path='/gallery/space'
                            />
                        </ul>
                        <ul className='cards__items'>

                            <CardItem className='cards__item--4'
                                src='images/img-4.jpg'
                                text='Experience Football on Top of the Himilayan Mountains'
                                label='Adventure'
                                path='#'
                            />
                            <CardItem className='cards__item--5'
                                src='images/img-8.jpg'
                                text='Ride through the Sahara Desert on a guided camel tour'
                                label='Adrenaline'
                                path='#'
                            />
                            <CardItem className='cards__item--3'
                                src='images/img-3.jpg'
                                text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                                label='Mystery'
                                path='#'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>

    );
}
export default Gallery;