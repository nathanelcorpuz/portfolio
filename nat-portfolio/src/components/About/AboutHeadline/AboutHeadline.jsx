import classes from "./AboutHeadline.module.css";

const AboutHeadline = () => {
	return (
		<>
			<div className={classes["about-wrapper"]}>
				<h1 className="main-item">Hi, I'm Nathanel</h1>
				<p className={classes["about-description"]}>
					I'm a self-taught full stack web developer from the Philippines.
				</p>
				<p className={classes["about-description"]}>
					I have 8 cats and 1 dog. I love playing drums casually, reading about career and personal development, watching comedy, philosophical podcasts, and play PC games on my free time.
				</p>
			</div>
		</>
	);
};

export default AboutHeadline;
