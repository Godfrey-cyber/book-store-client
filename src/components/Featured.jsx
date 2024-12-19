import React, { useState, useEffect } from 'react'
import { FaStar, FaStarHalfStroke } from "react-icons/fa6"
import { getBooks } from "../apiCalls.js"
import axios from 'axios'

const Featured = () => {
	const [books, setBooks] = useState([])
	// const 
	useEffect(() => {
		getBooks(setBooks)
	}, [])
	return (
		<section className="h-auto lg:h-[66vh] w-4/5 mx-auto my-24">
			<div className="grid grid-cols-12 gap-4 lg:gap-6 h-4/5">
				<div className="featured_1">
					{books && books.slice(0, 1).map(book => (
						<div key={book._id} className="featured">
							<div className="featured_div">
								<img className="w-full h-full bg-cover" src={book.photo} alt="" />
							</div>
							<div className="flex flex-col space-y-4 ">
								<p className="text-lg lg:text-3xl font-semibold text-white">{book.title}</p>
								<p className="text-sm font-light text-white">By {book.author}</p>
								<p className="text-2xl font-semibold text-white">Ksh. {book.price}</p>
								<div className="flex space-x-3 items-center">
									<span className="flex items-center">
										<FaStar className="text-sm text-white" />
										<FaStar className="text-sm text-white" />
										<FaStar className="text-sm text-white" />
										<FaStar className="text-sm text-white" />
										<FaStarHalfStroke className="text-sm text-white" />
									</span>
									<p className="text-xs font-light text-white">(120 Review)</p>
								</div>
								<button className="featured_btn">View More</button>
							</div>
						</div>
					))}
				</div>
				<div className="col-span-12 lg:col-span-4 bg-contain p-2">
					<img className="w-full h-full bg-cover" src="https://enterprisersproject.com/sites/default/files/2020_book_list.png" alt="" />
				</div>
			</div>
		</section>
	)
}

export default Featured