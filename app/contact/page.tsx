import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn, StaggerContainer } from "@/components/ui/motion-wrapper";

export const metadata = {
	title: "Contact - Shaik Noor",
	description: "Get in touch with Shaik Noor Mohammad",
	alternates: { canonical: "/contact" },
};

export default function ContactPage() {
	return (
		<section className="mx-auto max-w-5xl space-y-8 py-8 px-4 sm:px-6">
			<StaggerContainer className="space-y-2 text-center md:text-left">
				<FadeIn>
					<h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
						Contact
					</h1>
				</FadeIn>
				<FadeIn>
					<p className="text-muted-foreground text-lg">
						Get in touch or leave a message.
					</p>
				</FadeIn>
			</StaggerContainer>

			<StaggerContainer className="grid gap-8 md:grid-cols-2 lg:gap-12">
				<FadeIn delay={0.2}>
					<Card className="h-full border-border/60 bg-card/50 shadow-sm">
						<CardHeader>
							<CardTitle className="text-xl">Contact Details</CardTitle>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors">
								<div className="p-2.5 rounded-full bg-primary/10 text-primary shrink-0">
									<Mail className="w-5 h-5" />
								</div>
								<div className="space-y-1">
									<p className="text-sm font-medium leading-none">Email</p>
									<Link
										href="mailto:s.noorink@gmail.com"
										className="text-sm text-muted-foreground hover:text-primary transition-colors block break-all"
									>
										s.noorink@gmail.com
									</Link>
								</div>
							</div>

							<div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors">
								<div className="p-2.5 rounded-full bg-primary/10 text-primary shrink-0">
									<Phone className="w-5 h-5" />
								</div>
								<div className="space-y-1">
									<p className="text-sm font-medium leading-none">Phone</p>
									<div className="flex flex-col gap-1">
										<Link
											href="tel:+917799477206"
											className="text-sm text-muted-foreground hover:text-primary transition-colors"
										>
											+91-7799477206
										</Link>
										<Link
											href="tel:+919398627571"
											className="text-sm text-muted-foreground hover:text-primary transition-colors"
										>
											+91-9398627571
										</Link>
									</div>
								</div>
							</div>

							<div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors">
								<div className="p-2.5 rounded-full bg-primary/10 text-primary shrink-0">
									<MapPin className="w-5 h-5" />
								</div>
								<div className="space-y-1">
									<p className="text-sm font-medium leading-none">Location</p>
									<p className="text-sm text-muted-foreground">
										Bangalore, India
									</p>
								</div>
							</div>

							<div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors">
								<div className="p-2.5 rounded-full bg-primary/10 text-primary shrink-0">
									<Linkedin className="w-5 h-5" />
								</div>
								<div className="space-y-1">
									<p className="text-sm font-medium leading-none">LinkedIn</p>
									<Link
										href="https://www.linkedin.com/in/shaik-noor/"
										target="_blank"
										className="text-sm text-muted-foreground hover:text-primary transition-colors"
									>
										/shaik-noor
									</Link>
								</div>
							</div>
						</CardContent>
					</Card>
				</FadeIn>

				<FadeIn delay={0.3}>
					<ContactForm />
				</FadeIn>
			</StaggerContainer>
		</section>
	);
}
