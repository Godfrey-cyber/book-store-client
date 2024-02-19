import React from 'react'
import { useNavigate } from "react-router-dom"
import { FaYoutube, FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa"
import { IoMdMail, IoMdTime } from "react-icons/io"

const SmalHeader = () => {
	const navigate = useNavigate()
	return (
		<section className="flex justify-between items-center w-full bg-gray-200 lg:px-20 h-[40px]">
			{/*<div className=" w-full">*/}
				{/*//media & time*/}
				<div className="flex items-center space-x-3 w-full">
					<span className="flex space-x-2 text-gray-500 text-sm items-center">
						<IoMdTime className="media_icon hover:text-red-600" />
						<p className="flex text-xs lg:text-sm font-light text-gray-600">Openning Hours 10.00 am - 6.00 pm</p>	
					</span>
					<span className="flex space-x-3 text-gray-600">|</span>
					<div className="flex space-x-3 items-center" >
						<FaFacebook className="hover:text-blue-600 media_icon" />
						<FaInstagram className="hover:text-yellow-600 media_icon" />
						<FaYoutube className="hover:text-red-600 media_icon" />
					</div>
				</div>
				{/*SELL A BOOK*/}
				<div className="flex">
					<p onClick={() => navigate("/upload_book")} className="sell_book">Sell a book</p>
				</div>
				{/*//cta*/}
				<div className="flex space-x-3 items-center w-full">
					<span className="cta_media">
						<FaPhoneAlt className="hover:text-red-600 media_icon" />
						<p className="flex text-xs lg:text-sm font-light text-gray-600">reallygreat@gmail.com</p>	 
					</span>
					<span className="cta_media">
						<IoMdMail className="hover:text-red-600 media_icon" />
						<p className="text-xs lg:text-sm font-light text-gray-600">+254 7123 8456</p>
					</span>
				</div>
			{/*// </div>*/}
		</section>
	)
}

export default SmalHeader