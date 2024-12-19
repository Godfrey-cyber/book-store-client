import axios from "axios"
import { useSelector } from "react-redux"
import { selectUser } from ".../Redux/Slices/userSlice.js"

const user = useSelector(selectUser)
export const userRequest = axios.create({
	baseURL: "https://my-book-store-1oki.onrender.com/api/v1",
	header: { token: TOKEN },
	Authorization: user.token
})