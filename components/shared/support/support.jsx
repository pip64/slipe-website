"use client";

import { ReactTyped } from "react-typed";
import { useState } from "react";
import BrandCard from "./brand-card";

export default function SupportDevs() {
	const colors = ["#FFFFFF", "#41C4C3", "#F15F2C"];

	const [currentTyped, setCurrentType] = useState(0);

	return (
		<section
			id='reactions-block'
			className='w-full min-h-screen justify-center max-2xl:px-36 max-sm:px-8 max-xl:px-20 max-md:py-24 max-lg:px-16 px-64 overflow-hidden bg-black flex flex-col gap-9 py-32'
		>
			<div className='text-[5rem] leading-[6.5rem] max-lg:text-[4rem] max-md:text-[3rem] max-md:leading-[4.5rem] max-lg:leading-[5.5rem] font-bold text-white text-center'>
				<p className='animate-[fadeUp_0.3s_ease-out]'>Support app devs</p>
				<p className='animate-[fadeUp_0.4s_ease-out] max-md:flex max-md:flex-col max-md:items-center'>
					through{" "}
					<span
						style={{ "--color": colors[currentTyped], "--bg-color": colors[currentTyped] + "40" }}
						className='bg-[--bg-color] duration-200 w-fit ease-out text-[--color] px-6 py-2 rounded-3xl'
					>
						<ReactTyped
							preStringTyped={index => setCurrentType(index)}
							strings={["Patreon", "Tebex", "Boosty"]}
							typeSpeed={100}
							backSpeed={60}
							loop
						/>
					</span>
				</p>
			</div>
			<div className='w-full animate-[fadeUp_0.4s_ease-out] max-lg:flex-col flex items-center justify-center gap-8'>
				<BrandCard
					color='#FFFFFF'
					textColor='#000000'
					background='https://cdn.slipe.fun/site/static/brands/patreon.png'
					name='Patreon'
					link='https://www.patreon.com/c/slipe_official'
				/>
                <BrandCard
					color='#41C4C3'
					background='https://cdn.slipe.fun/site/static/brands/tebex.png'
					name='Tebex'
					link='https://www.patreon.com/c/slipe_official'
				/>
                <BrandCard
					color='#F15F2C'
					background='https://cdn.slipe.fun/site/static/brands/boosty.png'
					name='Boosty'
					link='https://www.patreon.com/c/slipe_official'
				/>
			</div>
		</section>
	);
}
