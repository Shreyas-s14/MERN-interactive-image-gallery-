// upload form to send the image link to firebase
import ProgressBar from './Progress';
import React, { useEffect, useRef, useState } from 'react';
import useStorage from '../hooks/useStorage';
import Title from './Title';
import v2 from "./Assets/covervid15.mp4"
import {Link, Navigate} from 'react-router-dom';
import "./Upload.css";

const Uploadform = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg']; // the image datatype is stored in te=he following format on the browser
    const form = useRef(null);
    const { progress, error: uploadError } = useStorage(file)

    // to get the user from the local memory of the browser
    const [user, setUser] = useState(null);

    useEffect(() => {
        const u = localStorage.getItem("user")
        console.log(u)
        if (u.length > 0)
            setUser(JSON.parse(u)); // gives true of not null since user is an object
    }, [])

    useEffect(() => {
        if (progress === 100) {
            setFile(null)
            form.current.reset();
        }

    })
    // to 
    if (!user) return(
        <>
        <video autoPlay loop muted className="video">
             <source src={v2} type="video/mp4" />
         </video>
       <h1 className="Errt">Please Login to view This Page ! </h1>
       <a className="Dash4" href="/log-in">Login</a>
       </>
      );
    const changeHandler = (e) => {
        // initially the file will be stored with a undefined name
        //console.log("change occured");
        let selected = e.target.files[0];  // assign the files if uploaded 
        //console.log(selected);
        if (selected && types.includes(selected.type)) {  // checks whether the type of the file from selected is belonging to the array "types"
            setFile(selected); // the file stored will be assigned to selected array
            setError(''); //if a corr
        }
        else {
            setFile(null); // if any other format is used
            setError("Please select an image file only(png/jpeg)");
            form.current.reset()
        }
    }

    

    return (
        <>
            <Title />
            <form ref={form}>
                <label className="Filebtn">
                    <input className='fileup' type="file" onChange={changeHandler} />
                    <span className="text">UPLOAD</span>
                </label>
                <div className="output">
                    {error && <div className="error">{error}</div>}  {/* the error is outputted inside the div with name error */}
                    {file && <div >{file.name}</div>} {/* works if file exists, hence the &&*/}
                    {file && <ProgressBar progress={progress} />}  {/*progressbar isn't needed after upload so setfile to initial*/}
                    <h1 className="hid"> BLAAAAAAAAA </h1>
                    <br></br>
                    <br></br> //
                </div>
            </form>
            {uploadError ? <p>Error uploading file</p> : <></>}
             {/* <ProgressBar/>  */}
        </>

    )
}

export default Uploadform;