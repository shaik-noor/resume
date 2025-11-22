export const metadata = {
	title: "Skills - Shaik Noor",
	alternates: { canonical: "/skills" },
};

import Image from "next/image";
type Skill = {
	name: string;
	image: string;
};

const dataIntegrationSkills: Skill[] = [
	{
		name: "Informatica PowerCenter",
		image: "https://companieslogo.com/img/orig/INFA-c4767c1c.png",
	},
	{
		name: "Informatica IDMC",
		image: "https://companieslogo.com/img/orig/INFA-c4767c1c.png",
	},
	{
		name: "Apache Nifi",
		image:
			"https://cms.acte.ltd/storage/app/uploads/public/665/2e2/814/6652e28144ba5040936680.png",
	},
	{
		name: "Pentaho Data Integration",
		image:
			"https://miro.medium.com/v2/resize:fit:532/1*EMEANIXZP2H55rTm_S1FCQ.png",
	},
	{
		name: "Airflow",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/AirflowLogo.png/800px-AirflowLogo.png",
	},
];

const programmingLanguages: Skill[] = [
	{
		name: "Python",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
	},
	{
		name: "JavaScript",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
	},
	{
		name: "Shell scripting (Linux/Unix)",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/8/82/Gnu-bash-logo.svg",
	},
];

const databases: Skill[] = [
	{
		name: "SQL",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
	},
	{
		name: "PostgreSQL",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
	},
	{
		name: "Oracle Database",
		image: "https://www.svgrepo.com/show/354152/oracle.svg",
	},
	{
		name: "MS SQL Server",
		image: "/assets/mssqlserver.png",
	},
	{
		name: "IBM Db2",
		image: "/assets/db2.png",
	},
	{
		name: "MongoDB",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
	},
	{
		name: "Redis",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Redis_logo.svg/1280px-Redis_logo.svg.png",
	},
];

const tools: Skill[] = [
	{
		name: "Docker",
		image: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
	},
	{
		name: "GitHub",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
	},
	{
		name: "Linux",
		image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png",
	},
	{
		name: "Basic cloud (Intro to Cloud Computing – IBM)",
		image:
			"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~92PBMQLY7YF3/CERTIFICATE_LANDING_PAGE~92PBMQLY7YF3.jpeg",
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
					Core competencies and tools.
				</p>
			</header>

			<SkillsGrid
				title="Data Integration & Orchestration"
				items={dataIntegrationSkills}
			/>
			<SkillsGrid
				title="Programming & Scripting"
				items={programmingLanguages}
			/>
			<SkillsGrid title="Databases" items={databases} />
			<SkillsGrid title="Platforms & Tools" items={tools} />
		</section>
	);
}
