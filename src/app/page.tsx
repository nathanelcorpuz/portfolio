export default function Home() {
	return (
		<div className="max-w-[1000px]">
			<header className="flex justify-between fixed w-[1000px] py-4 bg-amber-100">
				<a
					className="cursor-pointer transition-all hover:text-amber-800"
					href="#"
				>
					Nate Corpuz
				</a>
				<div className="flex gap-16">
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
						Projects
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
				<div className="flex gap-2 items-end justify-between" id="#">
					<p className="text-6xl font-[family-name:var(--font-geist-mono)]">
						Hi, I{"'"}m Nate.
					</p>
					<div className="text-xl flex gap-2 items-center">
						<p>A</p>
						<p className="px-2 font-light bg-yellow-800 rounded-xl text-amber-100">
							full-stack
						</p>
						<p>web developer</p>
					</div>
				</div>
				<div className="flex flex-col gap-6 pt-24" id="projects">
					<p className="text-2xl font-[family-name:var(--font-geist-mono)] text-gray-400">
						Projects
					</p>
					<div className="flex flex-col gap-6 border p-8 rounded-md border-black">
						<a
							href="https://orium.vercel.app"
							target="_blank"
							className="text-xl underline transition-all hover:text-yellow-600 w-max"
						>
							Orium
						</a>
						<p className="font-light">
							An MVP web app that forecasts and organizes personal finances.
						</p>
						<div className="flex justify-between">
							<div className="flex gap-4 w-[300px]">
								<p className="text-gray-400 text-xs">Key Features</p>
								<ul className="flex flex-col gap-2 font-[family-name:var(--font-geist-mono)] text-sm">
									<li>Elegant UI</li>
									<li>Auth workflows</li>
									<li>Email verification</li>
									<li>Dashboard view</li>
									<li>Settings and Preferences</li>
									<li>Fully Typed</li>
								</ul>
							</div>
							<div className="flex gap-4 w-[300px]">
								<p className="text-gray-400 text-xs">Libraries</p>
								<ul className="flex flex-col gap-2 font-[family-name:var(--font-geist-mono)] text-sm">
									<li>Tanstack Query</li>
									<li>TailwindCSS</li>
									<li>TypeScript</li>
									<li>nodemailer</li>
									<li>date-fns</li>
									<li>bcrypt</li>
									<li>jsonwebtoken</li>
									<li>mongoose</li>
									<li>password-validator</li>
								</ul>
							</div>
							<div className="flex gap-4 w-[300px]">
								<p className="text-gray-400 text-xs">Architecture</p>
								<ul className="flex flex-col gap-2 font-[family-name:var(--font-geist-mono)] text-sm">
									<li>Next.js</li>
									<li>Vercel</li>
									<li>MongoDB</li>
									<li>GitHub</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-6 border p-8 rounded-md border-black">
						<a
							href="https://nmealer.vercel.app"
							target="_blank"
							className="text-xl underline transition-all hover:text-yellow-600 w-max"
						>
							Mealer
						</a>
						<p className="font-light">
							A web app that organizes recipes and daily meals.
						</p>
						<div className="flex justify-between">
							<div className="flex gap-4 w-[300px]">
								<p className="text-gray-400 text-xs">Key Features</p>
								<ul className="flex flex-col gap-2 font-[family-name:var(--font-geist-mono)] text-sm">
									<li>Simple UI</li>
									<li>Loaders</li>
									<li>Route groups</li>
									<li>Dynamic routes</li>
									<li>Fully Typed</li>
								</ul>
							</div>
							<div className="flex gap-4 w-[300px]">
								<p className="text-gray-400 text-xs">Libraries</p>
								<ul className="flex flex-col gap-2 font-[family-name:var(--font-geist-mono)] text-sm">
									<li>Tanstack Query</li>
									<li>TailwindCSS</li>
									<li>TypeScript</li>
									<li>bcrypt</li>
									<li>jsonwebtoken</li>
									<li>mongoose</li>
									<li>password-validator</li>
									<li>slugify</li>
								</ul>
							</div>
							<div className="flex gap-4 w-[300px]">
								<p className="text-gray-400 text-xs">Architecture</p>
								<ul className="flex flex-col gap-2 font-[family-name:var(--font-geist-mono)] text-sm">
									<li>Next.js</li>
									<li>Vercel</li>
									<li>MongoDB</li>
									<li>GitHub</li>
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
							Raised in a technological home by a computer engineer father with
							an internet café business, my passion for software naturally
							arose.
						</p>
						<p>
							After working in customer service and virtual assistance for 11
							years while coding on the side for 5 years, I am finally turning
							my passion for coding into a career as a full-stack web developer.
						</p>
						<p>
							Outside coding, I love going to the mall, morning walks, video
							games, guitar, and drums.
						</p>
					</div>
					<div className="flex flex-col gap-4">
						<p className="text-2xl font-[family-name:var(--font-geist-mono)] text-gray-400">
							My Tech Stack
						</p>
						<p className="font-light">
							React.js, Next.js, MongoDB, Vercel, TypeScript, TailwindCSS,
							Postman, TanStack Query, Node.js, Visual Studio Code, Git/GitHub
						</p>
					</div>
				</div>
			</main>
			<footer
				className="flex justify-between items-center pt-16 pb-36"
				id="contact"
			>
				<p className="text-6xl font-[family-name:var(--font-geist-mono)] text-gray-400">
					Let{"'"}s Chat
				</p>
				<p className="px-2 py-1 text-amber-100 bg-amber-800 rounded-lg">
					nathanelcorpuz@gmail.com
				</p>
			</footer>
		</div>
	);
}
