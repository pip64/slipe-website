"use client"

import Hero from "@/components/shared/home/hero";
import Reactions from "@/components/shared/home/reactions";
import Statistics from "@/components/shared/home/statistics";
import Swipes from "@/components/shared/home/swipes";


export default function Home() {
	return (
		<main id="main-block" className='w-screen min-h-screen'>
			<Hero/>
			<Reactions/>
			<Swipes/>
			<Statistics/>
		</main>
	);
}
