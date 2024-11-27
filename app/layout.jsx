import localFont from "next/font/local";
import { Analytics } from '@vercel/analytics/next';
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import Head from "next/head";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});

import "./globals.css";

export const metadata = {
	title: "Slipe — Blogging app",
	description: "A blogging app with a unique post system that is perfect for blog browsing.",
	author: "Slipe Team",
	url: "https://slipe.fun",
	image: "https://cdn.slipe.fun/site/static/banners/slipe_banner.png",
	keywords:
		"blogging app, blog browsing, unique posts, discover blogs, best blogging platform, blog reader, blog discovery app, explore blogs, creative writing, personalized blogs", // Смотри пояснение ниже
	themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<Head>
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
				<meta name="keywords" content={metadata.keywords} />
				<meta name="author" content={metadata.author} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content={metadata.themeColor} />

				<meta property="og:title" content={metadata.title} />
				<meta property="og:description" content={metadata.description} />
				<meta property="og:url" content={metadata.url} />
				<meta property="og:image" content={metadata.image} />
				<meta property="og:type" content="website" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={metadata.title} />
				<meta name="twitter:description" content={metadata.description} />
				<meta name="twitter:image" content={metadata.image} />
				<meta name="twitter:creator" content="@SlipeApp" />

				<link rel="canonical" href={metadata.url} />

				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
			</Head>
			<body className={`${geistSans.variable} font-[family-name:var(--font-geist-sans)] antialiased`}>
				<Header />
				{children}
				<Footer />
				<Analytics/>
			</body>
		</html>
	);
}