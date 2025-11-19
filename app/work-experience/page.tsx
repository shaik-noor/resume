export const metadata = {
	title: "Work Experience — Shaik Noor",
};

import Image from "next/image";
export default function WorkExperiencePage() {
	const roles = [
		{
			company: "Informatica",
			title: "Software Engineer",
			period: "Aug 2023 – Present • 2 years 3 months",
			logo: "/assets/informatica_logo.jpg",
			summary:
				"Providing expert-level technical assistance and troubleshooting for Informatica PowerCenter and IDMC products, ensuring optimal performance and customer satisfaction.",
			highlights: [
				"Collaborating with Product Specialist teams to analyze and resolve complex technical issues through detailed investigation of stack traces, logs, and system configurations.",
				"Working closely with R&D teams to identify, document, and address product bugs and vulnerabilities, contributing to enhanced product stability and security.",
				"Leading the implementation and testing of Emergency Bug Fix (EBF) releases, ensuring rapid deployment of critical fixes to maintain system reliability.",
				"Developing and implementing efficient debugging strategies to minimize customer downtime and optimize issue resolution processes.",
			],
		},
		{
			company: "Informatica",
			title: "Technical Support Engineer",
			period: "Jul 2020 – Jul 2023 • 3 years",
			logo: "/assets/informatica_logo.jpg",
			summary:
				"Worked with the Data as a Service team to validate and verify postal addresses, emails, and phone numbers.",
			highlights: [
				"Assisted clients with technical issues, documentation, and case escalations.",
				"Developed automation scripts to improve workflow efficiency.",
			],
		},
		{
			company: "F1 Info Solutions & Services (Flipkart Subsidiary)",
			title: "Senior Engineer",
			period: "Oct 2018 – May 2019 • 7 months",
			logo: "/assets/f1_info_solutions__services_private_limited_logo.jpg",
			summary:
				"Part of the refurbishing and servicing team, responsible for restoring and servicing electronic devices.",
			highlights: [
				"Led technical training sessions for new team members.",
				"Optimized repair processes reducing turnaround time by 25%.",
			],
		},
	];

	return (
		<section className="mx-auto max-w-4xl space-y-6">
			<header>
				<h1 className="text-2xl md:text-3xl font-bold">Work Experience</h1>
				<p className="text-sm text-muted-foreground">
					Key roles, responsibilities, and achievements.
				</p>
			</header>

			<div className="space-y-4">
				{roles.map((role) => (
					<article
						key={`${role.company}-${role.title}`}
						className="rounded-lg border p-4 transition hover:bg-accent/40"
					>
						<div className="flex gap-4">
							<div className="shrink-0">
								<Image
									src={role.logo}
									alt={`${role.company} logo`}
									width={48}
									height={48}
									unoptimized
									className="rounded object-contain border"
								/>
							</div>
							<div className="flex-1">
								<h2 className="text-base md:text-lg font-semibold">
									{role.title}{" "}
									<span className="text-muted-foreground">
										· {role.company}
									</span>
								</h2>
								<div className="mt-1 text-xs text-muted-foreground flex items-center gap-2">
									<span>{role.period}</span>
								</div>
								<p className="mt-2 text-sm text-muted-foreground">
									{role.summary}
								</p>

								{/* Highlights — show first 2 by default, rest under "Show more" */}
								<ul className="mt-3 list-disc pl-5 space-y-1 text-sm">
									{role.highlights.slice(0, 2).map((h) => (
										<li key={h}>{h}</li>
									))}
								</ul>
								{role.highlights.length > 2 && (
									<details className="mt-2">
										<summary className="text-xs cursor-pointer select-none text-primary hover:underline">
											Show more
										</summary>
										<ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
											{role.highlights.slice(2).map((h) => (
												<li key={h}>{h}</li>
											))}
										</ul>
									</details>
								)}
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
