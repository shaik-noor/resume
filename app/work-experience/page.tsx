export const metadata = {
	title: "Work Experience - Shaik Noor",
	alternates: { canonical: "/work-experience" },
};

import Image from "next/image";
export default function WorkExperiencePage() {
	const roles = [
		{
			company: "Informatica",
			title: "Software Engineer",
			period: "Aug 2023 - Current",
			logo: "/assets/informatica_logo.jpg",
			summary:
				"Provide L2/L3 technical support for Informatica PowerCenter and IDMC (IICS) for global enterprise customers.",
			highlights: [
				{
					id: "se-1",
					content: (
						<>
							Provide <strong className="font-semibold">L2/L3 technical support</strong> for Informatica PowerCenter (10.4–10.5.9, including 10.5.4) and IDMC (IICS) for global enterprise customers.
						</>
					),
				},
				{
					id: "se-2",
					content: (
						<>
							Analyze <strong className="font-semibold">session logs, workflow logs, stack traces</strong>, and system configurations to identify root causes of ETL failures and performance issues.
						</>
					),
				},
				{
					id: "se-3",
					content: (
						<>
							Work with customer development teams to <strong className="font-semibold">debug and validate mappings, sessions, and workflows</strong>, including parameterization, connection objects, and session properties.
						</>
					),
				},
				{
					id: "se-4",
					content: (
						<>
							Collaborate closely with Product Specialists and R&D to <strong className="font-semibold">triage product defects, validate fixes</strong>, and drive Emergency Bug Fix (EBF) implementations with minimal downtime.
						</>
					),
				},
				{
					id: "se-5",
					content: (
						<>
							Assist customers during <strong className="font-semibold">upgrades and migration scenarios</strong> (PowerCenter to higher versions / IDMC), including regression analysis of critical ETL jobs.
						</>
					),
				},
				{
					id: "se-6",
					content: (
						<>
							Create and improve <strong className="font-semibold">runbooks, troubleshooting playbooks, and KB articles</strong> for recurring ETL and platform issues, accelerating resolution time and knowledge reuse.
						</>
					),
				},
				{
					id: "se-7",
					content: (
						<>
							Currently completing internal training on: <strong className="font-semibold">IDMC: Administration Fundamentals</strong> and <strong className="font-semibold">PowerCenter to Informatica Cloud – Migration Training</strong>.
						</>
					),
				},
			],
		},
		{
			company: "Informatica",
			title: "Technical Support Engineer",
			period: "Jul 2020 - Jul 2023",
			logo: "/assets/informatica_logo.jpg",
			summary:
				"Served as a key technical contact for global customers using Informatica Data as a Service (DaaS).",
			highlights: [
				{
					id: "tse-1",
					content: (
						<>
							Served as a key technical contact for global customers using <strong className="font-semibold">Informatica Data as a Service (DaaS)</strong>, helping validate and verify postal addresses, email IDs, and phone numbers at scale.
						</>
					),
				},
				{
					id: "tse-2",
					content: (
						<>
							Documented <strong className="font-semibold">recurring issues, troubleshooting steps, and best practices</strong> to help onboard new team members and improve support consistency.
						</>
					),
				},
			],
		},
		{
			company: "F1 Info Solutions & Services Pvt Ltd",
			title: "Senior Engineer",
			period: "Oct 2018 - May 2019",
			logo: "/assets/f1_info_solutions__services_private_limited_logo.jpg",
			summary:
				"Led technical training sessions and supported the refurbishing of electronic devices.",
			highlights: [
				{
					id: "f1-1",
					content: (
						<>
							Led <strong className="font-semibold">technical training sessions</strong> and supported the refurbishing of electronic devices for Flipkart’s refurbish program.
						</>
					),
				},
				{
					id: "f1-2",
					content: (
						<>
							Optimized repair workflows and introduced <strong className="font-semibold">process improvements</strong> that reduced turnaround time by ~25% while maintaining quality and reliability.
						</>
					),
				},
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
										<li key={h.id}>{h.content}</li>
									))}
								</ul>
								{role.highlights.length > 2 && (
									<details className="mt-2">
										<summary className="text-xs cursor-pointer select-none text-primary hover:underline">
											Show more
										</summary>
										<ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
											{role.highlights.slice(2).map((h) => (
												<li key={h.id}>{h.content}</li>
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
