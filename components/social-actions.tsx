"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

export default function SocialActions() {
	const goToGithub = () => {
		window.open("https://github.com/shaik-noor", "_blank");
	};

	const goToLinkedin = () => {
		window.open("https://www.linkedin.com/in/shaik-noor/", "_blank");
	};

	return (
		<div className="flex flex-wrap gap-2">
			<Button variant="outline" size="sm" onClick={goToGithub}>
				<Github className="mr-2 size-4" /> GitHub
			</Button>
			<Button variant="outline" size="sm" onClick={goToLinkedin}>
				<Linkedin className="mr-2 size-4" /> LinkedIn
			</Button>
		</div>
	);
}
