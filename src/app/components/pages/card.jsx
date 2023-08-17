'use client'
import Image from 'next/image'
import React, {useState} from 'react'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/app/components/ui/card'
import {Badge} from '@/app/components/ui/badge'
import {BookmarkSimple} from '@phosphor-icons/react'
const CardItem = ({
	category,
	image,
	title,
	description,
	rating,
	genre,
	time,
	date,
}) => {
	const [toogle, setToogle] = useState(false)

	const handleToogle = () => {
		setToogle(!toogle)
	}

	return (
		<div>
			<h2 className="mt-10 scroll-m-12 border-b w-36 text-gray-100  mb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
				{category}
			</h2>
			<Card className="w-[320px] md:w-[350px] relative bg-gray-100 border-0 m-0 p-0">
				<div className="m-0 p-0 flex items-center justify-center w-full">
					<Image
						src={image}
						alt={title}
						className="rounded-t-md h-72 md:h-96  object-fill "
						width={5000}
						loading="lazy"
						height={100}
					/>
				</div>
				<CardHeader>
					<div className="flex items-center justify-between ">
						<CardTitle className="text-2xl">{title}</CardTitle>
						<Badge className="rounded-sm px-2 py-1  bg-teal-500 hover:bg-teal-400 transition-all">
							{rating}
						</Badge>
					</div>
					<CardDescription className="text-xs text-muted-foreground mb-2">
						{date} - {time}
					</CardDescription>

					<CardDescription>{`${description.slice(0, 250)}...`}</CardDescription>
				</CardHeader>
				<CardContent className="flex items-center gap-x-2">
					<Badge className="rounded-sm px-2 py-1  bg-teal-500 hover:bg-teal-400 transition-all">
						{genre[0]}
					</Badge>
					<Badge className="rounded-sm px-2 py-1  bg-teal-500 hover:bg-teal-400 transition-all">
						{genre[1]}
					</Badge>
				</CardContent>
				<div className="absolute right-0 -bottom-4">
					<BookmarkSimple
						onClick={handleToogle}
						className="text-teal-500 cursor-pointer transition-all hover:text-teal-400"
						weight={`${toogle ? 'fill' : 'light'}`}
						size={40}
					/>
				</div>
			</Card>
		</div>
	)
}

export default CardItem
