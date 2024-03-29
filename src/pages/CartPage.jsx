import React, { useState, useEffect} from 'react'
import SmallHeader from "../components/SmallHeader"
// import {} from '../assets/images'
import { FaRegHeart } from "react-icons/fa";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import LargeHeader from "../components/LargeHeader"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { addBook, items, totalCartCount, selectTotal, removeFromCart, deleteAll, increment, cartItems, decrement, getCartCount, getTotal } from '../Redux/Slices/cartSlice'

const CartPage = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const books = useSelector(items)
	const cartTotal = useSelector(totalCartCount)
	const total = useSelector(selectTotal)
	const itemsCount = useSelector(cartItems)
	const [count, setCount] = useState(0)

	const handleQty = () => {
		dispatch(getTotal())
		dispatch(getCartCount())
	}
	// increment book
	const bookIncrement = () => {
		setCount(count + 1)
		dispatch(increment({id: book._id, count }))
	}
	//decrement book
	const decrementBook = () => {
		if (count >= 1) {
			setCount(count - 1)
		}
		dispatch(decrement({id: book._id, count }))
	}

	// let cartIndex = books.findIndex(bookItem => bookItem._id === action.payload.id) <-- ignore this
	
	console.log(books)
	return (
		<section className="w-full h-[100vh]">
			<SmallHeader />
			<LargeHeader />
			<main className="cart_page_main">
				<div className="cart_page_div">
					<p className="cartpage_div">You have ({(books.length)}) books in your cart</p>
					{books.length === 0 ?
					<div className="cartpage_div_2">
                        <span className="h-44 w-44">
                            <img src="https://cdn-icons-png.flaticon.com/128/9841/9841570.png" alt="" width={25} height={15} className="w-full h-full object-contain" />
                        </span>
                        
                        <p className="text-sm font-normal text-gray-800 text-center">Already have an account? <span onClick={() => navigate("/register")} className="cartpage_p">Login</span> to see items in your cart</p>
                        <button onClick={() => navigate("/")} className="cartpage_btn">Start Shopping now</button>
                    </div> : books?.map((book, id) => (
                		
						<div key={book._id} className="book_class">
							<div className="grid grid-cols-12 gap-x-4">
								<div className="col-span-4 h-44 w-32">
									<img onClick={() => navigate(`/book_details/${book._id}`)} className="h-full w-full bg-contain" src={book.photo} alt={book.title} />
								</div>
								<div className="book_card">
									<p className="book_title">{book.title}</p>
									<p className="text-lg font-light text-red-400 slashed-zero">KSH: {book.price * book.count}</p>
								</div>
							</div>
							{/* +/- buttons, remove & like */}
							<div className="control_div">
								<div className="control_btn">
									<button disabled={book.count <= 1} onClick={() => count >= 2 && setCount(count - 1)} onClick={() => dispatch(decrement({id: book._id, count }))} className="cartpage_btn_2">-</button>
									<span className="items-center flex w-12">
										<p className="text-sm text-gray-500 mx-auto">{ book.count }</p>
									</span>
									<button onClick={() => setCount(count + 1)} onClick={() => dispatch(increment({id: book._id, count }))} className="cartpage_btn_3">+</button>
								</div>
								<div className="flex space-x-3 items-center">
									<FaRegHeart className="heart_icon" />
									<span onClick={() => dispatch(removeFromCart({ id: book._id }))} className="cartpage_x">
		                            	<RxCross2 className="h-4 lg:h-6 w-4 lg:w-6 text-white" />
		                        	</span>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="amount_details">
					<div className="flex-col space-y-4 bg-white w-full p-2 rounded-md">
						<span className="flex justify-between items-center">
							<p className="text-lg font-normal text-gray-700 slashed-zero">Subtotal:</p>
							<p className="total_price">KSH. {total}</p>
						</span>
						<span className="flex justify-between items-center">
							<p className="text-lg font-normal text-gray-700 slashed-zero">Delivery</p>
							<p className="text-xs font-light text-gray-500 slashed-zero">Depends on location</p>
						</span>
					</div>
					<button className="price_btn">CHECKOUT</button>
					<p className="amount_text">Got a <span className="amount_text_2">promo or a discount code</span> we've got you covered</p>
				</div>
			</main>
		</section>
	)
}

export default CartPage