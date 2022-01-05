// login portal form

import { useState } from 'react';
import './Login.css';
import v1 from "./Assets/covervid14.mp4"

function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	
	function loginUser(event) {
		event.preventDefault()
		
		fetch('http://localhost:5000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		}).then(async(response)=>{
			const data = await response.json()
			console.log(data)
			if (data.user) {
				localStorage.setItem('user', JSON.stringify(data.user))
				// alert('Login successful')
				window.location.href = '/'
			}
		})
		.then(()=>{

		})
		.catch((e)=>{
			alert('Please check your username and password');
			
		})

	//const data = await response.json()

	// 	if (data.user) {
	// 		localStorage.setItem('token', data.user)
	// 		alert('Login successful')
	// 		window.location.href = '/dashboard'
	// 	} else {
	// 		alert('Please check your username and password')
	// 	}
	 	}

	return (
		<>
		<video autoPlay loop muted className="video">
            <source src={v1} type = "video/mp4" />
        </video>
		<div className='login'>
			<h1 className='lg-text'>Login</h1>
			{/* <div className='box'>This is a rectangle!</div> */}
			<form onSubmit={loginUser}>
				<input className='Email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />
				<input className='Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				<input className='lgnbtn' type="submit" value="Login" />
				<div>
					<p className="smoltext">Don't have an account?</p>
					<a className="linkb" href='/sign-up'>Register</a>
				</div>
			</form>
			

		</div>
		</>
	);
}

export default Login;