"use client";

import {
	Award,
	Briefcase,
	ChevronLeft,
	ChevronRight,
	FileText,
	GraduationCap,
	Mail,
	User,
	Wrench,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useSidebarContext } from "@/contexts/sidebar-context";
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

export function AppSidebar() {
	const pathname = usePathname();
	const { isCollapsed, toggleSidebar } = useSidebarContext();

	return (
		<div
			className={cn(
				"fixed left-0 top-0 z-40 hidden md:flex flex-col h-screen border-r border-border bg-sidebar transition-all duration-300 ease-in-out",
				isCollapsed ? "w-16" : "w-64",
			)}
		>
			{/* Toggle Button */}
			<button
				type="button"
				onClick={toggleSidebar}
				className="absolute -right-3 top-1/2 -translate-y-1/2 z-50 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background shadow-md hover:bg-muted transition-colors"
				aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
			>
				{isCollapsed ? (
					<ChevronRight className="h-3 w-3" />
				) : (
					<ChevronLeft className="h-3 w-3" />
				)}
			</button>

			{/* Header */}
			<div className="h-16 border-b border-border/50 flex items-center justify-center px-4">
				{isCollapsed ? (
					<Link
						href="/about"
						aria-label="About"
						className="flex items-center justify-center"
						title="Shaik Noor Mohammad"
					>
						<Avatar className="h-8 w-8 ring-2 ring-primary/20 transition-all hover:ring-primary/50">
							<AvatarFallback className="bg-primary/10 text-primary font-bold text-xs">
								SN
							</AvatarFallback>
						</Avatar>
					</Link>
				) : (
					<Link href="/about" className="flex items-center gap-3 w-full group">
						<Avatar className="h-10 w-10 ring-2 ring-primary/20 transition-all group-hover:ring-primary/50">
							<AvatarFallback className="bg-primary/10 text-primary font-bold">
								SN
							</AvatarFallback>
						</Avatar>
						<div className="flex flex-col min-w-0">
							<span className="font-semibold text-sm truncate group-hover:text-primary transition-colors">
								Shaik Noor Mohammad
							</span>
							<span className="text-xs text-muted-foreground truncate">
								Informatica & Cloud Engineer
							</span>
						</div>
					</Link>
				)}
			</div>

			{/* Navigation */}
			<nav className="flex-1 p-2 overflow-y-auto">
				{!isCollapsed && (
					<div className="text-xs font-medium text-muted-foreground/70 px-2 py-2 uppercase tracking-wider mb-1">
						Navigation
					</div>
				)}
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
									className={cn(
										"flex items-center h-10 rounded-md transition-all duration-200",
										isCollapsed ? "justify-center px-0" : "gap-3 px-3",
										isCurrent
											? "bg-primary/10 text-primary font-medium hover:bg-primary/15"
											: "text-muted-foreground hover:bg-muted hover:text-foreground",
									)}
									title={isCollapsed ? item.title : undefined}
								>
									<Icon className="h-4 w-4 shrink-0" />
									{!isCollapsed && (
										<>
											<span className="flex-1">{item.title}</span>
											{isCurrent && (
												<div className="h-1.5 w-1.5 rounded-full bg-primary" />
											)}
										</>
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
			{!isCollapsed && (
				<div className="p-4 animate-in fade-in slide-in-from-left-2 duration-500">
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
			)}
		</div>
	);
}

export default AppSidebar;
