import Image from "next/image";

export default function Reactions() {
    const emojiArray = Array.from({ length: 15 }, (_, i) => i + 1).sort(() => Math.random() - 0.5).slice(0, 7)
	return (
		<section className='w-full pt-[8.25rem] overflow-hidden bg-black flex flex-col gap-6 py-32'>
			<p className='text-[5rem] leading-[6.5rem] font-bold text-white text-center'>
				React it. Emoji it.
				<br />
				<span className='opacity-50'>Instead boring likes.</span>
			</p>
            <div className="w-full flex justify-center gap-14">
                {emojiArray?.map((number, index) => (
                    <Image alt="emoji" key={index} src={`https://cdn.slipe.fun/site/static/emoji/${number}.png`} width={256} height={256}/>
                ))}
            </div>
		</section>
	);
}
