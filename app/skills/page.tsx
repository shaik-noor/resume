import {
	Database,
	type LucideIcon,
	Server,
	Settings2,
	Terminal,
	Users,
} from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, StaggerContainer } from "@/components/ui/motion-wrapper";

export const metadata = {
	title: "Skills - Shaik Noor",
	description: "Technical skills and expertise of Shaik Noor Mohammad",
	alternates: { canonical: "/skills" },
};

type Skill = {
	name: string;
	image: string;
};

const informaticaEtl: Skill[] = [
	{
		name: "Informatica PowerCenter (10.4 – 10.5.9)",
		image: "https://companieslogo.com/img/orig/INFA-c4767c1c.png",
	},
	{
		name: "Informatica IDMC / IICS",
		image: "https://companieslogo.com/img/orig/INFA-c4767c1c.png",
	},
	{
		name: "ETL Design & Troubleshooting",
		image: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png", // Generic data icon
	},
	{
		name: "Performance Tuning",
		image: "https://cdn-icons-png.flaticon.com/512/3050/3050525.png", // Generic speed icon
	},
];

const databasesSql: Skill[] = [
	{
		name: "Oracle",
		image: "https://www.svgrepo.com/show/354152/oracle.svg",
	},
	{
		name: "SQL Server",
		image: "/assets/mssqlserver.png",
	},
	{
		name: "PostgreSQL",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
	},
	{
		name: "Complex SQL & PL/SQL",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
	},
	{
		name: "Semi-structured Data",
		image: "https://cdn-icons-png.flaticon.com/512/2906/2906274.png", // Generic json/xml icon
	},
];

const unixLinuxAutomation: Skill[] = [
	{
		name: "Shell Scripting",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/8/82/Gnu-bash-logo.svg",
	},
	{
		name: "Log Parsing & Monitoring",
		image: "https://cdn-icons-png.flaticon.com/512/1041/1041697.png", // Generic terminal icon
	},
	{
		name: "Process Automation",
		image: "https://cdn-icons-png.flaticon.com/512/2082/2082987.png", // Generic gear icon
	},
];

const dataPlatformsTools: Skill[] = [
	{
		name: "Apache NiFi",
		image:
			"https://cms.acte.ltd/storage/app/uploads/public/665/2e2/814/6652e28144ba5040936680.png",
	},
	{
		name: "Pentaho (PDI)",
		image:
			"https://miro.medium.com/v2/resize:fit:532/1*EMEANIXZP2H55rTm_S1FCQ.png",
	},
	{
		name: "Apache Airflow",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/AirflowLogo.png/800px-AirflowLogo.png",
	},
	{
		name: "Docker",
		image: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
	},
	{
		name: "Git",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
	},
	{
		name: "Linux",
		image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png",
	},
];

const waysOfWorking: Skill[] = [
	{
		name: "Production Support (L2/L3)",
		image: "https://cdn-icons-png.flaticon.com/512/4230/4230752.png", // Support icon
	},
	{
		name: "Agile/Scrum",
		image: "https://cdn-icons-png.flaticon.com/512/1063/1063376.png", // Agile icon
	},
	{
		name: "Cross-functional Collaboration",
		image: "https://cdn-icons-png.flaticon.com/512/1256/1256650.png", // Team icon
	},
	{
		name: "Documentation & Technical Writing",
		image: "https://cdn-icons-png.flaticon.com/512/2535/2535555.png", // Doc icon
	},
];

function SkillsSection({
	title,
	icon: Icon,
	items,
	delayOffset = 0,
}: {
	title: string;
	icon: LucideIcon;
	items: Skill[];
	delayOffset?: number;
}) {
	return (
		<div className="space-y-4">
			<FadeIn delay={delayOffset}>
				<h2 className="text-xl font-semibold flex items-center gap-2 text-foreground/90">
					<div className="p-1.5 rounded-md bg-primary/10 text-primary">
						<Icon className="w-5 h-5" />
					</div>
					{title}
				</h2>
			</FadeIn>
			<StaggerContainer
				delay={delayOffset + 0.1}
				className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
			>
				{items.map((s, i) => (
					<FadeIn key={s.name} delay={delayOffset + 0.1 + i * 0.05}>
						<Card className="h-full border-border/50 bg-card/50 hover:bg-card hover:border-primary/30 hover:shadow-md transition-all duration-300 group cursor-default">
							<CardContent className="p-4 flex flex-col items-center justify-center text-center gap-3 h-full">
								<div className="relative h-12 w-12 p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
									<Image
										src={s.image}
										alt={s.name}
										fill
										className="object-contain p-0.5"
										unoptimized
									/>
								</div>
								<span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors line-clamp-2">
									{s.name}
								</span>
							</CardContent>
						</Card>
					</FadeIn>
				))}
			</StaggerContainer>
		</div>
	);
}

export default function SkillsPage() {
	return (
		<section className="mx-auto max-w-6xl space-y-10 py-8 px-4 sm:px-6">
			{/* Header */}
			<StaggerContainer className="space-y-2 text-center md:text-left">
				<FadeIn>
					<h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
						Skills & Technologies
					</h1>
				</FadeIn>
				<FadeIn>
					<p className="text-muted-foreground text-lg max-w-2xl">
						A comprehensive overview of my technical expertise, ranging from ETL
						pipelines to modern web development.
					</p>
				</FadeIn>
			</StaggerContainer>

			<div className="space-y-12">
				<SkillsSection
					title="Informatica & ETL"
					icon={Settings2}
					items={informaticaEtl}
				/>
				<SkillsSection
					title="Databases & SQL"
					icon={Database}
					items={databasesSql}
					delayOffset={0.1}
				/>
				<SkillsSection
					title="Unix/Linux & Automation"
					icon={Terminal}
					items={unixLinuxAutomation}
					delayOffset={0.2}
				/>
				<SkillsSection
					title="Data Platforms & Tools"
					icon={Server}
					items={dataPlatformsTools}
					delayOffset={0.3}
				/>
				<SkillsSection
					title="Ways of Working"
					icon={Users}
					items={waysOfWorking}
					delayOffset={0.4}
				/>
			</div>
		</section>
	);
}
