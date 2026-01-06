"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function FadeIn({
	children,
	delay = 0,
	className = "",
}: { children: ReactNode; delay?: number; className?: string }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay, ease: "easeOut" }}
			className={className}
		>
			{children}
		</motion.div>
	);
}

export function ScaleIn({
	children,
	delay = 0,
	className = "",
}: { children: ReactNode; delay?: number; className?: string }) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.95 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.4, delay, ease: "backOut" }}
			className={className}
		>
			{children}
		</motion.div>
	);
}

export function StaggerContainer({
	children,
	className = "",
	delay = 0,
}: { children: ReactNode; className?: string; delay?: number }) {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			className={className}
			variants={{
				visible: {
					transition: {
						staggerChildren: 0.1,
						delayChildren: delay,
					},
				},
			}}
		>
			{children}
		</motion.div>
	);
}

export const staggerItem = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
