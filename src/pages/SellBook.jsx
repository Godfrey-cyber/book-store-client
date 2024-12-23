import React, { useState, useEffect } from 'react'
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, Navigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { selectUser } from "../Redux/Slices/userSlice"
import { modules, formats } from "../assets/utilities"
import SmallHeader from "../components/SmallHeader.jsx"
import LargeHeader from "../components/LargeHeader.jsx"
import { useNavigate } from 'react-router-dom'
import { getCategories, createBook } from "../apiCalls.js"
import axios from "axios"

const SellBook = () => {
	const dispatch = useDispatch()
	const user = useSelector(selectUser)
	const [redirect, setRedirect] = useState(false)
	const [category, setCategory] = useState([])

	const [bookData, setBookData] = useState({ title: "", desc: "", price: "", photo: "", inStock: "", discount: "", catId: "", condition: "", author: "", pages: "", year: "", isbn: "", language: "" })
	// const [formData, setFormData] = useState({ title: "", price: "", photo: "", isbn: "", year: "", pages: "", discount: "", inStock: "", desc: "", desc: "", language: "", condition: "", author: "" })
	const [title, setTitle] = useState('')
	const [price, setPrice] = useState('')
	const [photo, setPhoto] = useState('')
	const [isbn, setIsbn] = useState('')
	const [year, setYear] = useState('')
	const [pages, setPages] = useState('')
	const [discount, setDiscount] = useState('')
	const [inStock, setInStock] = useState('')
	const [desc, setDesc] = useState('')
	const [language, setLanguage] = useState('')
	const [condition, setCondition] = useState('')
	const [author, setAuthor] = useState('')
	const [catId, setCatId] = useState('')
	const [catName, setCatName] = useState('')
	// CREATE BOOK

	const onChange = (event) => {
        setBookData(prev => ({...prev, [event.target.name]: event.target.value}))
    }
    console.log(bookData)
    
 	useEffect(() => {
 		getCategories()
 	},[])

 	const handleChange = (event) => {
 		if (event.target.name = "catId") {
    		setCatId(event.target.value)
    		console.log(catId)
    	}
 	}

	createBook(setRedirect, event, title, price, photo, isbn, year, pages, discount, inStock, desc, language, condition, author, catId, catName)


	if (redirect) {
		return <Navigate to={'/'}/>
	}
	return (
		<section className="w-full h-full bg-white">
			<SmallHeader />
			<LargeHeader />
			<div className="px-20 mt-6 grid grid-cols-12 gap-x-8">
				<div className="col-span-2 flex-col rounded-md shadow shadow-gray-300 h-fit p-2">
					<p className="sell_div active:font-['lemon']">Upload</p>
					<p className="sell_div">My books</p>
					<p className="sell_div">Settings</p>
					<p className="sell_div">Info</p>
				</div>
				<form action="" className="col-span-9 flex-col h-fit">
					<div className="flex flex-col h-full p-2">
						<div className="flex space-x-8 w-full">
							<div className="flex flex-col space-y-3 w-1/2">
							{/*<p className="text-ms font-semibold font-['lemon'] text-gray-900">Hello</p>*/}
								<span className="input_span">
									<input value={title} onChange={event => setTitle(event.target.value)} name="title" className="input" placeholder='Title' type="text" id="title" />
								</span>
								<span className="input_span">
									<input value={author} onChange={event => setAuthor(event.target.value)} name="author" className="input" placeholder='Author' type="text" id="author" />
								</span>
								<div className="flex items-center space-x-3 ">
									<span className="input_span">
										<input value={discount} onChange={event => setDiscount(event.target.value)} name="discount" className="input" placeholder='Discount' type="text" id="disount" />
									</span>
									<select onChange={handleChange} className="input" name="catId" placeholder="Add a category" id="category">
										{category?.length > 0 && category.map(cat => (
											<option className="text-sm text-gray-700 font-light" key={cat._id} value={cat._id}>{cat.title}</option>
										))}
									</select>
								</div>
								
								<div className="flex items-center space-x-3 ">
									<span className="input_span">
										<input value={price} onChange={event => setPrice(event.target.value)} name="price" className="input" placeholder='Price' type="text" id="price" />
									</span>
									<span className="input_span">
										<input value={inStock} onChange={event => setInStock(event.target.value)} name="inStock" className="input" placeholder='Quantity in Stock' type="text" id="inStock" />
									</span>
								</div>
								<span className="input_span">
									<input value={photo} onChange={event => setPhoto(event.target.value)} name="photo" className="input" placeholder='Type a link to the photo e.g. https//:abc...jpeg' type="text" id="photo" />
								</span>
							</div>
							<div className="flex flex-col space-y-3 w-1/2">
								<span className="input_span w-1/2">
									<input value={isbn} onChange={event => setIsbn(event.target.value)} name="isbn" className="input" placeholder='ISBN' type="text" id="isbn" />
								</span>
								<span className="input_span w-1/2">
									<input value={year} onChange={event => setYear(event.target.value)} name="year" className="input" placeholder='Year of Publication' type="text" id="year" />
								</span>
								<span className="input_span w-1/2">
									<input value={pages} onChange={event => setPages(event.target.value)} name="pages" className="input" placeholder='Pages' type="text" id="pages" />
								</span>
								<span className="input_span w-1/2">
									<input value={language} onChange={event => setLanguage(event.target.value)} name="language" className="input" placeholder='Language' type="text" id="language" />
								</span>
								<span className="input_span w-1/2">
									<input value={condition} onChange={event => setCondition(event.target.value)} name="condition" className="input" placeholder='condition' type="text" id="condition" />
								</span>
							</div>
						</div>
					</div>
					<div className="flex flex-col w-full h-fit my-12">
						<p className="text-ms font-light font-['lemon'] text-gray-900">Description</p>
						<div className="flex flex-col space-y-4 w-full">
							<ReactQuill value={desc} onChange={newValue => setDesc(newValue)} modules={modules} formats={formats} className="w-full" />
							<button onClick={createBook} type="submit" className="create_button my-8">Create</button>
						</div>
					</div>	
				</form>
			</div>
			
		</section>
	)
}

export default SellBook

