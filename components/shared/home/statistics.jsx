import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import DownloadDialog from "../download-dialog";

export default function Statistics() {
	const [stats, setStats] = useState({ users: 0, posts: 0 });

	useEffect(() => {
		const getStatistics = async () => {
			const data = await fetch("https://api.slipe.fun/app/statistics").then(res => res.json());
			console.log(data);
			setStats(data);
		};
		getStatistics();
	}, []);
	return (
		<section id='statistics-block' className='w-full pt-[8.25rem] overflow-hidden bg-[#1F1F1F] flex flex-col gap-9 py-32'>
			<p className='text-[5rem] leading-[6.5rem] animate-[fadeUp_1.1s_ease-out] font-bold text-white text-center'>
				Are you ready?
				<br />
				<span className='opacity-50'>Join our community</span>
			</p>
			<div className='w-full animate-[fadeUp_1.2s_ease-out] px-80 flex justify-center gap-12'>
				<div className='w-full py-24 flex justify-center items-center flex-col gap-2 rounded-[2rem] bg-white'>
					<span className='font-semibold text-6xl text-black'>{stats?.users.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
					<span className='text-xl text-black/50'>Registered users</span>
				</div>
				<div className='w-full py-24 flex justify-center items-center flex-col gap-2 rounded-[2rem] bg-primary'>
					<span className='font-semibold text-6xl text-white'>{stats?.posts.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
					<span className='text-xl text-white/50'>Published posts</span>
				</div>
			</div>
			<div className='flex gap-5 animate-[fadeUp_0.6s_ease-out] justify-center'>
				<DownloadDialog>
					<Button size='xl'>Try app</Button>
				</DownloadDialog>
				<Button variant='secondaryBlack' size='xl'>
					Discord
				</Button>
				<Button variant='secondaryBlack' size='xl'>
					Telegram
				</Button>
			</div>
		</section>
	);
}
