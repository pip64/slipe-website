"use client";

import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function HeaderTabs({ pages }) {
	const url = usePathname();

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
		<div className="flex justify-center w-full">
			<ul className='relative items-center flex'>
				{pages?.map(page => (
					<li onClick={handleLinkClick} id={page.link} key={page.link}>
						<Link
							className={clsx(
								`h-[2.6875rem] flex items-center px-6 font-medium duration-200 rounded-full ease-out hover:opacity-100`,
								url === page.link ? (isIndicator ? "bg-transparent opacity-100" : "bg-black/[0.08] opacity-100") : "opacity-50"
							)}
							href={page.link}
						>
							{page.label}
						</Link>
					</li>
				))}
				{/* Индикатор */}
				<span
					style={{ width: indicatorWidth, transform: `translateX(${indicatorPosition}px)` }}
					className={clsx(
						"bg-black/[0.08] h-[2.6875rem] -z-10 rounded-full absolute duration-200 ease-out",
						isIndicator ? "opacity-100" : "opacity-0"
					)}
				/>
			</ul>
		</div>
	);
}
