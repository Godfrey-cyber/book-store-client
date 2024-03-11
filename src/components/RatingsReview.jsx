import React from 'react'

const RatingsReview = ({ photo }) => {
	return (
		// {/*<div className="">*/}
			<div className="bookpage_div">
				<p className="flex items-center text-center justify-center text-gray-700 font-normal w-full text-2xl lg:text-3xl">Ratings & Reviews</p>
				<div className="flex flex-col space-y-3 items-center justify-center">
					<img className="rounded-full h-12 w-12 bg-cover" src={book.photo} alt={photo} />
					<p className="text-gray-700 font-normal text-2xl lg:text-3xl">What do you think?</p>
					<div className="flex-col lg:flex space-x-5 items-center">
						<div className="flex-col space-y-3 my-3 items-center justify-center">
							<span className="flex items-center cursor-pointer">
								<FaStar className="text-2xl lg:text-3xl text-red-500" />
								<FaStar className="text-2xl lg:text-3xl text-red-500" />
								<FaStar className="text-2xl lg:text-3xl text-red-500" />
								<FaStar className="text-2xl lg:text-3xl text-red-500" />
								<FaStarHalfStroke className="text-3xl text-red-500" />
							</span>
							<p className="text-gray-700 font-light text-xs">Rate this book</p>
						</div>
						<button className="bg-red-400 text-white rounded-full px-3 lg:px-5 py-2">Write a Review</button>
					</div>
				</div>
			</div>
		// </div>
	)
}

export default RatingsReview