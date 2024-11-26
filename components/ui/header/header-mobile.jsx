import Link from "next/link";
import { createPortal } from "react-dom";

export default function HeaderMobile({ pages, url, setIsExpanded, isExpanded, appUrls }) {
	return (
		<>
			<ul
				data-expanded={isExpanded}
				className='flex-col data-[expanded=true]:pt-3 data-[expanded=false]:pt-0 data-[expanded=true]:opacity-100 data-[expanded=false]:opacity-0 data-[expanded=true]:h-[26.25rem] duration-200 ease-out overflow-hidden data-[expanded=false]:h-0 hidden max-md:flex'
			>
				{pages?.map(page => (
					<li onClick={() => setIsExpanded(false)} id={page.link} key={page.link}>
						<Link
							data-active={url === page.link}
							className='w-full flex items-center text-xl p-5 px-2 font-medium data-[active=true]:opacity-100 data-[active=false]:opacity-50 duration-200 ease-out'
							href={page.link}
						>
							{page.label}
						</Link>
					</li>
				))}
				{appUrls?.map(page => (
					<li onClick={() => setIsExpanded(false)} id={page.link} key={page.link}>
						<Link
							className='w-full flex items-center text-xl p-5 opacity-50 px-2 font-medium duration-200 ease-out'
							href={page.link}
						>
							{page.label}
						</Link>
					</li>
				))}
				{createPortal(
					<div
						data-expanded={isExpanded}
						className='w-screen duration-200 ease-out h-screen top-0 left-0 z-20 data-[expanded=true]:opacity-100 data-[expanded=false]:opacity-0 data-[expanded=true]:pointer-events-auto data-[expanded=false]:pointer-events-none fixed bg-black/20 backdrop-blur-2xl'
					/>,
					document.body
				)}
			</ul>
		</>
	);
}
