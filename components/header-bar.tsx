"use client";
import { ExternalLink } from "lucide-react";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { useSidebarContext } from "@/contexts/sidebar-context";

export default function HeaderBar() {
	const { isCollapsed } = useSidebarContext();

	return (
		<header className="sticky top-0 z-20 border-b bg-background/70 backdrop-blur-md supports-[backdrop-filter]:bg-background/40">
			<div className="flex h-14 items-center justify-between px-3">
				{/* Left cluster: optional identity */}
				<div className="flex items-center gap-3 min-w-0">
					<MobileSidebar />
					{isCollapsed && (
						<div className="flex items-center gap-2 truncate">
							<div className="flex min-w-0 flex-col">
								<span className="truncate text-sm font-semibold">
									Shaik Noor Mohammad
								</span>
								<span className="truncate text-xs text-muted-foreground">
									Cloud Data & Integration Engineer (PowerCenter & IDMC)
								</span>
							</div>
						</div>
					)}
				</div>

				{/* Right cluster: website link and theme toggle */}
				<div className="flex items-center gap-2">
					<Button asChild variant="outline" size="sm">
						<a
							href="https://noruj.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							my website <ExternalLink />
						</a>
					</Button>
					<ModeToggle />
				</div>
			</div>
		</header>
	);
}
