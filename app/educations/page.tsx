import { CalendarIcon, GraduationCap, School } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn, StaggerContainer } from "@/components/ui/motion-wrapper";

export const metadata = {
	title: "Educations - Shaik Noor",
	description: "Academic background and qualifications of Shaik Noor Mohammad",
	alternates: { canonical: "/educations" },
};

export default function EducationsPage() {
	const schools = [
		{
			school: "Zero To Mastery Academy - Online",
			degree: "Complete Web Developer, Computer Programming",
			period: "2023",
			details:
				"Comprehensive training in modern web development, including full-stack skills, databases, and deployment.",
		},
		{
			school: "Sri Krishnadevaraya University - Andhra Pradesh",
			degree: "Bachelor of Commerce",
			period: "2017",
			details:
				"Foundation in commerce and business principles. Developed analytical and organizational skills.",
		},
	];

	return (
		<section className="mx-auto max-w-4xl space-y-8 py-8 px-4 sm:px-6">
			<StaggerContainer className="space-y-2 text-center md:text-left">
				<FadeIn>
					<h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
						Educations
					</h1>
				</FadeIn>
				<FadeIn>
					<p className="text-muted-foreground text-lg">
						Academic background and qualifications.
					</p>
				</FadeIn>
			</StaggerContainer>

			<StaggerContainer className="grid gap-6">
				{schools.map((s, i) => (
					<FadeIn key={s.school} delay={i * 0.1}>
						<Card className="group overflow-hidden border-border/60 bg-card/50 shadow-sm hover:bg-card hover:shadow-md hover:border-primary/20 transition-all duration-300">
							<CardHeader className="pb-3 pt-5 px-5 md:px-6">
								<div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
									<div className="flex items-start gap-4">
										<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary shadow-sm group-hover:scale-105 transition-transform duration-300">
											<GraduationCap className="h-6 w-6" />
										</div>
										<div className="space-y-1.5">
											<CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
												{s.degree}
											</CardTitle>
											<div className="text-base font-semibold text-muted-foreground flex items-center gap-2">
												<School className="w-4 h-4" />
												{s.school}
											</div>
										</div>
									</div>
									<Badge
										variant="secondary"
										className="w-fit mt-2 md:mt-0 flex items-center gap-1.5 px-3 py-1 text-sm font-medium bg-secondary/50"
									>
										<CalendarIcon className="w-3.5 h-3.5" />
										{s.period}
									</Badge>
								</div>
							</CardHeader>
							<CardContent className="px-5 md:px-6 pb-6 pt-0 md:pt-2">
								<p className="text-base text-gray-400 md:pl-[4.5rem] leading-relaxed">
									{s.details}
								</p>
							</CardContent>
						</Card>
					</FadeIn>
				))}
			</StaggerContainer>
		</section>
	);
}
