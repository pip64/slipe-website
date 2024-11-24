"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCreative, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-creative";

export default function Reactions() {
	const emojiArray = Array.from({ length: 15 }, (_, i) => i + 1)
		.sort(() => Math.random() - 0.5)
		.slice(0, 9);

	return (
		<section id="reactions-block" className='w-full overflow-hidden max-md:py-24 bg-black flex flex-col gap-9 py-32'>
			<p className='text-[5rem] leading-[6.5rem] max-md:px-8 max-lg:text-[4rem] max-md:text-[3rem] max-md:leading-[4.5rem] max-lg:leading-[5.5rem] animate-[fadeUp_0.7s_ease-out] font-bold text-white text-center'>
				React it. Emoji it.
				<br />
				<span className='opacity-50'>Instead boring likes.</span>
			</p>
			<div className='w-full animate-[fadeUp_0.8s_ease-out] flex justify-center gap-14'>
				<Swiper
					slidesPerView='auto'
					loop
					speed={500}
					allowTouchMove={false}
					centeredSlides
					effect={"creative"}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					creativeEffect={{
						limitProgress: 4,
						prev: {
							opacity: 0.7,
							translate: ["-125%", 0, 0],
						},
						next: {
							opacity: 0.7,
							translate: ["125%", 0, 0],
						},
					}}
					className='w-full default-swiper'
					modules={[Autoplay, EffectCreative]}
				>
					{emojiArray.map((img, index) => (
						<SwiperSlide key={index} className=' max-lg:!w-52 max-md:!w-40 !w-64'>
							<Reaction img={img} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}

const Reaction = ({ img, className }) => {
	return (
		<Image
			suppressHydrationWarning
			alt='emoji'
			className={className}
			src={`https://cdn.slipe.fun/site/static/emoji/${img}.png`}
			width={256}
			height={256}
		/>
	);
};
