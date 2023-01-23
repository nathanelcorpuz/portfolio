import classes from "./ResumeText.module.css";

const ResumeText = () => {
	return (
		<>
			<div style={{paddingTop: "5rem", width: "250px", textAlign: "end"}}>
				<p className={classes["resume-description"]}>
					If you're interested in knowing about my technical skills and
					professional experience, you can check my resume by clicking the link below.
				</p>
				<a
					className={classes["resume-link"]}
					rel="noreferrer"
					target="_blank"
					href="https://docs.google.com/document/d/1WHHtXgm2mZgiRT7STz-rQ0gDfFe-_F1iWIc_GvNYZ_Y/view"
				>
					My Resume
				</a>
			</div>
		</>
	);
};

export default ResumeText;
