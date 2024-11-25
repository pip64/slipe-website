import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function BrandCard({ background = "", name = "", link = "", color = "", textColor = "#FFFFFF" }) {
	return (
		<div className='w-full h-64 relative overflow-hidden group rounded-[1.75rem]'>
			<Link
				href={link}
                type="_blank"
				style={{ "--brand-color": color, "--brand-text-color": textColor }}
				className='w-full h-full justify-between flex-col duration-200 ease-out group-hover:bg-[--brand-color] relative z-10 flex items-end p-7'
			>
				<span className='text-2xl w-full font-semibold text-[--brand-text-color]'>{name}</span>
				<Button className='translate-x-4 max-sm:hidden opacity-0 group-hover:translate-x-0 group-hover:opacity-100' size='xl'>
					Support
				</Button>
			</Link>
			<Image
				src={background}
				width={1042}
				height={654}
				className='object-cover top-0 duration-200 ease-out group-hover:scale-105 absolute h-full w-full'
				alt={name}
			/>
		</div>
	);
}
