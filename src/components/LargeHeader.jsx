import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaSearch, FaChevronDown } from "react-icons/fa"
import { FaYoutube, FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa"
import { IoMdMail, IoMdTime } from "react-icons/io"
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { BsCart } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { selectTotal, totalCartCount, cartItems } from "../Redux/Slices/cartSlice.js"
import { selectUser } from "../Redux/Slices/userSlice.js"
import { selectBook } from "../Redux/Slices/bookSlice.js"
import { logoutUser, getCategories } from "../Redux/apiCalls"
import '../App.css'

const LargeHeader = () => {
	const [scrolled, setIsScrolled] = useState(false)
	const [showMenu, setShowMenu] = useState(false)
	const [categories, setCategories] = useState([])
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [searchTerm, setSearchTerm] = useState("")
	const [searchResults, setSearchResults] = useState([])
	const [loading, setLoading] = useState(true)
	// redux
	// const total = useSelector(selectTotal)
    const books = useSelector(state => state.cart.books)
    const cartTotal = useSelector(totalCartCount)
    const items = useSelector(cartItems)
    const user = useSelector(selectUser)
	const loginRoute = '/log_in'
	const logoutRoute = '/sign_up'
    // scroll
	useEffect(() => {
		const handleScroll = () => {
			window.scrollY >= 400 ? setIsScrolled(true) : setIsScrolled(false)
		} 
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}

	}, [scrolled])

	useEffect(() => {
		handleSearch(searchTerm, searchResults, setLoading)
	}, [searchTerm])

	useEffect(() => {
		getCategories(setCategories)
	}, [])
	
	const showMenubar = () => {
		setShowMenu(prevState => !prevState)
	}
	// const hideMenubar = () => {
	// 	setShowMenu(prevState => !prevState)
	// }

	const { isFetching, error, errMsg } = useSelector(state => state.user)
	
	return (
		<nav className={`navbar gap-y-4 ${scrolled ? 'scrolled' : ''} large_header`}>
			<div className="flex justify-between items-center w-full my-auto h-full lg:my-auto">
	        	<div className="flex space-x-3 items-center">
		        	<span onClick={() => navigate("/")} className="flex h-10 lg:h-8 cursor-pointer w-auto">
		        		<img className="w-full h-full" src="https://preview.colorlib.com/theme/abcbook/assets/img/logo/logo.png" />
		        	</span>
	        	</div>
	        	{/*MENU*/}
	        	{showMenu && <div className="fixed flex flex-col w-screen h-screen right-0 top-0 left-0 bottom-0 blur-class ">
	        		<div className="flex flex-col w-4/5 h-full bg-white p-2 z-50">
	        			<RxCross2 onClick={() => setShowMenu(prevState => !prevState)} className="menu_icon flex lg:hidden z-50 sticky top-6 left-6" />
	        			{/*MENU-LIST*/}
	        			<div className="flex-col space-y-.2 px-2 mt-4 w-full">
							{categories && categories.length > 0 && categories.slice(0, 5).map(category => (
							<div className="flex justify-between border-b border-gray-100 px-1 items-center bg-white hover:bg-red-200 hover:text-red-200 transition delay-200">
								<span key={category._id} className="py-1 text-lg">{category.title}</span>
								<FaChevronDown className="menu_icon" />
							</div>
						))}
							<span className="flex space-x-2 text-gray-500 text-sm items-center my-4">
								<IoMdTime className="flex media_icon hover:text-red-600" />
								<p className="flex text-sm font-light text-gray-600">Open from 10.00 am - 6.00 pm</p>	
							</span>
							<div className="flex space-x-3 items-center" >
								<FaFacebook className="hover:text-blue-600 media_icon" />
								<FaInstagram className="hover:text-yellow-600 media_icon" />
								<FaYoutube className="hover:text-red-600 media_icon" />
							</div>
							<div className="flex-col space-y-3 my-4">
								<span className="cta_media_2">
									<IoMdMail className="hover:text-red-600 media_icon" />
									<p className="flex text-sm font-light text-gray-900">reallygreat@gmail.com</p>	 
								</span>
								<span className="cta_media_2">
									<FaPhoneAlt className="hover:text-red-600 media_icon" />
									<p className="text-sm font-light text-gray-600">+254 7123 8456</p>
								</span>
							</div>
							{!user ? <button onClick={() => navigate("/sign_up")} type="button" className="signin_btn lg:hidden flex">Log In</button> : 
		        			<button onClick={() => logoutUser(dispatch)} type="button" className="signin_btn lg:hidden flex">Log Out</button>}
	        			</div>
	        		</div>
	        	</div>}
		        {/*SEARCH*/}
		        <div className="lg:flex flex-col relative hidden">
			        	<div className="search_div">
				        	<input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} type="text" className="search_input" placeholder="Search book by author, title or publisher" />
				        	<FaSearch className="search_icon" />
				        </div>
			        {/*</div>*/}
			        {searchTerm && <div className="largeheader_div">
			        	<span className="largeheader_span">
			        		<span className="flex text-sm font-normal text-gray-800">Search results for <p className="text-sm font-semibold text-gray-800 ml-2">"{searchTerm}"</p></span>
			        	</span>
			        	{!loading ? searchResults && searchResults.map(book => (
			        			<div key={book._id} onClick={() => navigate(`/book_details/${book._id}`)} className="group flex space-x-3 cursor-pointer hover:bg-gray-100">
			        				<img src={book.photo} className="h-24 w-16 rounded" alt={book.photo} />
			        				<span className="flex flex-col justify-between p-2">
			        					<p className="text-sm font-semibold text-gray-800 group-hover:text-red-400 transition-all delay-200">{book.title}</p>
			        					<p className="text-xs font-normal text-gray-700">by {book.author}</p>
			        				</span>
			        			</div>
			        		)) : <p className="">loading...</p>}
			        </div>
			    }
		        </div>
		        {/*CTA'S*/}
		        <div className="flex space-x-4 items-center">
		        	<p className="cta_p">FAQ</p>
		        	<p className="cta_p hidden md:flex">Track Order</p>
		        	<span onClick={() => navigate("/cart_page")} className="cursor-pointer">
		        		<BsCart className="cta_icon" />
		        		<span className="cta_span">{ items > 9 ? "9+" : items }</span>
		        	</span>
		        	{!user ? <button onClick={() => navigate("/sign_up")} type="button" className="signin_btn hidden lg:flex">Log In</button> : 
		        	<button onClick={() => logoutUser(dispatch)} type="button" className="signin_btn hidden lg:flex">Log Out</button>}
		        </div>
		    </div>
		{/*search bar*/}
		    <div className="flex-col relative flex lg:hidden w-full md:w-3/5 mx-auto mb-3">
		        <div className="flex space-x-2 items-center w-full justify-between">
			        <FiMenu onClick={() => setShowMenu(prevState => !prevState)} className="menu_icon flex lg:hidden" />
			        <div className="search_div">
				        <input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} type="text" className="search_input" placeholder="Search book by author, title or publisher" />
				        <FaSearch className="search_icon" />
				    </div>
			     </div>
		        {searchTerm && <div className="largeheader_div overflow-y-hidden">
		        	<span className="largeheader_span">
		        		<span className="flex text-sm font-normal text-gray-800">Search results for <p className="text-sm font-semibold text-gray-800 ml-2">"{searchTerm}"</p></span>
		        	</span>
		        	{!loading ? searchResults && searchResults.map(book => (
		        			<div key={book._id} onClick={() => navigate(`/book_details/${book._id}`)} className="group flex space-x-3 cursor-pointer hover:bg-gray-100">
		        				<img src={book.photo} className="h-24 w-16 rounded" alt="" />
		        				<span className="flex flex-col justify-between p-2">
		        					<p className="">{book.title}</p>
		        					<p className="text-xs font-normal text-gray-700">by {book.author}</p>
		        				</span>
		        			</div>
		        		)) : <p className="">loading...</p>}
		        </div>
		    }
	        </div>
        </nav>
	)
}

export default LargeHeader