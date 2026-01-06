import { BriefcaseIcon, CalendarIcon, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn, StaggerContainer } from "@/components/ui/motion-wrapper";

export const metadata = {
	title: "Work Experience - Shaik Noor",
	description: "Professional career journey of Shaik Noor Mohammad",
	alternates: { canonical: "/work-experience" },
};

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
							Provide{" "}
							<strong className="font-semibold text-primary">
								L2/L3 technical support
							</strong>{" "}
							for Informatica PowerCenter (10.4–10.5.9, including 10.5.4) and
							IDMC (IICS) for global enterprise customers.
						</>
					),
				},
				{
					id: "se-2",
					content: (
						<>
							Analyze{" "}
							<strong className="font-semibold text-primary">
								session logs, workflow logs, stack traces
							</strong>
							, and system configurations to identify root causes of ETL
							failures and performance issues.
						</>
					),
				},
				{
					id: "se-3",
					content: (
						<>
							Work with customer development teams to{" "}
							<strong className="font-semibold text-primary">
								debug and validate mappings, sessions, and workflows
							</strong>
							, including parameterization, connection objects, and session
							properties.
						</>
					),
				},
				{
					id: "se-4",
					content: (
						<>
							Collaborate closely with Product Specialists and R&D to{" "}
							<strong className="font-semibold text-primary">
								triage product defects, validate fixes
							</strong>
							, and drive Emergency Bug Fix (EBF) implementations with minimal
							downtime.
						</>
					),
				},
				{
					id: "se-5",
					content: (
						<>
							Assist customers during{" "}
							<strong className="font-semibold text-primary">
								upgrades and migration scenarios
							</strong>{" "}
							(PowerCenter to higher versions / IDMC), including regression
							analysis of critical ETL jobs.
						</>
					),
				},
				{
					id: "se-6",
					content: (
						<>
							Create and improve{" "}
							<strong className="font-semibold text-primary">
								runbooks, troubleshooting playbooks, and KB articles
							</strong>{" "}
							for recurring ETL and platform issues, accelerating resolution
							time and knowledge reuse.
						</>
					),
				},
				{
					id: "se-7",
					content: (
						<>
							Currently completing internal training on:{" "}
							<strong className="font-semibold text-primary">
								IDMC: Administration Fundamentals
							</strong>{" "}
							and{" "}
							<strong className="font-semibold text-primary">
								PowerCenter to Informatica Cloud – Migration Training
							</strong>
							.
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
							Served as a key technical contact for global customers using{" "}
							<strong className="font-semibold text-primary">
								Informatica Data as a Service (DaaS)
							</strong>
							, helping validate and verify postal addresses, email IDs, and
							phone numbers at scale.
						</>
					),
				},
				{
					id: "tse-2",
					content: (
						<>
							Documented{" "}
							<strong className="font-semibold text-primary">
								recurring issues, troubleshooting steps, and best practices
							</strong>{" "}
							to help onboard new team members and improve support consistency.
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
							Led{" "}
							<strong className="font-semibold text-primary">
								technical training sessions
							</strong>{" "}
							and supported the refurbishing of electronic devices for
							Flipkart’s refurbish program.
						</>
					),
				},
				{
					id: "f1-2",
					content: (
						<>
							Optimized repair workflows and introduced{" "}
							<strong className="font-semibold text-primary">
								process improvements
							</strong>{" "}
							that reduced turnaround time by ~25% while maintaining quality and
							reliability.
						</>
					),
				},
			],
		},
	];

	return (
		<section className="mx-auto max-w-4xl space-y-8 py-8 px-4 sm:px-6">
			<StaggerContainer className="space-y-2 text-center md:text-left">
				<FadeIn>
					<h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
						Work Experience
					</h1>
				</FadeIn>
				<FadeIn>
					<p className="text-muted-foreground text-lg">
						A timeline of my professional journey and key achievements.
					</p>
				</FadeIn>
			</StaggerContainer>

			<StaggerContainer className="relative border-l-2 border-border/50 ml-3 md:ml-6 space-y-12 pb-12">
				{roles.map((role, index) => (
					<FadeIn
						key={`${role.company}-${role.title}`}
						delay={0.1 * index}
						className="relative pl-8 md:pl-12"
					>
						{/* Timeline Dot */}
						<div className="absolute -left-[5px] md:-left-[5px] top-6 h-3 w-3 rounded-full border-2 border-primary bg-background ring-4 ring-background" />

						<Card className="group overflow-hidden border-border/60 bg-card/50 shadow-sm hover:bg-card hover:shadow-md hover:border-primary/20 transition-all duration-300">
							<CardHeader className="pb-3 pt-5 px-5 md:px-6">
								<div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
									<div className="flex items-start gap-4">
										<div className="relative shrink-0 h-14 w-14 rounded-lg overflow-hidden border border-border shadow-sm group-hover:scale-105 transition-transform duration-300">
											<Image
												src={role.logo}
												alt={`${role.company} logo`}
												fill
												className="object-contain p-1 bg-white"
											/>
										</div>
										<div className="space-y-1.5">
											<CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
												{role.title}
											</CardTitle>
											<div className="text-base font-semibold text-muted-foreground flex items-center gap-2">
												<BriefcaseIcon className="w-4 h-4" />
												{role.company}
											</div>
										</div>
									</div>
									<Badge
										variant="secondary"
										className="w-fit flex items-center gap-1.5 px-3 py-1 text-sm font-medium bg-secondary/50"
									>
										<CalendarIcon className="w-3.5 h-3.5" />
										{role.period}
									</Badge>
								</div>
							</CardHeader>

							<CardContent className="px-5 md:px-6 pb-6 space-y-4">
								<p className="text-base text-muted-foreground leading-relaxed">
									{role.summary}
								</p>

								{/* Highlights Section */}
								<div className="space-y-3 pt-2">
									<h4 className="text-sm font-semibold tracking-wide uppercase text-muted-foreground/80 flex items-center gap-2">
										<CheckCircle2 className="w-4 h-4 text-primary" />
										Key Highlights
									</h4>
									<ul className="space-y-3">
										{role.highlights.map((h) => (
											<li
												key={h.id}
												className="text-sm text-muted-foreground/90 pl-2 border-l-2 border-primary/20 flex gap-3"
											>
												<span className="leading-relaxed">{h.content}</span>
											</li>
										))}
									</ul>
								</div>
							</CardContent>
						</Card>
					</FadeIn>
				))}
			</StaggerContainer>
		</section>
	);
}
