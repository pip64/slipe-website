import Link from "next/link";
import { Dialog, DialogContent, DialogTitle, DialogTrigger, DialogDescription, DialogHeader, DialogFooter } from "../ui/dialog";
import Image from "next/image";

export default function DownloadDialog({ children }) {
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent className='w-fit rounded-[1.5rem]'>
				<DialogHeader>
					<DialogTitle className='text-center font-semibold text-2xl'>Scan QR-code to download</DialogTitle>
					<DialogDescription className='text-md w-[21rem] font-medium mt-1 text-center text-black/50'>
						Currently we support only phones based on Android
					</DialogDescription>
				</DialogHeader>
				<div className='w-full flex justify-center'>
					<div className='bg-black/[0.08] p-6 rounded-[1.75rem]'>
						<Image alt="QR-download" src="android-qr.svg" width={224} height={224}/>
					</div>
				</div>
				<DialogFooter>
					<p className='text-black/50 text-md'>
						You are on IOS?{" "}
						<Link href='/soon' className='text-primary font-medium duration-200 ease-out hover:opacity-75'>
							Click here
						</Link>
					</p>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
