import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { image_1, image_2, image_3 } from "../assets/images"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux"
import { selectUser, registerSuccess, registerStart, registerFailure, registerError } from "../Redux/Slices/userSlice.js"
import { handleSubmit } from "../apiCalls.js"
import { register } from "../Redux/apiCalls"
import { toast } from 'react-toastify';
import axios from "axios"
import '../App.css'

const SignIn = () => {
	const [formData, setFormData] = useState({email: "", username: "", password: "" })
    const [toggle, setToggle] = useState(false)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	// toggle passwordview
     const togglePassword = () => {
    	setToggle(prev => !prev)
    }
    // collect form data
    const onChange = (event) => {
        setFormData(prev => ({...prev, [event.target.name]: event.target.value}))
    }
    const { username, password, email } = formData
    // submit form data
    handleSubmit(event, password, email, username, navigate, formData, dispatch, setFormData)
    // check pasword length
    const checkPassword = (password) => {
        if (password.length < 8) {
            return 'Password must be greater than 8!'
        }
    }
    const userError = useSelector(registerError)
    const { isFetching, error, errMsg } = useSelector(state => state.user)
    console.log(userError)
	return (
		<section className="bg-gray-500 grid grid-cols-12 w-full min-h-screen">
			<div className="relative col-span-7 flex-col bg-red-400 h-full">
				<div className="overay absolute top-0 left-0 z-10 w-full h-full"></div>
				<img className="h-full w-full" src="https://static.theceomagazine.net/wp-content/uploads/2023/04/21094311/books2.jpg" alt="a_random_image_of_a_random_image" />
			</div>
			<div className="sign_up_form">
				<form className="signup_form">
					<span className="flex">
						<p className="font-['Lemon'] text-xl font-semibold text-gray-800">Create account.</p>
					</span>
					{/*<div className="flex items-center w-full space-x-2 overflow-x-none bg-red-400">*/}
						<span className="input_span">
							<input onChange={onChange} className="input" placeholder='Username' value={username} name="username" type="text" />
						</span>
						{/*<span className="input_span">
							<input className="input" placeholder='Last Name' type="text" />
						</span>*/}
					{/*</div>*/}
					<span className="input_span">
						<input onChange={onChange} className="input" placeholder='Enter Email' value={email} name="email" type="email" />
					</span>
					<span className="input_span">
						<input onChange={onChange} value={password} name="password" className="input" placeholder='Enter Password' type={!toggle ? "password" : "text"} />
						{toggle ? <FaRegEyeSlash onClick={togglePassword} className="form_icon" /> : <FaRegEye onClick={togglePassword} className="form_icon" />}
					</span>
					
					<span className="flex items-center space-x-1">
						<hr className="border border-gray-600 w-full" />
						<p className="text-sm text-gray-500">or</p>
						<hr className="border border-gray-600 w-full" />
					</span>
					<div className="flex flex-col space-y-3">
						<span className="image_span">
							<img className="form_image" src={image_3} alt="a_random_image_of_a_random_image" />
							<p className="form_text">Sign In with Google</p>
						</span>
						<span className="image_span">
							<img className="form_image" src={image_2} alt="a_random_image_of_a_random_image" />
							<p className="form_text">Sign In with Facebook</p>
						</span>
						<span className="image_span">
							<img className="form_image" src={image_1} alt="a_random_image_of_a_random_image" />
							<p className="form_text">Sign In with Apple</p>
						</span>
					</div>
					{error && <p className="text-xs font-medium text-red-400">{userError}</p>}
					<button onClick={handleSubmit} type="submit" className="form_btn_2">Create Account</button>
					<div className="text-xs font-normal text-gray-700">Already have an account? <span onClick={() => navigate('/log_in')} className="text-red-400 hover:underline cursor-pointer">Log In</span></div>
				</form>
			</div>
		</section>
	)
}

export default SignIn