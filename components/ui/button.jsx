export default function Button({ label = "", type = "default" }) {
	return (
		<button className='text-white bg-blue hover:opacity-85 text-sm rounded-full px-6 py-3 font-medium duration-200 ease-[cubic-bezier(0.4, 0, 0.6, 1)]'></button>
	);
}
