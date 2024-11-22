import "swiper/css";
import "swiper/css/effect-creative";
import { Button } from "../../ui/button";
import DownloadDialog from "../download-dialog";
import { ReactTyped } from "react-typed";

export default function Hero() {
	return (
		<section className='w-full pt-[8.25rem] bg-white flex flex-col gap-6 py-32'>
			<div className='flex flex-col gap-5 items-center'>
				<div className='text-[5rem] leading-[6.5rem] font-bold text-black text-center'>
					<p>Place where your blog</p>
					<p>
						gonna{" "}
						<span className='bg-primary/25 duration-200 ease-out text-primary px-6 py-2 rounded-3xl'>
							<ReactTyped
								strings={["happen", "unique", "beauty"]}
								typeSpeed={100}
								backSpeed={60}
								loop
							/>
						</span>
					</p>
				</div>
				<p className='text-black/50 text-xl text-center w-[44rem]'>
					Share your blog, your vision to your auditory with ease and creativity with slipe blogging app
				</p>
			</div>
			<div className='flex gap-5 justify-center'>
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
