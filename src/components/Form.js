// the form to accept the username password and email
import React from "react";
import {useState} from 'react';
import axios from 'axios'
import v1 from "./Assets/covervid12.mp4"
import "./Form.css"

function Form()
{ // might not be right (is this compelete ?)
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [genre,setGenre]=useState('');
    const [user, setUser] = useState({});
    // frontend and backend communication
    async function registerUSer(event)
    {   
        event.preventDefault() //to stop it from resetting on refresh
        // link to the register page ??? u mean sign in  ??
        //console.log({email: email, password, password, name: name})
        console.log("Posting...");
        const response=await axios.post("http://localhost:5000/signup", {email: email, password: password, name: name , genre: genre})
        
        setUser(response.data.user);
        console.log(response.data.user);
    } 
    return(
        <>
        <video autoPlay loop muted className="video">
            <source src={v1} type = "video/mp4" />
        </video>
        <div className='register'>
            <h1 className='lg-text1'>Register</h1>
            <form onSubmit={registerUSer}>
                <input className='Email1'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    type="text"
                    placeholder="Name"
                />
                <br/>
                <input className='Password1'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                />
                <br/>
                <input className='Password1'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                />
                <br/>
                <input className='Password1'
                    value={genre}
                    onChange={(e)=>setGenre(e.target.value)}
                    type="text"
                    placeholder="Your Favourite genre..."
                />
                <input className='lgnbtn1' type="submit" value="Register/Sign Up" onClick={registerUSer}/>
                <div>
					<p className="smoltext1">Don't have an account?</p>
					<a className="linkb1" href='/log-in'>Login</a>
				</div>   
            </form>     
        </div>
        </>
    )
}
export default Form;