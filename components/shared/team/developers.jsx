import DeveloperCard from "./card";

export default function Developers() {
	return (
		<section
			id='reactions-block'
			className='w-full min-h-screen justify-center max-2xl:px-48 max-sm:px-8 max-xl:px-28 max-md:py-24 max-lg:px-16 px-80 overflow-hidden bg-black flex flex-col gap-9 py-32'
		>
			<p className='text-[5rem] leading-[6.5rem] max-lg:text-[4rem] max-md:text-[3rem] max-md:leading-[4.5rem] max-lg:leading-[5.5rem] animate-[fadeUp_0.3s_ease-out] font-bold text-white text-center'>
				There's those
				<br />
				<span className='opacity-50'>who created the Slipe</span>
			</p>
			<div className='w-full animate-[fadeUp_0.4s_ease-out] max-lg:flex-col flex items-center justify-center gap-12'>
				<DeveloperCard
					avatar='https://cdn.slipe.fun/site/static/avatars/dikiy.png'
					name='Dikiy'
					contact='https://discord.com/channels/@me/1055859935000416367'
					role='UI/UX, Frontend'
                    color="#80715E"
				/>
                <DeveloperCard
					avatar='https://cdn.slipe.fun/site/static/avatars/pip.png'
					name='Pip64'
					contact='https://discord.com/channels/@me/1068089262559465482'
					role='Backend developer'
                    color="#834437"
				/>
			</div>
		</section>
	);
}
