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
	title: "About — Shaik Noor",
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
								Support Engineer @ Informatica
							</Badge>
						</div>
						<p className="text-muted-foreground max-w-prose">
							I specialize in PowerCenter and IDMC product support with a focus
							on technical assistance, troubleshooting, and software issue
							resolution. I collaborate with cross-functional teams to deliver
							efficient and scalable solutions.
						</p>
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
							5 years 10 months
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
							PowerCenter, IDMC
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
						<CardDescription>Informatica — Support Engineering</CardDescription>
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
							"Python",
							"JavaScript",
							"SQL",
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
		</section>
	);
}
