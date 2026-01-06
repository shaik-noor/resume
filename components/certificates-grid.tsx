"use client";

import { Award, ExternalLink, FileCheck } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { FadeIn, StaggerContainer } from "@/components/ui/motion-wrapper";

type Certificate = {
	title: string;
	image: string;
	link?: string;
	description: string;
	skills: string[];
};

function CertificateCard({
	cert,
	onClick,
}: {
	cert: Certificate;
	onClick: () => void;
}) {
	return (
		<Card
			className="group cursor-pointer overflow-hidden border-border/60 bg-card/50 hover:bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 h-full flex flex-col"
			onClick={onClick}
		>
			<div className="aspect-video w-full bg-muted/50 relative overflow-hidden">
				<Image
					src={cert.image}
					alt={cert.title}
					fill
					unoptimized
					className="object-cover transition-transform duration-500 group-hover:scale-105"
				/>
				<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
					<span className="text-white font-medium text-sm px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
						View Details
					</span>
				</div>
			</div>
			<CardContent className="p-4 flex-1 flex flex-col gap-3">
				<h3 className="text-base font-semibold leading-tight group-hover:text-primary transition-colors">
					{cert.title}
				</h3>
				<p className="text-xs text-muted-foreground line-clamp-2">
					{cert.description}
				</p>
				<div className="mt-auto flex flex-wrap gap-1.5 pt-2">
					{cert.skills.slice(0, 3).map((s) => (
						<Badge
							key={s}
							variant="secondary"
							className="text-[10px] px-1.5 py-0 h-5 bg-secondary/50 group-hover:bg-secondary transition-colors"
						>
							{s}
						</Badge>
					))}
					{cert.skills.length > 3 && (
						<span className="text-[10px] text-muted-foreground self-center">
							+{cert.skills.length - 3}
						</span>
					)}
				</div>
			</CardContent>
		</Card>
	);
}

export default function CertificatesGrid({
	informaticaCertificates,
	otherCertificates,
}: {
	informaticaCertificates: Certificate[];
	otherCertificates: Certificate[];
}) {
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState<Certificate | null>(null);

	function onCardClick(c: Certificate) {
		setSelected(c);
		setOpen(true);
	}

	return (
		<>
			<div className="space-y-12">
				{/* Informatica Section */}
				<section className="space-y-4">
					<FadeIn>
						<h2 className="text-xl font-semibold flex items-center gap-2">
							<div className="p-1.5 rounded-md bg-primary/10 text-primary">
								<Award className="w-5 h-5" />
							</div>
							Informatica Certifications
						</h2>
					</FadeIn>
					<StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{informaticaCertificates.map((c, i) => (
							<FadeIn key={c.title} delay={i * 0.1}>
								<CertificateCard cert={c} onClick={() => onCardClick(c)} />
							</FadeIn>
						))}
					</StaggerContainer>
				</section>

				{/* Other Section */}
				<section className="space-y-4">
					<FadeIn>
						<h2 className="text-xl font-semibold flex items-center gap-2">
							<div className="p-1.5 rounded-md bg-primary/10 text-primary">
								<FileCheck className="w-5 h-5" />
							</div>
							Other Certifications
						</h2>
					</FadeIn>
					<StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{otherCertificates.map((c, i) => (
							<FadeIn key={c.title} delay={i * 0.1}>
								<CertificateCard cert={c} onClick={() => onCardClick(c)} />
							</FadeIn>
						))}
					</StaggerContainer>
				</section>
			</div>

			{/* Detailed View Modal */}
			<Dialog
				open={open}
				onOpenChange={(o) => {
					setOpen(o);
					if (!o) setTimeout(() => setSelected(null), 300); // Clear after animation
				}}
			>
				<DialogContent className="sm:max-w-3xl p-0 overflow-hidden border-none shadow-2xl bg-card">
					{selected && (
						<div className="flex flex-col">
							<div className="aspect-video w-full relative bg-muted/30">
								<Image
									src={selected.image}
									alt={selected.title}
									fill
									unoptimized
									className="object-contain p-4"
								/>
							</div>

							<div className="p-6 space-y-4">
								<DialogHeader>
									<DialogTitle className="text-xl md:text-2xl font-bold">
										{selected.title}
									</DialogTitle>
									<div className="flex flex-wrap gap-2 pt-2">
										{selected.skills.map((s) => (
											<Badge key={s} variant="outline" className="text-xs">
												{s}
											</Badge>
										))}
									</div>
								</DialogHeader>

								<DialogDescription className="text-base text-foreground/80 leading-relaxed">
									{selected.description}
								</DialogDescription>

								{selected.link && (
									<div className="pt-2 flex justify-end">
										<Button asChild>
											<a
												href={selected.link}
												target="_blank"
												rel="noopener noreferrer"
												className="gap-2"
											>
												Verify Certificate <ExternalLink className="w-4 h-4" />
											</a>
										</Button>
									</div>
								)}
							</div>
						</div>
					)}
				</DialogContent>
			</Dialog>
		</>
	);
}
