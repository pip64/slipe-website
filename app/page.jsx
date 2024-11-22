"use client"

import Hero from "@/components/shared/home/hero";
import Reactions from "@/components/shared/home/reactions";

export default function Home() {
	return (
		<main className='w-screen overflow-y-scroll h-screen'>
			<Hero/>
			<Reactions/>
		</main>
	);
}
