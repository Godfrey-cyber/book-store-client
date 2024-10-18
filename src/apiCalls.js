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
		if (res.status === 201 || res.statusText === 'OK') {
			setRedirect(true)
			console.log(res)
			toast.success("Book successfully created")
		}
	} catch (error) {
		if (error || !res.status === 201 || !res.statusText === 'OK') {
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
export const handleSubmit = async (event, password, email, username, navigate, formData, dispatch, ) => {
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