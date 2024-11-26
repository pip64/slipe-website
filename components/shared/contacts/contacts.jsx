import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactsSection() {
	return (
		<section
			id='reactions-block'
			className='w-full min-h-screen justify-center max-2xl:px-48 max-sm:px-8 max-xl:px-28 max-md:py-24 max-lg:px-16 px-80 overflow-hidden bg-black flex flex-col gap-9 py-32'
		>
			<p className='text-[5rem] leading-[6.5rem] max-lg:text-[4rem] max-md:text-[3rem] max-md:leading-[4.5rem] max-lg:leading-[5.5rem] animate-[fadeUp_0.3s_ease-out] font-bold text-white text-center'>
				Slipe’s contacts
				<br />
				<span className='opacity-50'>support about the app</span>
			</p>
			<div className='flex gap-5 flex-wrap animate-[fadeUp_0.4s_ease-out] justify-center'>
				<Button asChild variant='secondaryBlack' size='dxl'>
					<Link target='_blank' href='https://discord.gg/H2phtsj9zJ'>
						Discord
					</Link>
				</Button>
				<Button asChild variant='secondaryBlack' size='dxl'>
					<Link target='_blank' href='https://t.me/slipe_space'>
						Telegram
					</Link>
				</Button>
                <Button asChild variant='secondaryBlack' size='dxl'>
					<Link href='mailto:support@slipe.space'>
						Mail
					</Link>
				</Button>
			</div>
		</section>
	);
}
