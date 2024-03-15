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
			<main className="grid grid-cols-12 gap-8 w-full px-3 md:px-1 md:w-4/5 mx-auto">
				<div className="col-span-12 lg:col-span-8 h-fit my-6 lg:my-12 space-y-3 lg:space-y-6">
					<p className="cartpage_div">You have ({(books.length)}) books in your cart</p>
					{books.length === 0 ?
					<div className="cartpage_div_2">
                        <span className="h-44 w-44">
                            <img src="https://cdn-icons-png.flaticon.com/128/9841/9841570.png" alt="" width={25} height={15} className="w-full h-full object-contain" />
                        </span>
                        
                        <p className="text-sm font-normal text-gray-800 text-center">Already have an account? <span onClick={() => navigate("/register")} className="cartpage_p">Login</span> to see items in your cart</p>
                        <button onClick={() => navigate("/")} className="cartpage_btn">Start Shopping now</button>
                    </div> : books?.map((book, id) => (
                		
						<div key={book._id} className="flex-col bg-red-500 space-y-3 gap-x-8 border-b border-gray-200 p-4">
							{/*<div className="flex gap-x-3 lg:gap-y-2 p-2 bg-red-400 lg:flex col-span-12 lg:col-span-10 lg:justify-between w-full">*/}
								{/*img, title & price*/}
								<div className="grid grid-cols-12 gap-x-2">
									<div className="col-span-4 h-44 w-32">
										<img onClick={() => navigate(`/book_details/${book._id}`)} className="h-full w-full bg-contain" src={book.photo} alt={book.title} />
									</div>
									<div className="flex col-span-8 flex-col content-between h-full bg-blue-400">
										<p className="text-sm line-clamp-3 font-light text-gray-700 truncate">{book.title}</p>
										<p className="text-lg font-light text-red-400 slashed-zero">KSH: {book.price * book.count}</p>
									</div>
								</div>
								{/*+/- buttons, remove & like*/}
								<div className="flex justify-between items-center">
									<div className="flex items-center border border-gray-200 rounded-md w-max">
										<button disabled={book.count <= 1} onClick={() => count >= 2 && setCount(count - 1)} onClick={() => dispatch(decrement({id: book._id, count }))} className="cartpage_btn_2">-</button>
										<span className="items-center flex w-12">
											<p className="text-sm text-gray-500 mx-auto">{ book.count }</p>
										</span>
										<button onClick={() => setCount(count + 1)} onClick={() => dispatch(increment({id: book._id, count }))} className="cartpage_btn_3">+</button>
									</div>
									<div className="flex space-x-3 items-center">
										<FaRegHeart className="text-lg text-red-400 h-4 lg:h-6 w-4 lg:w-6 cursor-pointer" />
										<span onClick={() => dispatch(removeFromCart({ id: book._id }))} className="cartpage_x">
			                            	<RxCross2 className="h-4 lg:h-6 w-4 lg:w-6 text-white" />
			                        	</span>
									</div>
								</div>

							{/*</div>	*/}
						</div>
					))}
				</div>
				<div className="col-span-12 lg:col-span-4 h-fit bg-gray-100 flex-col space-y-4 my-12 p-4">
					<div className="flex-col space-y-4 bg-white w-full p-2 rounded-md">
						<span className="flex justify-between items-center">
							<p className="text-lg font-normal text-gray-700 slashed-zero">Subtotal:</p>
							<p className="text-sm font-['Lemon'] font-normal text-gray-700 slashed-zero">KSH. {total}</p>
						</span>
						<span className="flex justify-between items-center">
							<p className="text-lg font-normal text-gray-700 slashed-zero">Delivery</p>
							<p className="text-xs font-light text-gray-500 slashed-zero">Depends on location</p>
						</span>
					</div>
					<button className="bg-red-400 rounded-sm p-4 w-full text-center text-white my-4 font-normal hover:bg-red-500 transition-all delay-300 ">CHECKOUT</button>
					<p className="text-sm font-normal text-gray-600 slashed-zero">Got a <span className="cursor-pointer text-sm font-normal text-red-400">promo or a discount code</span> we've got you covered</p>
				</div>
			</main>
		</section>
	)
}

export default CartPage