import React from 'react'

const CommunityReviews = () => {
	return (
		<div className="book_reviews">
			<p className="flex text-center justify-center w-full text-center text-gray-700 font-normal text-2xl lg:text-3xl">Community Reviews</p>
			<div className="flex flex-col space-y-3 justify-center w-full">
				<div className="flex space-x-5 items-center w-full">
					<div className="flex space-x-4 items-center">
						<span className="flex items-center cursor-pointer">
							<FaStar className="text-2xl lg:text-3xl text-red-500" />
							<FaStar className="text-2xl lg:text-3xl text-red-500" />
							<FaStar className="text-2xl lg:text-3xl text-red-500" />
							<FaStar className="text-2xl lg:text-3xl text-red-500" />
							<FaStarHalfStroke className="text-3xl text-red-500" />
						</span>
						<span className="flex items-center space-x-3">
							<p className="text-sm font-light text-gray-700">(120 Reviews)</p>
							<p className="text-sm font-light text-red-500">1,142 Ratings</p>
						</span>
					</div>
				</div>
				<div className="flex flex-col space-y-3 my-6 w-full">
					<span className="flex space-x-2 w-full">
						<p className="book_rating">5 Star</p>
						<progress className="w-3/5 progress rounded-2xl" max="100" value="47"></progress>
						<p className="rating_num">1,354 (47%)</p>
					</span>
					<span className="flex space-x-2">
						<p className="book_rating">4 Star</p>
						<progress className="w-3/5 progress rounded-2xl" max="100" value="32"></progress>
						<p className="rating_num">907 (32%)</p>
					</span>
					<span className="flex space-x-2">
						<p className="book_rating">3 Star</p>
						<progress className="w-3/5 progress rounded-2xl" max="100" value="15"></progress>
						<p className="rating_num">433 (15%)</p>
					</span>
					<span className="flex space-x-2">
						<p className="book_rating">2 Star</p>
						<progress className="w-3/5 progress rounded-2xl" max="100" value="4"></progress>
						<p className="rating_num">120 (4%)</p>
					</span>
					<span className="flex space-x-2">
						<p className="book_rating">1 Star</p>
						<progress className="w-3/5 progress rounded-2xl" max="100" value="1"></progress>
						<p className="rating_num">34 (1%)</p>
					</span>
				</div>
			</div>
		</div>
)
}

export default CommunityReviews