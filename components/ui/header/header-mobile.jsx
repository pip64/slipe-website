export default function HeaderMobile({ pages, url, setIsExpanded }) {
	return (
		<ul className='flex flex-col'>
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
		</ul>
	);
}
