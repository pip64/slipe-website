"use client";

import { clsx } from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeaderTabs({ pages, url }) {
	const [indicatorWidth, setIndicatorWidth] = useState(0);
	const [indicatorPosition, setIndicatorPosition] = useState(0);
	const [isIndicator, setIsIndicator] = useState(false);

	const handleLinkClick = event => {
		const element = event.currentTarget;

		setIndicatorWidth(element.offsetWidth);
		setIndicatorPosition(element.offsetLeft);
	};

	useEffect(() => {
		const element = document.getElementById(url);

		setTimeout(() => {
			setIsIndicator(true);
		}, 200);

		setIndicatorWidth(element.offsetWidth);
		setIndicatorPosition(element.offsetLeft);
	}, []);
	return (
		<div className='flex pl-[3.3125rem] max-md:hidden justify-center w-full'>
			<ul className='relative items-center flex'>
				{pages?.map(page => (
					<li onClick={handleLinkClick} id={page.link} key={page.link}>
						<Link
							className={clsx(
								`h-11 flex items-center text-sm px-6 font-medium duration-200 rounded-full ease-out hover:opacity-100`,
								url === page.link ? (isIndicator ? "bg-transparent opacity-100" : "opacity-100 bg-[--header-indicator]") : "opacity-50"
							)}
							href={page.link}
						>
							{page.label}
						</Link>
					</li>
				))}
				<span
					style={{ width: indicatorWidth, transform: `translateX(${indicatorPosition}px)` }}
					className={clsx(
						" h-11 -z-10 rounded-full absolute duration-200 ease-out bg-[--header-indicator]",
						isIndicator ? "opacity-100" : "opacity-0"
					)}
				/>
			</ul>
		</div>
	);
}
