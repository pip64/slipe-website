import { Button } from "../ui/button";
import HeaderLogo from "../ui/header/header-logo";
import HeaderTabs from "../ui/header/header-tabs";
import DownloadDialog from "./download-dialog";

const pages = [
	{ link: "/", label: "About app" },
	{ link: "/support", label: "Support us" },
	{ link: "/contacts", label: "Contacts" },
	{ link: "/team", label: "Our team" },
];

export default function Header() {
	return (
		<header className='w-screen p-3 z-10 bg-white/90 backdrop-blur-2xl fixed px-64'>
			<nav className='w-full flex items-center gap-7'>
				<HeaderLogo />
				<HeaderTabs pages={pages} />
				<DownloadDialog>
					<Button size='lg'>
						Try app
					</Button>
				</DownloadDialog>
			</nav>
		</header>
	);
}
