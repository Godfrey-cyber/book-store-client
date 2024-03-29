import React from 'react'

const MainSection = () => {
	return (
		<section className="relative w-full bg-red-50 h-1/2 lg:h-[84vh]">
			<div className=" bg-white mx-auto w-full lg:w-4/5 h-full">
				<span className=" w-full h-full">
					<img className="w-full h-full bg-contain bg-no-repeat bg-center" src="https://149502452.v2.pressablecdn.com/wp-content/uploads/2020/11/the-dichotomy-of-leadership-book-01-1-2048x1152.jpeg" alt="" />
					<span className="mainsection_span">
						<p className="text-sm font-light text-black bg-white rounded-full px-6 py-1 cursor-pointer">Science Fiction</p>
						<p className="text-2xl font-bold lg:text-5xl lg:font-normal text-white">The History</p>
						<p className="text-2xl font-bold lg:text-5xl lg:font-normal text-white">of Phipino</p>
						<button className="text-sm lg:text-xl font-light mf:font-normal text-white bg-red-600 rounded-3xl w-32 md:36 lg:w-44 py-2">Browse Store</button>
					</span>
				</span>	 
			</div>
		</section>
	)
}

export default MainSection