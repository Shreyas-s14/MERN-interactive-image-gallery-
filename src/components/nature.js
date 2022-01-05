import React from 'react'
import CardItem from './CardItem';
// import './Gallery.css';
import i1 from './Assets/nature1.jpg';
import i2 from './Assets/nature2.jpg';
import i3 from './Assets/nature3.jpg';
import i4 from './Assets/nature4.jpg';
import i5 from './Assets/nature5.jpg';
import i6 from './Assets/nature6.jpg';
import i7 from './Assets/nature7.jpg';
import i8 from './Assets/nature8.jpg';
import i9 from './Assets/nature9.jpg';
import i10 from './Assets/nature10.jpg';
import i11 from './Assets/nature11.jpg';
import i12 from './Assets/nature12.jpg';
import i13 from './Assets/nature13.jpg';
import i14 from './Assets/nature14.jpg';
import i15 from './Assets/nature15.jpg';
import './cars.css';
// var car1 = require('./Assets/car1.jpg')


function nature() {
    return (
      <>
             <div className="gallery">
             <div className="gallery-text1">
                Nature
            </div>  
             <div className='cards1'>
                
                <div className='cards__container1'>
                    <div className='cards__wrapper1'>
                        <ul className='cards__items1'>
                            <CardItem className='cards__item--1'
                                src={i1}
                                text='Bugatti Veyron '
                                label='Speedster'
                                path='#'
                            />
                            <CardItem className='cards__item--2'
                                src={i2}
                                text='Lamborghini'
                                label='Style and speed'
                                path='#'
                            />
                            <CardItem className='cards__item--3'
                                src={i3}
                                text='Ferrari'
                                label='Elegant and black'
                                path='#'
                            />
                        </ul>
                        <ul className='cards__items1'>

                            <CardItem className='cards__item--4'
                                src={i4}
                                text='Auston Martin'
                                label='Pure glamor on display here'
                                path='#'
                            />
                            <CardItem className='cards__item--5'
                                src={i5}
                                text='Ride through the Sahara Desert on a guided camel tour'
                                label='Adrenaline'
                                path='#'
                            />
                            <CardItem className='cards__item--3'
                                src={i6}
                                text='Mercedes on a speedy trail'
                                label='Yellow horsepower'
                                path='#'
                            />
                        </ul>
                         
                          <ul className='cards__items1'>

                            <CardItem className='cards__item--4'
                                src={i7}
                                text='Incredible design!!!'
                                label='Futuristic'
                                path='#'
                            />
                            <CardItem className='cards__item--5'
                                src={i8}
                                text='Another version of one of the worlds fastest'
                                label='Speed'
                                path='#'
                            />
                            <CardItem className='cards__item--3'
                                src={i9}
                                text='BMW on flex mode'
                                label='British power!!!'
                                path='#'
                            />
                        </ul> 
                         <ul className='cards__items1'>

                        <CardItem className='cards__item--4'
                            src={i10}
                            text='Red Trails!!'
                            label='Futuristic'
                            path='#'
                        />
                        <CardItem className='cards__item--5'
                            src={i11}
                            text='Classic ferrari'
                            label='Elegance'
                            path='#'
                        />
                        <CardItem className='cards__item--3'
                            src={i12}
                            text='BMn flex mode'
                            label='British power!!!'
                            path='#'
                        />
                        </ul> 

                        <ul className='cards__items1'>

                        <CardItem className='cards__item--4'
                            src={i13}
                            text='I am speed!'
                            label='MCqueen'
                            path='#'
                        />
                        <CardItem className='cards__item--5'
                            src={i14}
                            text='Mustang vibes'
                            label='Oldschool'
                            path='#'
                        />
                        <CardItem className='cards__item--3'
                            src={i15}
                            text='The cooler ferrari'
                            label='La espanol speed'
                            path='#'
                        />
                        </ul> 
                    </div>
                </div>
            </div>
            <a className="linkb2" href='/gallery/space'>Space</a>
        <a className="linkb3" href='/gallery/cars'>Cars</a>
        </div>
          
          
      </>
    );
}

export default nature;