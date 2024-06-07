import React from 'react'
import { useNavigate } from "react-router-dom"
import { FaStar, FaStarHalfStroke } from "react-icons/fa6"

const Book = ({ book }) => {
	const navigate = useNavigate()
	return (
		<div onClick={() => navigate(`/book_details/${book._id}`)} key={book._id} className="best_div group">
			<img className="best_img group-hover:rounded-t-md" src={book.photo} alt="" />
			<div className="flex flex-col space-y-.5 px-2">
				<p className="text-sm md:text-lg font-normal md:font-medium text-gray-700 truncate">{book?.title.length > 19 ? book.title?.slice(0, 19)+ '...' : book.title}</p>
				<p className="text-sm md:text-lg font-light text-gray-500 truncate">{!book.author ? "J. R Rain" : book.author.length > 18 ? book.author.slice(0, 18)+ '...' : book.author}</p>
				<span className="flex items-center hidden lg:flex">
					<FaStar className="best_icons" />
					<FaStar className="best_icons" />
					<FaStar className="best_icons" />
					<FaStar className="best_icons" />
					<FaStarHalfStroke className="text-sm text-red-500" />
				</span>
				<span className="flex items-center justify-between">
					<p className="text-sm md:text-lg text-gray-700">(120 Review)</p>
					<p className="text-sm md:text-lg lg:font-bold text-red-500">Ksh. {book.price}</p>
				</span>
			</div>
		</div>
	)
}

export default Book