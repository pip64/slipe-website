import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-creative";
import Image from "next/image";

function shuffle(array) {
	return array.sort(() => Math.random() - 0.5);
}

export default function Swipes() {
	const posts = [
		"b9b7e7a3-77b1-41d4-8191-7e2585ecaf83",
		"8ea7315e-38b2-4bc7-a709-0ad7375a96bc",
		"6174e8d9-ed9e-4da6-889a-7b0d14deac20",
		"2d62a6d0-d5b5-4981-8cf4-e0146a0a1458",
		"be87bd9f-6489-4cc9-853d-c011f0c80ebb",
		"feb82b47-91f9-4095-8a92-925b75f352e1",
		"a1a81514-95b2-40cf-93c7-73709018de11"
	];

	return (
		<section className='w-full pb-0 overflow-hidden max-md:py-24 bg-white flex flex-col gap-9 py-32'>
			<p className='text-[5rem] leading-[6.5rem] max-md:px-8 max-lg:text-[4rem] max-md:text-[3rem] max-md:leading-[4.5rem] max-lg:leading-[5.5rem] animate-[fadeUp_0.9s_ease-out] font-bold text-black text-center'>
				No more boring swipes.
				<br />
				<span className='opacity-50'>Time for Slipe’s swipes</span>
			</p>
			<Swiper
				slidesPerView='auto'
				speed={500}
				centeredSlides
				effect={"creative"}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				creativeEffect={{
					limitProgress: 10,
					prev: {
						shadow: true,
						rotate: [0, 0, -6],
						translate: ["-30%", "15%", 0],
					},
					next: {
						shadow: true,
						rotate: [0, 0, 6],
						translate: ["30%", "15%", 0],
					},
				}}
				className='w-full default-swiper -mb-24 max-md:-mb-40 animate-[fadeUp_1s_ease-out]'
				modules={[Autoplay, EffectCreative]}
			>
				{shuffle(posts).map(img => (
					<SwiperSlide key={img} className='!w-[19.75rem] !h-[28rem] rounded-[1.75rem]'>
						<Image alt='post' width={1000} height={1000} src={`https://cdn.slipe.fun/posts/${img}.png`} className='w-full object-cover h-full' />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
