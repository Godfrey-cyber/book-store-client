import axios from "axios"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerSuccess, registerFailure } from "./Redux/Slices/userSlice.js"

// CREATE -> Create a book
const createBook = async(event, title, price, photo, isbn, year, pages, discount, inStock, desc, language, condition, author, catId, catName, setRedirect) => {
	event.preventDefault()
	try {
		const res = await axios.post("https://my-book-store-1oki.onrender.com/api/v1/books/create-book", { title, price, photo, isbn, year, pages, discount, inStock, desc, language, condition, author, catId, catName }, { withCredentials: true })
		console.log(res)
		if (res.status === 201 && res.statusText === 'OK') {
			setRedirect(true)
			console.log(res)
			toast.success("Book successfully created")
		}
	} catch (error) {
		if (error || !res.status === 201 && !res.statusText === 'OK') {
			// toast.error(error?.response.data)
			console.log(error)
		}
	}
	console.log(bookData)
}


// GET -> Category
export const getCategories = async(setCategory) => {
	try {
		const res = await axios.get("https://my-book-store-1oki.onrender.com/api/v1/categories/get-categories")
		if (res.status === 200 || res.statusText === 'OK') {
			setCategory(res.data.data)
		}
	} catch (error) {
		if (error || !res.status === 200 || !res.statusText === 'OK') {
			toast.error(error?.response?.data?.msg)
		}
	}
}

//handle submit 
export const handleSubmit = async (event, password, email, username, navigate, formData, dispatch, setFormData) => {
        event.preventDefault()
        dispatch(registerStart())
        if (!password == "" || !email == "" || !username == "") {
			try {
				const res = await axios.post("https://my-book-store-1oki.onrender.com/api/v1/users/register", formData, { withCredentials: true })
				if (res.status === 201 || res.statusText === 'OK') {
					dispatch(registerSuccess(res.data))
					setFormData({email: "", password: "", username: ""})
					console.log(res)
					navigate("/")
					toast.success("Congratulation🎉, Welcome")
				}
			} catch (error) {
				if (error || !res.status === 201 || !res.statusText === 'OK') {
					toast.error(error?.response?.data?.msg)
					console.log(error)
					dispatch(registerFailure(error?.response?.data?.msg))
				}
			}
		} else {
			console.log("Please Enter all fields")
		}
    }

export const handleSearch = (searchTerm, searchResults, setLoading) => {
	// event.preventDefault()
	try {
		const response = await axios.get(`https://my-book-store-1oki.onrender.com/api/v1/books/getAllBooks?search=${searchTerm}`)
		if (response && response.status === 200 || response.statusText === 'OK') {
			setSearchResults(response.data.data)
			setLoading(false)
		}
	} catch (error) {
		if (error || !res.status === 200 || !res.statusText === 'OK') {
			console.log(error)
		}
	}
}

// GET - Categories
export const getCategories = async(setCategories) => {
	try { 
		const response = await axios.get('https://my-book-store-1oki.onrender.com/api/v1/categories/get-categories')
		if (response?.status === 200 || response.statusText === "OK") {
			setCategories(response.data.data)
			// console.log(categories)
		}
	} catch(error) {
		if (error || !response?.status === 200 || !response?.statusText === 'OK') {
			console.error('❗Error fetching data❌:', error.message);
			// console.log(categories)
		}
	}
}
// GET - Books
export const getBooks = async(setBooks) => {
	try {
		const response = await axios.get('https://my-book-store-1oki.onrender.com/api/v1/books/getAllBooks')
		if (response && response?.status === 200 || response.statusText === "OK") {
			setBooks(response?.data?.data)
		}
	} catch(error) {
		if (error || !response?.status === 200 || !response?.statusText === 'OK') {
			console.error('❗Error fetching data❌:', error.message);
		}
	}
}
// GET - Book by _id
export const getBook = async(id, setBook) => {
	try {
		const response = await axios.get(`https://my-book-store-1oki.onrender.com/api/v1/books/getBook/${id}`)
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

// Login
export const handleSubmit = async (event, dispatch, loginSuccess, email, password, formData, setFormData, navigate, loginStart, loginStart) => {
    event.preventDefault()
    dispatch(loginStart())
    if (!email == "" || !password == "") {
		try {
			const res = await axios.post("https://my-book-store-1oki.onrender.com/api/v1/users/login", formData, { withCredentials: true })
			if (res.status === 200 || res.statusText === 'OK') {
				dispatch(loginSuccess(res.data))
				setFormData({email: "", password: ""})
       			navigate('/')
       			toast.success("Successfully Logged in🥇")
			}
		} catch (err) {
			if (err || !res.status === 200 || !res.statusText === 'OK') {
				dispatch(loginFailure(err?.response?.data.msg))
				setFormData({email: "", password: ""})
				toast.error(err?.response?.data?.msg)
			}
		}
    } else {
		toast.error('Soory! • Cannot log you without credentials')
	}
} 