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
			period: "Aug 2023 – Present",
			logo: "/assets/informatica_logo.jpg",
			summary:
				"Provide L2/L3 support for PowerCenter and IDMC across performance, connectivity, configuration, and upgrades.",
			highlights: [
				{
					id: "se-1",
					content: (
						<>
							Provide <strong className="font-semibold">L2/L3</strong> technical
							support for Informatica{" "}
							<strong className="font-semibold">PowerCenter</strong> and{" "}
							<strong className="font-semibold">IDMC</strong>, troubleshooting
							complex customer issues across{" "}
							<strong className="font-semibold">performance</strong>,{" "}
							<strong className="font-semibold">connectivity</strong>,{" "}
							<strong className="font-semibold">configuration</strong>, and{" "}
							<strong className="font-semibold">upgrade</strong> scenarios.
						</>
					),
				},
				{
					id: "se-2",
					content: (
						<>
							Analyze <strong className="font-semibold">stack traces</strong>,{" "}
							<strong className="font-semibold">logs</strong>, and system
							configurations to identify{" "}
							<strong className="font-semibold">root causes</strong> and drive{" "}
							<strong className="font-semibold">permanent fixes</strong> in
							collaboration with{" "}
							<strong className="font-semibold">Product Specialists</strong> and{" "}
							<strong className="font-semibold">R&amp;D</strong> teams.
						</>
					),
				},
				{
					id: "se-3",
					content: (
						<>
							Lead the implementation and validation of{" "}
							<strong className="font-semibold">Emergency Bug Fix (EBF)</strong>{" "}
							releases, ensuring{" "}
							<strong className="font-semibold">critical patches</strong> are{" "}
							<strong className="font-semibold">tested</strong>,{" "}
							<strong className="font-semibold">documented</strong>, and{" "}
							<strong className="font-semibold">rolled out</strong> with{" "}
							<strong className="font-semibold">minimal customer impact</strong>
							.
						</>
					),
				},
				{
					id: "se-4",
					content: (
						<>
							Develop and follow repeatable{" "}
							<strong className="font-semibold">debugging playbooks</strong> to
							reduce{" "}
							<strong className="font-semibold">
								mean time to resolution (MTTR)
							</strong>{" "}
							and improve{" "}
							<strong className="font-semibold">case handling quality</strong>.
						</>
					),
				},
				{
					id: "se-5",
					content: (
						<>
							Currently upskilling on{" "}
							<strong className="font-semibold">
								IDMC Administration Fundamentals
							</strong>{" "}
							and{" "}
							<strong className="font-semibold">
								PowerCenter to Informatica Cloud migration
							</strong>{" "}
							through Informatica{" "}
							<strong className="font-semibold">internal training</strong> to
							support customers on their cloud-migration journey.
						</>
					),
				},
			],
		},
		{
			company: "Informatica",
			title: "Technical Support Engineer",
			period: "Jul 2020 – Jul 2023",
			logo: "/assets/informatica_logo.jpg",
			summary: "Supported the Data as a Service team at scale.",
			highlights: [
				{
					id: "tse-1",
					content: (
						<>
							Supported the{" "}
							<strong className="font-semibold">
								Data as a Service (DaaS)
							</strong>{" "}
							team, helping customers{" "}
							<strong className="font-semibold">validate and verify</strong>{" "}
							postal addresses, emails, and phone numbers{" "}
							<strong className="font-semibold">at scale</strong>.
						</>
					),
				},
				{
					id: "tse-2",
					content: (
						<>
							Resolved technical cases involving{" "}
							<strong className="font-semibold">API integrations</strong>,{" "}
							<strong className="font-semibold">data quality issues</strong>,
							and{" "}
							<strong className="font-semibold">configuration questions</strong>
							, ensuring{" "}
							<strong className="font-semibold">high availability</strong> and{" "}
							<strong className="font-semibold">accuracy</strong> of DaaS
							services.
						</>
					),
				},
				{
					id: "tse-3",
					content: (
						<>
							Created and maintained{" "}
							<strong className="font-semibold">internal documentation</strong>{" "}
							and{" "}
							<strong className="font-semibold">troubleshooting notes</strong>{" "}
							to{" "}
							<strong className="font-semibold">
								streamline case handling
							</strong>{" "}
							for the wider support team.
						</>
					),
				},
				{
					id: "tse-4",
					content: (
						<>
							Built small{" "}
							<strong className="font-semibold">automation scripts</strong>{" "}
							(e.g., log parsing, quick checks) using{" "}
							<strong className="font-semibold">Python/Unix tools</strong> to{" "}
							<strong className="font-semibold">reduce repetitive work</strong>{" "}
							and{" "}
							<strong className="font-semibold">improve response times</strong>.
						</>
					),
				},
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
				{
					id: "f1-1",
					content: (
						<>
							Refurbished and serviced electronic devices as part of the{" "}
							<strong className="font-semibold">
								Flipkart refurbishing program
							</strong>
							, focusing on <strong className="font-semibold">quality</strong>{" "}
							and <strong className="font-semibold">turnaround time</strong>.
						</>
					),
				},
				{
					id: "f1-2",
					content: (
						<>
							Conducted{" "}
							<strong className="font-semibold">technical training</strong> for
							new team members and introduced{" "}
							<strong className="font-semibold">process improvements</strong>{" "}
							that reduced repair <strong className="font-semibold">TAT</strong>{" "}
							by ~25%.
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
