import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { FaStar, FaStarHalfStroke } from "react-icons/fa6"
import Book from "./Book.jsx"
import { getCategories, getBooks } from "../apiCalls.js"

const MoreBooks = () => {
	const [categories, setCategories] = useState([])
	const [books, setBooks] = useState([])
	const navigate = useNavigate()
	// const 
	useEffect(() => {
		getCategories(setCategories)
	}, [])

	// const 
	useEffect(() => {
		getBooks(setBooks)
	}, [])
	return (
		<section className="flex flex-col w-full gap-y-6 bg-white h-auto py-4">
			<div className="w-4/5 mx-auto items-center h-full">
				<div className="flex-col lg:flex justify-between bg-red-transparent items-center w-full py-4">
					<span className="">
						<p className="text-2xl font-semibold text-gray-700 text-center ">Latest Published items</p>
					</span>
					<div className="space-y-2 lg:flex flex-wrap space-x-2 items-center h-40 lg:h-auto">
						{categories.length > 0 && categories.slice(0, 5).map(category => (
							<span key={category._id} className="category_span">{category.title}</span>
						))}
					</div>
				</div>
			</div>
			<div className="best_book">
				{books && books.slice(6, 16).map(book => (
					<Book key={book._id} book={book} />
				))}
			</div>
		</section>
	)
}

export default MoreBooks

//https://www.youtube.com/watch?v=SsKmqm12QP4
// https://www.youtube.com/watch?v=HwCqsOis894
// https://www.youtube.com/watch?v=-gPNG3qf-ts
// https://www.youtube.com/watch?v=sttpxZVrPLQ