"use client";

import { useState } from "react";

export default function Home() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="w-full max-w-[1000px] relative">
			<header className="flex justify-between fixed w-[94%] max-w-[1000px] py-4 bg-amber-100">
				<a
					className="cursor-pointer transition-all hover:text-amber-800 block"
					href="#"
				>
					Nate Corpuz
				</a>
				<div className="lg:hidden pr-2">
					<p onClick={() => setIsMenuOpen(true)}>Menu</p>
					{isMenuOpen && (
						<div
							className="absolute top-0 right-0 w-[250px] h-screen bg-amber-50 flex flex-col p-8 gap-8"
							onClick={() => setIsMenuOpen(false)}
						>
							<a
								href="#"
								className="font-[family-name:var(--font-geist-mono)] text-amber-800 transition-all hover:font-bold hover:tracking-wide cursor-pointer"
							>
								Home
							</a>
							<a
								href="#projects"
								className="font-[family-name:var(--font-geist-mono)] text-amber-800 transition-all hover:font-bold hover:tracking-wide cursor-pointer"
							>
								Work
							</a>
							<a
								href="#about"
								className="font-[family-name:var(--font-geist-mono)] text-amber-800 transition-all hover:font-bold hover:tracking-wide cursor-pointer"
							>
								About
							</a>
							<a
								href="#contact"
								className="font-[family-name:var(--font-geist-mono)] text-amber-800 transition-all hover:font-bold hover:tracking-wide cursor-pointer"
							>
								Contact
							</a>
						</div>
					)}
				</div>
				<div className="gap-16 hidden lg:flex">
					<a
						href="#"
						className="font-[family-name:var(--font-geist-mono)] text-amber-800 transition-all hover:font-bold hover:tracking-wide cursor-pointer"
					>
						Home
					</a>
					<a
						href="#work"
						className="font-[family-name:var(--font-geist-mono)] text-amber-800 transition-all hover:font-bold hover:tracking-wide cursor-pointer"
					>
						Work
					</a>
					<a
						href="#about"
						className="font-[family-name:var(--font-geist-mono)] text-amber-800 transition-all hover:font-bold hover:tracking-wide cursor-pointer"
					>
						About
					</a>
					<a
						href="#contact"
						className="font-[family-name:var(--font-geist-mono)] text-amber-800 transition-all hover:font-bold hover:tracking-wide cursor-pointer"
					>
						Contact
					</a>
				</div>
			</header>
			<main className="py-36 flex flex-col">
				<div
					className="flex flex-col sm:flex-row gap-2 sm:items-end justify-between"
					id="#"
				>
					<p className="text-2xl sm:text-3xl md:text-6xl font-[family-name:var(--font-geist-mono)]">
						Hi, I{"'"}m Nate.
					</p>
					<div className="text-md nd:text-xl flex gap-1 sm:gap-2 items-center">
						<p>A</p>
						<p className="px-2 font-light bg-yellow-800 rounded-xl text-amber-100 font-[family-name:var(--font-geist-mono)]">
							fervent disciple
						</p>
						<p>of helping people</p>
					</div>
				</div>
				<div className="flex flex-col gap-6 pt-24" id="work">
					<p className="text-2xl font-[family-name:var(--font-geist-mono)] text-gray-400">
						Work
					</p>
					<div className="flex flex-col gap-6 border p-4 sm:p-8 rounded-md border-black">
						<div className="flex flex-col gap-2">
							<p className="text-xl font-bold transition-all hover:text-yellow-600 w-max">
								5+ Years of Virtual Assistance
							</p>
							<p className="text-gray-500 text-xs transition-all hover:text-yellow-600 w-max">
								2019 - present
							</p>
						</div>
						<p className="font-light">
							Having helped various businesses such as Shopify stores, SMBs, and
							startups, I am skilled in helping both from the frontline and
							management.
						</p>
						<div className="flex flex-col lg:flex-row justify-between gap-8">
							<div className="flex lg:gap-4 lg:w-[300px] w-full flex-col lg:flex-row gap-4">
								<p className="text-gray-400 text-xs">Key Skills</p>
								<ul className="flex flex-col gap-2 font-[family-name:var(--font-geist-mono)] text-sm">
									<li>Chat and Email Customer Support</li>
									<li>Managerial Skills</li>
									<li>Project Management</li>
									<li>SOP Creation</li>
									<li>Full Stack Web Development</li>
									<li>Graphic Design</li>
									<li>Web Design</li>
									<li>Digital Marketing</li>
								</ul>
							</div>
							<div className="flex lg:gap-4 lg:w-[300px] w-full flex-col lg:flex-row gap-4">
								<p className="text-gray-400 text-xs">Primary Tools</p>
								<ul className="flex flex-col gap-2 font-[family-name:var(--font-geist-mono)] text-sm">
									<li>HubSpot</li>
									<li>Shopify</li>
									<li>Google Suite</li>
									<li>Humanity {"(TCP Software)"}</li>
								</ul>
							</div>
							<div className="flex lg:gap-4 lg:w-[300px] w-full flex-col lg:flex-row gap-4">
								<p className="text-gray-400 text-xs">Secondary Tools</p>
								<ul className="flex flex-col gap-2 font-[family-name:var(--font-geist-mono)] text-sm">
									<li>Figma</li>
									<li>Framer</li>
									<li>Premiere Pro</li>
									<li>Canva</li>
									<li>HTML, CSS, JavaScript</li>
									<li>Next.js, MERN</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-6 border p-4 sm:p-8 rounded-md border-black">
						<div className="flex flex-col gap-2">
							<p className="text-xl font-bold transition-all hover:text-yellow-600 w-max">
								6 Years of Email Customer Support
							</p>
							<p className="text-gray-500 text-xs transition-all hover:text-yellow-600 w-max">
								2013 - 2019
							</p>
						</div>
						<p className="font-light">
							Having worked with big brands such as Uber, Spotify, Lyft, and
							Google, I possess world-class skills in providing exceptional
							customer support experience through email.
						</p>
						<div className="flex flex-col lg:flex-row justify-between gap-8">
							<div className="flex lg:gap-4 lg:w-[300px] w-full flex-col lg:flex-row gap-4">
								<p className="text-gray-400 text-xs">Key Skills</p>
								<ul className="flex flex-col gap-2 font-[family-name:var(--font-geist-mono)] text-sm">
									<li>Email Customer Support</li>
									<li>CRM Proficiency</li>
									<li>Managerial Skills</li>
									<li>High KPI Consistency</li>
									<li>Tech Product Expertise</li>
								</ul>
							</div>
							<div className="flex lg:gap-4 lg:w-[300px] w-full flex-col lg:flex-row gap-4">
								<p className="text-gray-400 text-xs">Primary Tools</p>
								<ul className="flex flex-col gap-2 font-[family-name:var(--font-geist-mono)] text-sm">
									<li>Zendesk</li>
									<li>Salesforce</li>
									<li>Company-specific CRMs</li>
								</ul>
							</div>
							<div className="flex lg:gap-4 lg:w-[300px] w-full flex-col lg:flex-row gap-4">
								<p className="text-gray-400 text-xs">Secondary Tools</p>
								<ul className="flex flex-col gap-2 font-[family-name:var(--font-geist-mono)] text-sm">
									<li>Google Suite</li>
									<li>Workday</li>
									<li>Peoplesoft</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-6 pt-24" id="about">
					<p className="text-2xl font-[family-name:var(--font-geist-mono)] text-gray-400">
						About Me
					</p>
					<div className="flex flex-col gap-4 font-light">
						<p>
							Having been raised by a computer engineer father with unmatched
							principles, I developed a relentless pursuit for selflessness and
							fascination for technology at a young age.
						</p>
						<p>
							My passion for being an instrument of help to others and anything
							relating to technology all went to working in the tech sector as
							an email customer support.
						</p>
						<p>
							I channel my passion for helping people through email customer
							support and virtual assistance.
						</p>
						<p>
							These fields give me the opportuntiy to be an instrument of help
							to others that results in a perpetual cycle of self-validation and
							self-improvement.
						</p>
						<p>
							If you are interested in working with someone who is as dedicated
							and passionate as me in helping others, then you are at the right
							place.
						</p>
						<p>Send me a message so we can get the ball rolling! {"=)"}</p>
					</div>
				</div>
			</main>
			<footer className="flex flex-col gap-36 pt-16 pb-8" id="contact">
				<div className="flex flex-col gap-2 lg:flex-row lg:justify-between lg:items-center">
					<p className="text-2xl sm:text-6xl font-[family-name:var(--font-geist-mono)] text-gray-400">
						Let{"'"}s Chat
					</p>
					<p className="px-2 py-1 text-amber-100 bg-amber-800 rounded-lg w-max">
						nathanelcorpuz@gmail.com
					</p>
				</div>
				<div className="flex justify-center gap-4">
					<p className="text-xs text-gray-400">2024</p>
					<a
						href="https://github.com/nathanelcorpuz/portfolio"
						target="_blank"
						className="text-xs text-gray-400 underline"
					>
						Source Code
					</a>
				</div>
			</footer>
		</div>
	);
}
