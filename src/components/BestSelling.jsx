import { useState, useEffect } from 'react'
import axios from 'axios'
import { BsCart } from "react-icons/bs"
import { useNavigate, useLocation } from 'react-router-dom'
import { MdAddShoppingCart } from "react-icons/md";
import { FaStar, FaStarHalfStroke } from "react-icons/fa6"
import { useDispatch, useSelector } from 'react-redux'
import { addBook, items, getTotal, getCartCount } from '../Redux/Slices/cartSlice.js'
import Book from "./Book.jsx"

const BestSelling = () => {
	const [books, setBooks] = useState([])
	const [cartBooks, setCartBooks] = useState({})
	const navigate = useNavigate()
	// const [product, setProduct] = useState({})
	const dispatch = useDispatch()
	const location = useLocation().pathname.split("/")[2]
	const prods = useSelector(items)
	const [quantity, setQuantity] = useState(0)
	const cartCount = useSelector(state => state.cart.totalCount)
	const cartTotal = useSelector(state => state.cart.total)
	// const
	const checkBookAvailability = (bookId) => {
		return books.findIndex(bookItem => bookItem._id === bookId)
	}
	// const availability = checkBookAvailability()

	const addBookToCart = () => {
		setCount(count + 1)
		dispatch(addBook({ ...cartBooks, count }))
		dispatch(getTotal())
		dispatch(getCartCount())
	}
	const [count, setCount] = useState(cartBooks.count || 0)

	// const handleClick = (event) => {
	// 	console.log(event.target.value)
	// }
	useEffect(() => { 
		const getBooks = async() => {
			try {
				const response = await axios.get('https://my-book-store-1oki.onrender.com/api/v1/books/getAllBooks')
				if (response.status === 200 || res.statusText === 'OK') {
					setBooks(response.data.data)
					console.log({books})
				}
			} catch(error) {
				if (error || !res.status === 200 || !res.statusText === 'OK') {
					console.log(error)
				}
			}
		}
		getBooks()
	}, [])
	return (
		<section className="flex flex-col bg-red-50">
			<p className="best_selling_title">Best Selling Books Ever</p>
			<div className="best_book">
				{books && books.slice(0, 5).map(book => (
					<Book key={book._id} book={book} />
				))}
			</div>
		</section>
	)
}

export default BestSelling

// animate-ping


//           /\
//          /\/\
//         /\/\/\
//        /\/\/\/\
// 	     /\/\/\/\/\
// 	    /\/\/\/\/\/\
// 	   /\/\/\/\/\/\/\
//    /\/\/\/\/\/\/\/\
//   /\/\/\/\/\/\/\/\/\
//  /\/\/\/\/\/\/\/\/\/\
// /\/\/\/\/\/\/\/\/\/\/\
// \/\/\/\/\/\/\/\/\/\/\/
//  \/\/\/\/\/\/\/\/\/\/
//   \/\/\/\/\/\/\/\/\/
//    \/\/\/\/\/\/\/\/
//     \/\/\/\/\/\/\/
//      \/\/\/\/\/\/
//       \/\/\/\/\/
//        \/\/\/\/
//         \/\/\/
//        	\/\/
//        	 \/



