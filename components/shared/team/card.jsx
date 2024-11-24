import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function DeveloperCard({ name = "", role = "", contact = "", avatar = "", color = "" }) {
	return (
		<div className='w-full h-80 max-w-[38.75rem] relative overflow-hidden rounded-[1.75rem]'>
			<Link
				href={contact}
				style={{ "--developer-color": color, "--developer-end-color": `${color}00` }}
				className='w-full h-full justify-between duration-200 ease-out group hover:bg-[--developer-color] bg-gradient-to-t from-[--developer-color] to-60% to-[--developer-end-color] relative z-10 flex items-end p-7'
			>
				<div className='flex flex-col gap-1'>
					<span className='text-4xl font-semibold text-white'>{name}</span>
					<span className='text-xl text-white/50'>{role}</span>
				</div>
				<Button className="translate-x-4 max-sm:hidden opacity-0 group-hover:translate-x-0 group-hover:opacity-100" size="xl">
					Contact
				</Button>
			</Link>
			<Image src={avatar} width={640} height={640} className='object-cover top-0 absolute h-full w-full' alt={name} />
		</div>
	);
}
