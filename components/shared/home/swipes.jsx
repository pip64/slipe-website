import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-creative"; 

export default function Swipes() {
	return (
		<section className='w-full pb-0 overflow-hidden bg-white flex flex-col gap-9 py-32'>
			<p className='text-[5rem] leading-[6.5rem] animate-[fadeUp_0.9s_ease-out] font-bold text-black text-center'>
				Leave boring swipe.
				<br />
				<span className='opacity-50'>Time for Slipe’s swipe</span>
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
				className='w-full default-swiper -mb-24 animate-[fadeUp_1s_ease-out]'
				modules={[Autoplay, EffectCreative]}
			>
				{Array.from({ length: 7 }, (_, i) => i + 1).map(img => (
					<SwiperSlide key={img} className='!w-[19.75rem]'>
						<div
							className='
                             bg-primary duration-200 ease-[cubic-bezier(0.4, 0, 0.6, 1)] rounded-[1.75rem] !h-[28rem]'
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
