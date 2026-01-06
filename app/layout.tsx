import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { AppSidebar } from "@/components/app-sidebar";

import MainContent from "@/components/main-content";
import { SidebarProvider } from "@/contexts/sidebar-context";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://resume.noruj.com"),
	title: {
		default: "Shaik Noor Mohammad",
		template: "%s - Shaik Noor",
	},
	description: "Cloud Data & Integration Engineer (PowerCenter & IDMC)",
	applicationName: "Resume - Shaik Noor",
	keywords: [
		"Cloud Data Integration",
		"Informatica",
		"PowerCenter",
		"IDMC",
		"ETL",
		"Support Engineering",
		"Data Pipelines",
		"SQL",
		"Python",
		"Resume",
	],
	openGraph: {
		title: "Shaik Noor Mohammad",
		description: "Cloud Data & Integration Engineer (PowerCenter & IDMC)",
		url: "https://resume.noruj.com",
		siteName: "Resume - Shaik Noor",
		images: [
			{
				url: "https://resume.noruj.com/assets/Noor.jpg",
				width: 1200,
				height: 630,
				alt: "Shaik Noor Mohammad",
			},
		],
		type: "profile",
	},
	twitter: {
		card: "summary_large_image",
		title: "Shaik Noor Mohammad",
		description: "Cloud Data & Integration Engineer (PowerCenter & IDMC)",
		images: ["https://resume.noruj.com/assets/Noor.jpg"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-video-preview": -1,
		},
	},
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<SidebarProvider>
						<AppSidebar />
						<main className="transition-all duration-300 ease-in-out">
							<MainContent>{children}</MainContent>
						</main>
					</SidebarProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
