import Image from "next/image";
import Link from "next/link";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuContent,
	NavigationMenuLink,
	navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

export default function Header() {
	return (
		<header className='w-screen p-[0.875rem] fixed px-64'>
			<nav className='w-full flex items-center gap-7'>
				<Image src='slipe.svg' alt='logo' width={32} height={32} />
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<Link href='/docs' legacyBehavior passHref>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>About app</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger>Contacts</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
									<li className='row-span-3'>
										<NavigationMenuLink asChild>
											<a
												className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
												href='/'
											>
												<div className='mb-2 mt-4 text-lg font-medium'>shadcn/ui</div>
												<p className='text-sm leading-tight text-muted-foreground'>
													Slipe omg best app forever cuz rizz
												</p>
											</a>
										</NavigationMenuLink>
									</li>
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger>Support</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
									<li className='row-span-3'>
										<NavigationMenuLink asChild>
											<a
												className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
												href='/'
											>
												<div className='mb-2 mt-4 text-lg font-medium'>shadcn/ui</div>
												<p className='text-sm leading-tight text-muted-foreground'>
													Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.
												</p>
											</a>
										</NavigationMenuLink>
									</li>
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href='/team' legacyBehavior passHref>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>Our team</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link target='_blank' href='https://github.com/slipe-app' legacyBehavior passHref>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>Github</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</nav>
		</header>
	);
}
