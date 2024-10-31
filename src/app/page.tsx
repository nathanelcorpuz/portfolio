export default function Home() {
	return (
		<div className="max-w-[1000px]">
			<header className="flex justify-between">
				<p className="">Nate Corpuz</p>
				<div className="flex gap-[20px]">
					<p>Home</p>
					<p>About</p>
					<p>Projects</p>
					<p>Contact</p>
				</div>
			</header>
			<main className="">
				<div>
					<p className="text-2xl font-[family-name:var(--font-geist-mono)]">
						Hi, I{"'"}m Nate.
					</p>
					<p>A full-stack web developer.</p>
				</div>
				<div>
					<p className="text-2xl font-[family-name:var(--font-geist-mono)]">
						About Me
					</p>
					<div>
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
					<p className="text-2xl font-[family-name:var(--font-geist-mono)]">
						My Tech Stack
					</p>
					<p>
						React.js, Next.js, MongoDB, Vercel, TypeScript, TailwindCSS,
						Postman, TanStack Query, Node.js, Visual Studio Code, Git/GitHub
					</p>
				</div>
				<div>
					<p className="text-2xl font-[family-name:var(--font-geist-mono)]">
						Projects
					</p>
					<div>
						<a href="https://orium.vercel.app" target="_blank">
							Orium
						</a>
						<p>
							An MVP web app that forecasts and organizes personal finances.
						</p>
						<p>Key Features</p>
						<ul>
							<li>Elegant UI</li>
							<li>Auth workflows with nodemailer</li>
							<li>Dashboard view</li>
							<li>Settings and Preferences</li>
							<li>Fully Typed</li>
						</ul>
						<p>Libraries</p>
						<ul>
							<li>Tanstack Query</li>
							<li>TailwindCSS</li>
							<li>TypeScript</li>
							<li>date-fns</li>
							<li>bcrypt</li>
							<li>jsonwebtoken</li>
							<li>mongoose</li>
							<li>password-validator</li>
						</ul>
						<p>Architecture</p>
						<ul>
							<li>Next.js</li>
							<li>Vercel</li>
							<li>MongoDB</li>
							<li>GitHub</li>
						</ul>
					</div>
					<div>
						<p>Mealer</p>
						<p>A web app that organizes recipes and daily meals</p>
						<p>Key Features</p>
						<ul>
							<li>Simple UI</li>
							<li>Usage of loaders</li>
							<li>Usage of route groups and dynamic routes</li>
							<li>Fully typed</li>
						</ul>
						<p>Libraries</p>
						<ul>
							<li>Tanstack Query</li>
							<li>TailwindCSS</li>
							<li>TypeScript</li>
							<li>bcrypt</li>
							<li>jsonwebtoken</li>
							<li>mongoose</li>
							<li>password-validator</li>
							<li>slugify</li>
						</ul>
						<p>Architecture</p>
						<ul>
							<li>Next.js</li>
							<li>Vercel</li>
							<li>MongoDB</li>
							<li>GitHub</li>
						</ul>
					</div>
				</div>
				<div>
					<p className="text-2xl font-[family-name:var(--font-geist-mono)]">
						Contact Me
					</p>
					<p>I'd love to chat! You can reach me via nathanelcorpuz@gmail.com</p>
				</div>
			</main>
			<footer className="">
				<p>2024</p>
			</footer>
		</div>
	);
}
