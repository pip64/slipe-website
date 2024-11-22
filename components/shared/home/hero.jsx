import "swiper/css";
import "swiper/css/effect-creative";
import { Button } from "../../ui/button";
import DownloadDialog from "../download-dialog";
import { ReactTyped } from "react-typed";
import { useState } from "react";
import { clsx } from "clsx";

export default function Hero() {
	const colors = ["#0A84FF", "#FFCA41", "#FF3F3F"];

	const [currentTyped, setCurrentType] = useState(0);

	return (
		<section className='w-full pt-[8.25rem] bg-white flex flex-col gap-6 py-32'>
			<div className='flex flex-col gap-5 items-center'>
				<div className='text-[5rem] leading-[6.5rem] font-bold text-black text-center'>
					<p className='animate-[fadeUp_0.3s_ease-out]'>Place where your blog</p>
					<p className='animate-[fadeUp_0.4s_ease-out]'>
						gonna{" "}
						<span style={{ "--color": colors[currentTyped], "--bg-color": colors[currentTyped] + '40'  }} className='bg-[--bg-color] duration-200 ease-out text-[--color] px-6 py-2 rounded-3xl'>
							<ReactTyped
								preStringTyped={index => setCurrentType(index)}
								strings={["happen", "unique", "beauty"]}
								typeSpeed={100}
								backSpeed={60}
								loop
							/>
						</span>
					</p>
				</div>
				<p className='text-black/50 animate-[fadeUp_0.5s_ease-out] text-xl text-center w-[44rem]'>
					Share your blog, your vision to your auditory with ease and creativity with slipe blogging app
				</p>
			</div>
			<div className='flex gap-5 animate-[fadeUp_0.6s_ease-out] justify-center'>
				<DownloadDialog>
					<Button size='xl'>Try app</Button>
				</DownloadDialog>
				<Button variant='secondary' size='xl'>
					Discord
				</Button>
			</div>
		</section>
	);
}
