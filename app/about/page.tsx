import Image from "next/image";
import NoorImg from "@/public/assets/Noor.jpg";
import Link from "next/link";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SocialActions from "@/components/social-actions";

export const metadata = {
	title: "About - Shaik Noor",
	description: "About Shaik Noor Mohammad",
	alternates: { canonical: "/about" },
};

export default function AboutPage() {
	return (
		<section className="mx-auto max-w-6xl space-y-8">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Person",
						name: "Shaik Noor Mohammad",
						url: "https://resume.noruj.com/about",
						jobTitle:
							"Informatica PowerCenter Developer & Cloud Data Integration Engineer",
						worksFor: { "@type": "Organization", name: "Informatica" },
						sameAs: [
							"https://www.linkedin.com/in/shaik-noor/",
							"https://github.com/shaik-noor",
							"https://noruj.com",
						],
					}),
				}}
			/>
			<div className="grid gap-8 lg:grid-cols-[300px,1fr] items-start">
				<Card>
					<CardContent className="p-6 flex flex-col items-center">
						<div className="relative w-40 h-40 md:w-48 md:h-48">
							<Image
								src={NoorImg}
								alt="Shaik Noor"
								fill
								sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 192px"
								className="rounded-full border shadow-sm object-cover"
								priority
								placeholder="blur"
							/>
						</div>
						<h1 className="mt-4 text-xl md:text-2xl font-semibold text-center">
							Shaik Noor Mohammad
						</h1>
						<Badge variant="secondary" className="mt-2 text-xs text-center">
							Informatica PowerCenter Developer & Cloud Data Integration Engineer
						</Badge>
						<div className="mt-4 w-full flex flex-wrap gap-2 justify-center">
							<Link href="/resume">
								<Button size="sm">View Resume</Button>
							</Link>
							<Link href="/contact">
								<Button variant="outline" size="sm">
									Contact Me
								</Button>
							</Link>
							<SocialActions />
						</div>
					</CardContent>
				</Card>
				<div className="space-y-6">
					<div className="space-y-3 text-muted-foreground">
						<p>
							Informatica PowerCenter Developer & Cloud Data / Integration
							Engineer with <strong className="font-semibold">6+ years</strong>{" "}
							of experience in designing, troubleshooting, and optimizing ETL
							workflows across on-prem and cloud-connected environments. Strong
							hands-on exposure to Informatica PowerCenter versions 10.4 -
							10.5.9 (including 10.5.4), IDMC (IICS), SQL, and Unix/Linux shell
							scripting.
						</p>
						<p>
							Specialized in analyzing session/workflow logs,{" "}
							<strong className="font-semibold">debugging complex mappings</strong>,
							and working with product and R&D teams to stabilize large-scale
							ETL pipelines. Experienced in{" "}
							<strong className="font-semibold">
								performance tuning, data quality validation
							</strong>
							, and supporting production environments with tight SLAs.
							Currently upskilling in{" "}
							<strong className="font-semibold">IDMC administration</strong> and{" "}
							<strong className="font-semibold">
								PowerCenter-to-cloud migration
							</strong>
							.
						</p>
					</div>
					<div className="grid gap-3 sm:grid-cols-3">
						<Card>
							<CardContent>
								<div className="flex items-baseline justify-between">
									<span className="text-xs text-muted-foreground">
										Experience
									</span>
									<Badge variant="outline" className="text-[11px]">
										Growing
									</Badge>
								</div>
								<p className="mt-2 text-xl font-semibold tracking-tight">
									6+ years
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardContent>
								<span className="text-xs text-muted-foreground">Company</span>
								<p className="mt-2 text-xl font-semibold tracking-tight">
									Informatica
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardContent>
								<span className="text-xs text-muted-foreground">Focus</span>
								<p className="mt-2 text-xl font-semibold tracking-tight">
									PowerCenter · IDMC · Cloud ETL
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>

			<div className="grid gap-6">
				{/* Key Achievements */}
				<Card>
					<CardHeader className="border-b">
						<CardTitle>Key Achievements</CardTitle>
						<CardDescription>Impact delivered</CardDescription>
					</CardHeader>
					<CardContent>
						<ul className="mt-2 text-sm list-disc pl-5 space-y-1">
							<li>
								Resolved <strong className="font-semibold">~95%</strong> of
								client issues within 24 hours, significantly reducing
								escalations and improving customer satisfaction.
							</li>
							<li>
								Increased workflow efficiency by introducing{" "}
								<strong className="font-semibold">
									AI-assisted and scripted automations
								</strong>{" "}
								for repeated troubleshooting and operational tasks.
							</li>
							<li>
								Provided <strong className="font-semibold">technical mentoring</strong>{" "}
								to junior engineers, sharing best practices on debugging, log
								analysis, and stable ETL operations.
							</li>
						</ul>
					</CardContent>
				</Card>
			</div>

			<Card>
				<CardHeader className="border-b">
					<CardTitle>Tech Stack</CardTitle>
					<CardDescription>Tools and platforms I use</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="flex flex-wrap gap-2">
						{[
							"Informatica PowerCenter",
							"Informatica IDMC / IICS",
							"SQL (Oracle, SQL Server, PostgreSQL)",
							"Unix/Linux Shell Scripting",
							"Apache NiFi",
							"Pentaho (PDI)",
							"Apache Airflow",
							"Docker",
							"Git",
						].map((t) => (
							<Badge key={t} variant="secondary" className="px-3 py-1">
								{t}
							</Badge>
						))}
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader className="border-b">
					<CardTitle>Projects</CardTitle>
					<CardDescription>
						Noruj.com – Interactive Knowledge & Documentation Platform
					</CardDescription>
				</CardHeader>
				<CardContent>
					<p className="text-sm text-muted-foreground">
						Built noruj.com, a learner-first documentation platform designed to
						make complex technical topics easier to find, read, and trust.
					</p>
					<ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
						<li>
							Implemented features for visual workflows, rich documents, and
							structured knowledge organization, inspired by modern knowledge
							management tools.
						</li>
						<li>
							Used the project to deepen skills in web development, databases,
							and basic cloud concepts, and to experiment with product design
							and user experience.
						</li>
					</ul>
				</CardContent>
			</Card>
		</section>
	);
}
