import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-creative";
import Image from "next/image";

export default function Swipes() {
	const posts = [
		"702aeb03-256f-4074-a731-f0555a476454",
		"53ea186a-3696-4aa4-945a-089eeeed527a",
		"c3535d9c-b27d-4a71-9759-cca1c85d2c8e",
		"4286a15d-f62c-425e-9287-80d7f5199642",
		"d2568d0e-d29f-4f24-b955-055a633d0358",
		"4be968e4-6be7-4ac9-ae52-dd0fadc28e7d",
		"1ba5ceb8-cd9d-400f-a380-63fc95078928",
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
				{posts.map(img => (
					<SwiperSlide key={img} className='!w-[19.75rem] !h-[28rem] rounded-[1.75rem]'>
						<Image alt='post' width={1000} height={1000} src={`https://cdn.slipe.fun/posts/${img}.png`} className='w-full object-cover h-full' />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
