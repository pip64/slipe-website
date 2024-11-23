"use client";

import { Button } from "../ui/button";
import { useState, useEffect, useRef } from "react";
import HeaderLogo from "../ui/header/header-logo";
import HeaderTabs from "../ui/header/header-tabs";
import { usePathname } from "next/navigation";
import DownloadDialog from "./download-dialog";
import { clsx } from "clsx";

const pages = [
	{ link: "/", label: "About app" },
	{ link: "/support", label: "Support us" },
	{ link: "/contacts", label: "Contacts" },
	{ link: "/team", label: "Our team" },
];

export default function Header() {
	const url = usePathname();

	const [isBlack, setIsBlack] = useState(false);
	const headerRef = useRef(null);
	const sections = ["reactions-block", "statistics-block"];

	useEffect(() => {
		const handleScroll = () => {
			const scrolled = sections.some(id => {
				const header = headerRef.current.getBoundingClientRect();
				const section = document.getElementById(id)?.getBoundingClientRect();
				if (!section) return false;
				return header.bottom > section?.top && header.top < section?.bottom;
			});
			setIsBlack(scrolled);
		};
		document.addEventListener("scroll", handleScroll);
		return () => document.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		setIsBlack(false);
	}, [url]);

	return (
		<header
			ref={headerRef}
			className={clsx(
				"w-screen p-3 z-10 duration-200 ease-out backdrop-blur-2xl fixed px-64",
				isBlack ? "bg-black/85 text-white" : "bg-white/85 text-black"
			)}
		>
			<nav className='w-full flex items-center gap-7'>
				<HeaderLogo />
				<HeaderTabs isBlack={isBlack} pages={pages} url={url} />
				<DownloadDialog>
					<Button size='lg'>Try app</Button>
				</DownloadDialog>
			</nav>
		</header>
	);
}
