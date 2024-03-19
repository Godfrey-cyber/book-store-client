import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaStar, FaStarHalfStroke, FaArrowRightLong } from "react-icons/fa6"
import BestSelling from "../components/BestSelling.jsx"
import axios from 'axios'
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux'
import { addBook, items, getTotal, getCartCount, cartItems, decrement, increment } from '../Redux/Slices/cartSlice'
import SmallHeader from "../components/SmallHeader"
import LargeHeader from "../components/LargeHeader"
import RatingsReview from "../components/RatingsReview"
import CommunityReviews from "../components/CommunityReviews"
import Footer from "../components/Footer"

const BookPage = () => {
	const [book, setBook] = useState({})
	const [cartBooks, setCartBooks] = useState({})
	const location = useLocation()
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const id = location.pathname.split('/')[2]
	const etp = useSelector(cartItems)
	const books = useSelector(items)
	console.log(etp)
	console.log(book)
	// handle book increase
	const handleQtyInc = () => {
		setCount(count + 1)
		dispatch(increment({id: book._id, count }))
		dispatch(getTotal())
		dispatch(getCartCount())
		toast.success("Increased quantity by 1")
	}
	// handle book decrease
	const handleQtyDec = () => {
		count >= 2 && setCount(count - 1)
		dispatch(decrement({id: book._id, count }))
		dispatch(getTotal())
		dispatch(getCartCount())
		toast.error("Decreased quantity by 1")
	}
	// add book to cart
	const addBookToCart = () => {
		setCount(count + 1)
		dispatch(addBook({ ...book, count }))
		dispatch(getTotal())
		dispatch(getCartCount())
		toast.success("Success🎊 book added to cart")
	}
	// check if current book exists in the cart books if it does, do not display the add to cart button
	const checkBookAvailability = () => {
		return books.findIndex(bookItem => bookItem._id === book._id)
	}
	const availability = checkBookAvailability()
	console.log(availability)
	// if the book exists then display the count of that particular book
	const filterBook = books.filter((filteredBook, i) => filteredBook._id === book._id)
	const { _id: bookId } = filterBook
	console.log(bookId)
	console.log(filterBook)

	const arr = Object.keys(filterBook).map(([key, val]) => filterBook[key].count)[0]
	console.log(typeof(arr))

	
	for (let i of filterBook) {
    	console.log(i.count);
	}

	const iterable = filterBook.forEach(({count, title, desc }) => console.log(desc))
	console.log(iterable)
	
	const [count, setCount] = useState(arr ? arr : 0)
	console.log(arr)
	useEffect(() => {
		const getBook = async() => {
			try {
				const response = await axios.get(`https://my-book-store-1oki.onrender.com/api/v1/books/getBook/${id}`, headers:{'Content-Type': 'application/json'})
				if (response.status === 200 || response.statusText === 'OK') {
					setBook(response.data.data)
					console.log(book)
					console.log(response.data.data)
				} else {
					console.log('error')
				}
			} catch(error) {
				if (error || !response.status === 200 || !response.statusText === 'OK') {
					console.error('❗Error fetching data❌:', error.message);
				}
			}
		}
		getBook()
	}, [id])
	return (
		<section className="w-full h-full bg-white">
			<SmallHeader />
			<LargeHeader />
			<main className="grid grid-cols-12 md:gap-x-8 gap-y-8 w-full lg:px-20 px-4 md:px-8 mx-auto h-fit my-6">
				<div className="col-span-12 lg:col-span-3 items-center justify-between flex-col space-y-4 w-full h-fit">
					<div className="h-64 w-40 mx-auto">
						<img onClick={() => navigate(`/book_details/${book._id}`)} className="h-full w-full bg-contain" src={book.photo} alt="" />
					</div>
					<span className="flex flex-col space-y-3">
						<button className="book_btn">Read Now</button>
						<button disabled={count > 1} className="btn_buy">Buy this book</button>
					</span>
				</div>

				<div className="col-span-12 lg:col-span-9 flex flex-col space-y-4 h-fit w-full my-8">
					<div className="flex-col justify-center w-full">
						<p className="text-xl md:text-2xl lg:text-4xl font-normal tex-gray-700">{book.title}</p>
						<p className="text-lg font-light tex-gray-700 cursor-pointer hover:underline">By {book.author}</p>
						<span className="flex items-center cursor-pointer">
							<FaStar className="page_icon" />
							<FaStar className="page_icon" />
							<FaStar className="page_icon" />
							<FaStar className="page_icon" />
							<FaStarHalfStroke className="text-3xl text-red-500" />
						</span>
						<span className="flex items-center space-x-3">
							<p className="text-sm font-light text-gray-700">(120 Reviews)</p>
							<p className="text-sm font-light text-red-500">1,142 Ratings</p>
						</span>
						<p className="text-sm font-light text-gray-700" dangerouslySetInnerHTML={{__html:book.desc}} />
						<span className="flex space-x-3 text-sm items-center">
							<p className="text-gray-700 font-light">Price:</p>
							<p className="text-red-500 font-light">Ksh. {book.price}</p>
						</span>
						{availability >= 0 ? <button onClick={() => navigate("/cart_page")} className="flex items-center bookpage_btn">Go to cart <FaArrowRightLong className="ml-2" /></button> : 
						<button onClick={addBookToCart} className="bookpage_btn">Add to cart</button>
						}
					</div>
				
				
					{/*qty buttons*/}
					<div className="flex items-center border border-gray-200 rounded-md w-max">
						<button disabled={arr <= 1} onClick={handleQtyDec} className="dec_btn">-</button>
						<span className="items-center flex w-12">
							<p className="text-sm text-gray-500 mx-auto">{ arr ? arr : 0 }</p>
						</span>
						<button disabled={availability <= 0} onClick={() => handleQtyInc()} className="inc_btn">+</button>
					</div>
					<span className="flex space-x-3 text-sm items-center">
						<p className="text-gray-700 font-light">First published:</p>
						<p className="text-red-500 font-light hover:underline">{book.year}</p>
					</span>
					<span className="flex space-x-3 text-sm items-center">
						<p className="text-gray-700 font-light">{book.pages}</p>
						<p className="text-red-500 font-light hover:underline">pages, Hardcover</p>
					</span>
					<div className="flex flex-col space-y-4 my-8 w-full lg:w-1/2">
						<p className="text-gray-700 font-semibold text-md">This edition</p>
						<span className="flex items-center justify-between">
							<p className="book_desc">Format</p>
							<p className="book_desc">{book.pages} pages, Hardcover</p>
						</span>
						<span className="flex items-center justify-between">
							<p className="book_desc">Published</p>
							<p className="book_desc truncate">{book.year} by {book.author}</p>
						</span>
						<span className="flex items-center justify-between">
							<p className="book_desc">ISBN</p>
							<p className="book_desc">{!book.isbn ? '9781982146863 (ISBN10: 1982146869)' : 'ISBN'+ book.isbn}</p>
						</span>
						<span className="flex items-center justify-between">
							<p className="book_desc">Language</p>
							<p className="book_desc">English</p>
						</span>
					</div>
				</div>
			</main>

			<BestSelling />
			<RatingsReview photo={book.photo}/>
			{/*community Reviews*/}
			<CommunityReviews />
			<Footer />
		</section>
	)
}

export default BookPage