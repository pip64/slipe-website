import { clsx } from "clsx";
import { Button } from "../button";

export default function HeaderTrigger({ isExpanded = false, setIsExpanded }) {
	return (
		<Button onClick={() => setIsExpanded(!isExpanded)} className='hidden max-md:block' size='icon' variant='icon'>
			<svg width='24' height='24' viewBox='0 0 24 24' className='!w-10 !h-10 text-[--header-text]' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
				<path
					className={clsx("duration-200 ease-out origin-center", isExpanded ? "translate-y-0 rotate-45" : "translate-y-1 rotate-0")}
					d='M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12V12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12V12Z'
				/>
				<path
					className={clsx("duration-200 ease-out origin-center", isExpanded ? "translate-y-0 -rotate-45" : "-translate-y-1 rotate-0")}
					d='M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12V12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12V12Z'
				/>
			</svg>
		</Button>
	);
}
