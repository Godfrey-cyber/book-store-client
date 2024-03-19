import { useState, useEffect } from 'react'
import axios from "axios"
// import ReactQuill from "react-quill"
// import "react-quill/dist/quill.snow.css"
// import { Link, Navigate, useParams } from "react-router-dom"
// import { modules, formats, client } from "../assets/utilities"
// import SmallHeader from "../components/SmallHeader.jsx"
// import LargeHeader from "../components/LargeHeader.jsx"
// import { useNavigate } from 'react-router-dom'

const EditBookPage = () => {
// 	const [redirect, setRedirect] = useState(false)
// 	const [category, setCategory] = useState([])

// 	const [bookData, setBookData] = useState({ title: "", desc: "", price: "", photo: "", inStock: "", discount: "", catId: "", condition: "", author: "", pages: "", year: "", isbn: "", language: "" })
// 	// const [formData, setFormData] = useState({ title: "", price: "", photo: "", isbn: "", year: "", pages: "", discount: "", inStock: "", desc: "", desc: "", language: "", condition: "", author: "" })
// 	const [title, setTitle] = useState('')
// 	const [price, setPrice] = useState('')
// 	const [photo, setPhoto] = useState('')
// 	const [isbn, setIsbn] = useState('')
// 	const [year, setYear] = useState('')
// 	const [pages, setPages] = useState('')
// 	const [discount, setDiscount] = useState('')
// 	const [inStock, setInStock] = useState('')
// 	const [desc, setDesc] = useState('')
// 	const [language, setLanguage] = useState('')
// 	const [condition, setCondition] = useState('')
// 	const [author, setAuthor] = useState('')
// 	const [catId, setCatId] = useState('')
// 	const [catName, setCatName] = useState('')
// 	// CREATE BOOK
// 	const onChange = (event) => {
//         setBookData(prev => ({...prev, [event.target.name]: event.target.value}))
//     }
//     useEffect(() => {
//  		const getCategories = async() => {
//  			try {
//  				const res = await axios.get("https://my-book-store-1oki.onrender.com/api/v1/categories/get-categories")
//  				if (res.status === 200 || res.statusText === 'OK') {
//            			setCategory(res.data.data)
// 				}
//  			} catch (error) {
//  				if (error || !res.status === 200 || !res.statusText === 'OK') {
// 					toast.error(error?.response?.data?.msg)
// 				}
//  			}
//  		}
//  		getCategories()
//  	},[])
//  	const handleChange = (event) => {
//  		if (event.target.name = "catId") {
//     		setCatId(event.target.value)
//     		console.log(catId)
//     	}
//  	}

//  	const createBook = async(event) => {
// 		event.preventDefault()
// 		try {
// 			const res = await axios.post(`https://my-book-store-1oki.onrender.com/api/v1/books/update-book/${}`, { title, price, photo, isbn, year, pages, discount, inStock, desc, language, condition, author, catId, catName }, { withCredentials: true })
// 			console.log(res)
// 			if (res.status === 201 || res.statusText === 'OK') {
// 				setRedirect(true)
// 				console.log(res)
// 				toast.success("Book successfully created")
// 			}
// 		} catch (error) {
// 			if (error || !res.status === 201 || !res.statusText === 'OK') {
// 				// toast.error(error?.response.data)
// 				console.log(error)
// 			}
// 		}
// 		console.log(bookData)
// 	}
// 	return (
// 		<section className="h-full w-full bg-red-400">
			
// 		</section>
// 	)
// }

export default EditBookPage