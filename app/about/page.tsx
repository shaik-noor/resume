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
};

export default function AboutPage() {
	return (
		<section className="mx-auto max-w-6xl space-y-8">
			{/* Hero */}
			<header className="relative overflow-hidden rounded-xl border bg-gradient-to-b from-muted/40 to-background">
				<div className="grid gap-6 p-6 sm:grid-cols-[auto,1fr] sm:items-center">
					<div className="relative size-24 sm:size-28 md:size-32">
						<Image
							src={NoorImg}
							alt="Shaik Noor"
							fill
							sizes="(max-width: 640px) 96px, (max-width: 1024px) 112px, 128px"
							className="rounded-full border shadow-sm object-cover"
							priority
							placeholder="blur"
						/>
					</div>
					<div className="space-y-3">
						<div className="flex flex-wrap items-center gap-3">
							<h1 className="text-2xl md:text-3xl font-bold">
								Hi, I&apos;m Shaik Noor Mohammad
							</h1>
							<Badge variant="secondary" className="text-xs">
								Cloud Data & Integration Engineer
							</Badge>
						</div>
						<div className="space-y-3 text-muted-foreground max-w-prose">
							<p>
								I’m a Cloud Data & Integration Engineer with 6+ years of
								experience supporting and troubleshooting Informatica
								PowerCenter and IDMC in a product engineering environment.
							</p>
							<p>
								I specialize in debugging complex ETL issues, analyzing logs and
								stack traces, and working with product and R&D teams to
								stabilize mission-critical data pipelines. Recently, I’ve been
								expanding into IDMC administration, cloud data integration, and
								PowerCenter-to-cloud migration using internal Informatica
								training.
							</p>
							<p>
								Outside work, I build Noruj.com, an interactive learning and
								documentation platform, which reflects my interest in practical
								software engineering, data, and developer tools.
							</p>
						</div>
						<div className="flex flex-wrap gap-2">
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
					</div>
				</div>
			</header>

			{/* Stats strip */}
			<div className="grid gap-3 sm:grid-cols-3">
				<Card>
					<CardContent className="py-4">
						<div className="flex items-baseline justify-between">
							<span className="text-xs text-muted-foreground">Experience</span>
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
					<CardContent className="py-4">
						<span className="text-xs text-muted-foreground">Company</span>
						<p className="mt-2 text-xl font-semibold tracking-tight">
							Informatica
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardContent className="py-4">
						<span className="text-xs text-muted-foreground">Focus</span>
						<p className="mt-2 text-xl font-semibold tracking-tight">
							PowerCenter · IDMC · Cloud ETL
						</p>
					</CardContent>
				</Card>
			</div>

			{/* Overview grid */}
			<div className="grid gap-6 lg:grid-cols-2">
				{/* Focus areas */}
				<Card>
					<CardHeader className="border-b">
						<CardTitle>Focus Areas</CardTitle>
						<CardDescription>Where I deliver impact</CardDescription>
					</CardHeader>
					<CardContent>
						<ul className="mt-2 text-sm list-disc pl-5 space-y-1">
							<li>PowerCenter &amp; IDMC product support</li>
							<li>Technical assistance and troubleshooting</li>
							<li>Issue triage and resolution</li>
							<li>Cross-functional collaboration</li>
						</ul>
					</CardContent>
				</Card>

				{/* Current role */}
				<Card>
					<CardHeader className="border-b">
						<CardTitle>Current Role</CardTitle>
						<CardDescription>Informatica - Support Engineering</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground">
							Delivering scalable support solutions and partnering with
							engineering teams to improve product reliability and customer
							outcomes.
						</p>
					</CardContent>
				</Card>
			</div>

			{/* Tech stack */}
			<Card>
				<CardHeader className="border-b">
					<CardTitle>Tech Stack</CardTitle>
					<CardDescription>Tools and platforms I use</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="flex flex-wrap gap-2">
						{[
							"PowerCenter",
							"IDMC",
							"Cloud ETL",
							"SQL",
							"Python",
							"JavaScript",
							"PostgreSQL",
							"Docker",
							"GitHub",
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
					<CardTitle>Project</CardTitle>
					<CardDescription>
						Noruj.com - Interactive Knowledge & Workflow Platform
					</CardDescription>
				</CardHeader>
				<CardContent>
					<p className="text-sm text-muted-foreground">
						Personal SaaS project built to organize knowledge using visual
						workflows and rich documents.
					</p>
					<ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
						<li>
							Designed and built features for visual workflows, document
							management, and collaboration (public and private documents,
							sharing, and search).
						</li>
						<li>
							Worked end-to-end across front-end, back-end, and deployment,
							strengthening skills in JavaScript, databases, and cloud concepts.
						</li>
						<li>
							Focused on secure, structured knowledge storage, including privacy
							controls and scalable architecture.
						</li>
					</ul>
				</CardContent>
			</Card>
		</section>
	);
}
