export const metadata = {
	title: "Skills - Shaik Noor",
	alternates: { canonical: "/skills" },
};

import Image from "next/image";
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

function SkillsGrid({ title, items }: { title: string; items: Skill[] }) {
	return (
		<div className="space-y-3">
			<h2 className="text-sm font-semibold">{title}</h2>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
				{items.map((s) => (
					<div
						key={s.name}
						className="rounded-lg border p-3 flex items-center gap-3"
					>
						<Image
							src={s.image}
							alt={s.name}
							width={32}
							height={32}
							unoptimized
							className="size-8 object-contain"
						/>
						<span className="text-sm">{s.name}</span>
					</div>
				))}
			</div>
		</div>
	);
}

export default function SkillsPage() {
	return (
		<section className="mx-auto max-w-5xl space-y-8">
			<header>
				<h1 className="text-2xl md:text-3xl font-bold">Skills</h1>
				<p className="text-sm text-muted-foreground">
					Core competencies, tools, and methodologies.
				</p>
			</header>

			<SkillsGrid title="Informatica & ETL" items={informaticaEtl} />
			<SkillsGrid title="Databases & SQL" items={databasesSql} />
			<SkillsGrid title="Unix/Linux & Automation" items={unixLinuxAutomation} />
			<SkillsGrid title="Data Platforms & Tools" items={dataPlatformsTools} />
			<SkillsGrid title="Ways of Working" items={waysOfWorking} />
		</section>
	);
}
