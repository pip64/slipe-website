"use client";

import { Button } from "../ui/button";
import { useState, useEffect, useRef } from "react";
import HeaderLogo from "../ui/header/header-logo";
import HeaderTabs from "../ui/header/header-tabs";
import { usePathname } from "next/navigation";
import DownloadDialog from "./download-dialog";
import { clsx } from "clsx";
import HeaderTrigger from "../ui/header/header-trigger";

const pages = [
	{ link: "/", label: "About app" },
	{ link: "/support", label: "Support us" },
	{ link: "/contacts", label: "Contacts" },
	{ link: "/team", label: "Our team" },
];

export default function Header() {
	const url = usePathname();

	const [headerColor, setHeaderColor] = useState("white");
	const [isExpanded, setIsExpanded] = useState(false);
	const headerRef = useRef(null);

	const handleScroll = () => {
		const header = headerRef.current.getBoundingClientRect();
		const reactionsBlock = document.getElementById("reactions-block")?.getBoundingClientRect();
		const statisticsBlock = document.getElementById("statistics-block")?.getBoundingClientRect();
		setHeaderColor("white");

		if (reactionsBlock && header.bottom > reactionsBlock.top && header.top < reactionsBlock.bottom) {
			setHeaderColor("black");
		}

		if (statisticsBlock && header.bottom > statisticsBlock.top && header.top < statisticsBlock.bottom) {
			setHeaderColor("gray");
		}
	};

	useEffect(() => {
		document.addEventListener("scroll", handleScroll);
		return () => document.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		handleScroll();
	}, [url]);

	return (
		<header
			ref={headerRef}
			style={{
				"--header-bg": headerColor === "black" ? "#000000D9" : headerColor === "gray" ? "#1F1F1FD9" : "#FFFFFFD9",
				"--header-text": headerColor === "black" || headerColor === "gray" ? "#ffffff" : "#000000",
				"--header-indicator": headerColor === "black" || headerColor === "gray" ? "#ffffff14" : "#00000014",
			}}
			className='w-screen bg-[--header-bg] text-[--header-text] p-3 z-10 duration-200 max-xl:px-32 max-lg:px-8 ease-out backdrop-blur-2xl fixed px-64'
		>
			<nav className='w-full flex max-md:justify-between items-center gap-7'>
				<HeaderLogo />
				<HeaderTabs pages={pages} url={url} />
				<DownloadDialog>
					<Button className="max-md:hidden" size='lg'>Try app</Button>
				</DownloadDialog>
				<HeaderTrigger isExpanded={isExpanded} setIsExpanded={setIsExpanded}/>
			</nav>
		</header>
	);
}
