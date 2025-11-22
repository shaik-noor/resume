export const metadata = {
	title: "Work Experience — Shaik Noor",
};

import Image from "next/image";
export default function WorkExperiencePage() {
	const roles = [
		{
			company: "Informatica",
			title: "Software Engineer",
			period: "Aug 2023 – Present",
			logo: "/assets/informatica_logo.jpg",
			summary:
				"Provide L2/L3 support for PowerCenter and IDMC across performance, connectivity, configuration, and upgrades.",
			highlights: [
				"Provide L2/L3 technical support for Informatica PowerCenter and IDMC, troubleshooting complex customer issues across performance, connectivity, configuration, and upgrade scenarios.",
				"Analyze stack traces, logs, and system configurations to identify root causes and drive permanent fixes in collaboration with Product Specialists and R&D teams.",
				"Lead the implementation and validation of Emergency Bug Fix (EBF) releases, ensuring critical patches are tested, documented, and rolled out with minimal customer impact.",
				"Develop and follow repeatable debugging playbooks to reduce mean time to resolution (MTTR) and improve case handling quality.",
				"Currently upskilling on IDMC Administration Fundamentals and PowerCenter to Informatica Cloud migration through Informatica internal training to support customers on their cloud-migration journey.",
			],
		},
		{
			company: "Informatica",
			title: "Technical Support Engineer",
			period: "Jul 2020 – Jul 2023",
			logo: "/assets/informatica_logo.jpg",
			summary: "Supported the Data as a Service team at scale.",
			highlights: [
				"Supported the Data as a Service (DaaS) team, helping customers validate and verify postal addresses, emails, and phone numbers at scale.",
				"Resolved technical cases involving API integrations, data quality issues, and configuration questions, ensuring high availability and accuracy of DaaS services.",
				"Created and maintained internal documentation and troubleshooting notes to streamline case handling for the wider support team.",
				"Built small automation scripts (e.g., log parsing, quick checks) using Python/Unix tools to reduce repetitive work and improve response times.",
			],
		},
		{
			company: "F1 Info Solutions & Services (Flipkart Subsidiary)",
			title: "Senior Engineer",
			period: "Oct 2018 – May 2019 • 7 months",
			logo: "/assets/f1_info_solutions__services_private_limited_logo.jpg",
			summary:
				"Refurbished and serviced electronic devices as part of the Flipkart refurbishing program.",
			highlights: [
				"Refurbished and serviced electronic devices as part of the Flipkart refurbishing program, focusing on quality and turnaround time.",
				"Conducted technical training for new team members and introduced process improvements that reduced repair TAT by ~25%.",
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
