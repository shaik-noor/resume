"use client";

import HeaderBar from "@/components/header-bar";
import { useSidebarContext } from "@/contexts/sidebar-context";
import { cn } from "@/lib/utils";

export default function MainContent({
	children,
}: {
	children: React.ReactNode;
}) {
	const { isCollapsed } = useSidebarContext();

	return (
		<main
			className={cn(
				"transition-all duration-300 ease-in-out ml-0",
				isCollapsed ? "md:ml-16" : "md:ml-64",
			)}
		>
			<HeaderBar />
			<div className="p-4 md:p-6">{children}</div>
		</main>
	);
}
