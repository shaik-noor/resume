import {
	ArrowUpRight,
	CheckCircle2,
	CloudLightning,
	Code2,
	Laptop,
	Trophy,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SocialActions from "@/components/social-actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { FadeIn, StaggerContainer } from "@/components/ui/motion-wrapper";
import NoorImg from "@/public/assets/Noor.jpg";

export const metadata = {
	title: "About - Shaik Noor",
	description: "Professional Profile of Shaik Noor Mohammad",
	alternates: { canonical: "/about" },
};

export default function AboutPage() {
	return (
		<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-16">
			{/* JSON-LD Schema */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Person",
						name: "Shaik Noor Mohammad",
						url: "https://resume.noruj.com/about",
						jobTitle: "Cloud Data Integration Engineer",
						worksFor: { "@type": "Organization", name: "Informatica" },
						sameAs: [
							"https://www.linkedin.com/in/shaik-noor/",
							"https://github.com/shaik-noor",
							"https://noruj.com",
						],
					}),
				}}
			/>

			{/* Hero / Intro Section */}
			<div className="grid lg:grid-cols-12 gap-12 items-center">
				<FadeIn className="lg:col-span-4 lg:order-last flex justify-center lg:justify-end">
					<div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 overflow-hidden rounded-full border-4 border-muted shadow-xl bg-muted">
						<Image
							src={NoorImg}
							alt="Shaik Noor"
							fill
							className="object-cover"
							priority
							placeholder="blur"
						/>
					</div>
				</FadeIn>

				<StaggerContainer className="lg:col-span-8 space-y-8 text-left">
					<div className="space-y-4">
						<FadeIn>
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
								Shaik Noor Mohammad
							</h1>
						</FadeIn>
						<FadeIn>
							<h2 className="text-2xl md:text-3xl font-medium text-primary">
								Cloud Data & Integration Engineer
							</h2>
						</FadeIn>
					</div>

					<FadeIn>
						<p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
							Transforming complex data challenges into streamlined, scalable
							solutions. With{" "}
							<strong className="text-foreground font-semibold">
								6+ years
							</strong>{" "}
							of expertise in Informatica PowerCenter, IDMC, and Cloud ETL, I
							streamline workflows and optimize data pipelines for enterprise
							success.
						</p>
					</FadeIn>

					<FadeIn className="flex flex-wrap gap-4 pt-2">
						<Link href="/resume">
							<Button size="lg" className="px-8 font-semibold shadow-sm">
								View Resume
							</Button>
						</Link>
						<Link href="/contact">
							<Button variant="outline" size="lg" className="px-8 font-medium">
								Contact Me
							</Button>
						</Link>
						<div className="flex items-center gap-3 px-4 border-l border-border">
							<SocialActions />
						</div>
					</FadeIn>
				</StaggerContainer>
			</div>

			{/* Bento Grid Layout - Clean & structured */}
			<StaggerContainer
				className="grid grid-cols-1 md:grid-cols-3 gap-6"
				delay={0.2}
			>
				{/* Stats Cards - Clean metrics */}
				{[
					{
						label: "Experience",
						value: "6+ Years",
						sub: "Data Engineering",
						icon: Trophy,
					},
					{
						label: "Role",
						value: "Software Engineer",
						sub: "At Informatica",
						icon: Laptop,
					},
					{
						label: "Focus",
						value: "Cloud ETL",
						sub: "IDMC & PowerCenter",
						icon: CloudLightning,
					},
				].map((stat, i) => (
					<FadeIn key={stat.label} delay={0.2 + i * 0.1}>
						<Card className="h-full border border-border shadow-sm hover:border-primary/50 hover:shadow-md transition-all duration-300 bg-card text-card-foreground group">
							<CardContent className="p-6 flex flex-col items-start justify-center h-full space-y-4">
								<div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 ring-1 ring-primary/20 text-primary group-hover:scale-110 transition-transform duration-300 shadow-sm">
									<stat.icon className="w-6 h-6" />
								</div>
								<div>
									<div className="text-3xl font-bold tracking-tight text-foreground">
										{stat.value}
									</div>
									<div className="text-sm font-medium text-muted-foreground uppercase tracking-wide mt-1">
										{stat.sub}
									</div>
								</div>
							</CardContent>
						</Card>
					</FadeIn>
				))}

				{/* Tech Stack - Organized Badges */}
				<FadeIn className="md:col-span-2">
					<Card className="h-full border border-border shadow-sm bg-card text-card-foreground">
						<CardHeader className="pb-3 border-b border-border/50">
							<CardTitle className="text-lg font-semibold flex items-center gap-2">
								<Code2 className="w-5 h-5 text-primary" />
								Technical Expertise
							</CardTitle>
						</CardHeader>
						<CardContent className="pt-6">
							<div className="flex flex-wrap gap-2.5">
								{[
									"Informatica PowerCenter",
									"Informatica IDMC / IICS",
									"SQL (Oracle, Postgres, MSSQL)",
									"Unix/Linux Shell",
									"Apache NiFi",
									"Pentaho",
									"Docker",
									"Git",
									"Python",
								].map((tech) => (
									<Badge
										key={tech}
										variant="secondary"
										className="px-3 py-1.5 text-sm font-medium bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground border-transparent transition-colors"
									>
										{tech}
									</Badge>
								))}
							</div>
						</CardContent>
					</Card>
				</FadeIn>

				{/* Project Feature - Clean Card */}
				<FadeIn className="md:col-span-1">
					<Card className="h-full border border-border shadow-sm hover:shadow-md transition-all bg-card text-card-foreground group relative overflow-hidden">
						<Link
							href="https://noruj.com"
							target="_blank"
							className="block h-full"
						>
							<div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
								<ArrowUpRight className="w-5 h-5 text-muted-foreground" />
							</div>
							<CardHeader>
								<CardDescription className="uppercase tracking-widest text-xs font-semibold">
									Featured Project
								</CardDescription>
								<CardTitle className="text-xl mt-1">Noruj.com</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-muted-foreground mb-4 leading-relaxed">
									A learner-first documentation platform simplifying complex
									technical topics.
								</p>
								<Badge
									variant="outline"
									className="border-primary/30 text-primary bg-primary/5"
								>
									Live Project
								</Badge>
							</CardContent>
						</Link>
					</Card>
				</FadeIn>

				{/* Achievements - List View */}
				<FadeIn className="md:col-span-3">
					<Card className="border border-border shadow-sm bg-card text-card-foreground">
						<CardHeader className="pb-3 border-b border-border/50">
							<CardTitle className="text-lg font-semibold">
								Key Achievements
							</CardTitle>
						</CardHeader>
						<CardContent className="pt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
							{[
								{
									title: "Client Satisfaction",
									desc: "Resolved ~95% of critical issues within 24h, significantly boosting CSAT scores.",
								},
								{
									title: "Workflow Automation",
									desc: "Developed AI-assisted scripts reducing repetitive troubleshooting time by 40%.",
								},
								{
									title: "Team Leadership",
									desc: "Mentored 10+ junior engineers on ETL best practices and advanced debugging.",
								},
							].map((item) => (
								<div key={item.title} className="flex gap-4 items-start">
									<CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
									<div>
										<h3 className="font-semibold text-foreground mb-1">
											{item.title}
										</h3>
										<p className="text-sm text-muted-foreground leading-relaxed">
											{item.desc}
										</p>
									</div>
								</div>
							))}
						</CardContent>
					</Card>
				</FadeIn>
			</StaggerContainer>
		</section>
	);
}
