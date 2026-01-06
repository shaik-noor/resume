"use client";

import {
	Award,
	Briefcase,
	FileText,
	GraduationCap,
	Mail,
	Menu,
	User,
	Wrench,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

type NavItem = {
	title: string;
	href: string;
	icon: React.ComponentType<{ className?: string }>;
};

const navItems: NavItem[] = [
	{ title: "About", href: "/about", icon: User },
	{ title: "Resume", href: "/resume", icon: FileText },
	{ title: "Work Experience", href: "/work-experience", icon: Briefcase },
	{ title: "Skills", href: "/skills", icon: Wrench },
	{ title: "Certificates", href: "/certificates", icon: Award },
	{ title: "Educations", href: "/educations", icon: GraduationCap },
	{ title: "Contact", href: "/contact", icon: Mail },
];

export function MobileSidebar() {
	const pathname = usePathname();
	const [open, setOpen] = React.useState(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
					className="md:hidden"
					aria-label="Open mobile menu"
				>
					<Menu className="h-5 w-5" />
				</Button>
			</SheetTrigger>
			<SheetContent
				side="left"
				className="w-72 p-0 flex flex-col bg-sidebar border-r border-border"
			>
				{/* Header */}
				<div className="h-16 border-b border-border/50 flex items-center px-4">
					<SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
					<Link
						href="/about"
						className="flex items-center gap-3 w-full group"
						onClick={() => setOpen(false)}
					>
						<Avatar className="h-10 w-10 ring-2 ring-primary/20">
							<AvatarFallback className="bg-primary/10 text-primary font-bold">
								SN
							</AvatarFallback>
						</Avatar>
						<div className="flex flex-col min-w-0">
							<span className="font-semibold text-sm truncate">
								Shaik Noor Mohammad
							</span>
							<span className="text-xs text-muted-foreground truncate">
								Informatica & Cloud Engineer
							</span>
						</div>
					</Link>
				</div>

				{/* Navigation */}
				<nav className="flex-1 p-2 overflow-y-auto">
					<div className="text-xs font-medium text-muted-foreground/70 px-2 py-2 uppercase tracking-wider mb-1">
						Navigation
					</div>
					<ul className="space-y-1">
						{navItems.map((item) => {
							const Icon = item.icon;
							const isCurrent =
								pathname === item.href ||
								(item.href !== "/" && pathname?.startsWith(item.href));

							return (
								<li key={item.href}>
									<Link
										href={item.href}
										onClick={() => setOpen(false)}
										className={cn(
											"flex items-center gap-3 px-3 h-10 rounded-md transition-all duration-200",
											isCurrent
												? "bg-primary/10 text-primary font-medium"
												: "text-muted-foreground hover:bg-muted hover:text-foreground",
										)}
									>
										<Icon className={cn("h-4 w-4 shrink-0")} />
										<span className="flex-1">{item.title}</span>
										{isCurrent && (
											<div className="h-1.5 w-1.5 rounded-full bg-primary" />
										)}
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>

				{/* Separator */}
				<div className="h-px bg-border/50" />

				{/* Footer */}
				<div className="p-4">
					<div className="rounded-lg bg-card border border-border/50 p-3 shadow-sm">
						<div className="flex items-center gap-2 mb-2">
							<Badge
								variant="outline"
								className="border-green-500/30 text-green-600 bg-green-500/10 text-[10px] px-2 py-0.5 h-auto"
							>
								<div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5 animate-pulse" />
								Open to Work
							</Badge>
						</div>
						<p className="text-xs text-muted-foreground leading-relaxed">
							Specialized in ETL, Data Integration, and Cloud Platforms.
						</p>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
