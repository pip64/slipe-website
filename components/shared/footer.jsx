import HeaderLogo from "../ui/header/header-logo";

export default function Footer() {
	return (
		<footer className='w-screen p-3 max-md:px-8 max-xl:px-12 px-64 bg-black'>
			<nav className='w-full text-white flex items-center justify-between gap-7'>
				<HeaderLogo />
                <span className="text-md text-white/50">2023-2025 all rights reserved</span>
			</nav>
		</footer>
	);
}
