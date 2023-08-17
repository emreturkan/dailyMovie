'use client'
import React from 'react'
import CardItem from './components/pages/card'
import {movie, tv} from './data/dummy'
const Home = () => {
	return (
		<div className=" w-full h-full flex flex-col justify-center items-center mt-12">
			<div className="mb-16">
				<h1 className="text-5xl md:text-9xl font-bold text-gray-100">
					11:59:59
				</h1>
			</div>
			<div className="flex flex-col md:flex-row items-center gap-y-12 md:gap-y-0 md:gap-x-48">
				<CardItem
					title={movie.title}
					image={movie.image}
					rating={movie.rating}
					date={movie.date}
					time={movie.time}
					genre={movie.genre}
					description={movie.description}
					category={movie.category}
				/>
				<CardItem
					title={tv.title}
					image={tv.image}
					rating={tv.rating}
					date={tv.date}
					time={tv.time}
					genre={tv.genre}
					description={tv.description}
					category={tv.category}
				/>
			</div>
		</div>
	)
}

export default Home
