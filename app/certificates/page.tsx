export const metadata = {
	title: "Certificates - Shaik Noor",
	alternates: { canonical: "/certificates" },
};

import CertificatesGrid from "@/components/certificates-grid";

type Certificate = {
	title: string;
	image: string;
	link?: string;
	description: string;
	skills: string[];
};

export default function CertificatesPage() {
	// Informatica certificates (images expected under `public/assets/certificates/*`)
	const informaticaCertificates: Certificate[] = [
		{
			title: "Cloud Application Integration Services for Developers",
			image: "/assets/certificates/cai_for_developers.png",
			description:
				"Integrate applications and systems, implement business processes using process designer that can access data from on-premise as well as cloud, and expose them as composite APIs.",
			skills: ["Informatica", "ETL", "Data Integration", "CAI"],
		},
		{
			title: "Informatica Platform Administration Fundamentals",
			image: "/assets/certificates/platform_admin_fundamentals.png",
			description:
				"Learned the configuring, managing, securing, and monitoring the Informatica PowerCenter domain.",
			skills: ["ETL", "Administration", "PowerCenter"],
		},
		{
			title: "PowerCenter Data Integration for Developers",
			image: "/assets/certificates/pc_data_integration_for_developers.png",
			description:
				"Learned to design, build, test, and maintain real-world data integration systems with PowerCenter’s workbench tools.",
			skills: ["Data Integration", "ETL", "PowerCenter"],
		},
		{
			title: "PowerCenter Developer Level 2",
			image: "/assets/certificates/pc_developer_level_02.png",
			description:
				"PowerCenter connection architecture, high availability, and session and workflow recovery.",
			skills: ["Data Integration", "ETL", "PowerCenter"],
		},
		{
			title: "IDMC: Administration Fundamentals",
			image: "/assets/certificates/IDMC-Admin-Fundamentals.png",
			description:
				"Internal – In Progress / Completed. Core IDMC org administration, secure agent management, and user configuration.",
			skills: ["IDMC", "Administration", "Secure Agent"],
		},
		{
			title: "PowerCenter to Informatica Cloud – Migration Training",
			image: "/assets/certificates/PC-TO-IDMC-certificate.png",
			description:
				"Internal. Learned the PowerCenter-to-Cloud Migration process, including the migration of mappings and workflows to IDMC.",
			skills: ["ETL", "Migration", "PowerCenter", "IDMC"],
		},
	];

	// Other certificates
	const otherCertificates: Certificate[] = [
		{
			title: "Complete Web Developer",
			image:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png",
			description: "Zero To Mastery Academy",
			skills: ["Web Development", "Full Stack"],
		},
		{
			title: "Oracle Database Administrator Training",
			image: "https://www.svgrepo.com/show/354152/oracle.svg",
			description: "Tech360hub Software Solution",
			skills: ["Oracle", "DBA", "SQL"],
		},
		{
			title: "Unix Essential Training",
			image: "/assets/Unix-Essential-Training.png",
			link: "https://www.linkedin.com/learning/certificates/cf4c365df01bca16733b77fdf2bc677a06d979acb3788a3f99a085e5a6741294",
			description:
				"LinkedIn Learning. Learned the basics of working in Linux OS.",
			skills: ["Unix", "Linux"],
		},
		{
			title: "Learning SQL Programming",
			image:
				"https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
			description: "LinkedIn Learning",
			skills: ["SQL", "Database"],
		},
		{
			title: "Python for Data Science, AI & Development",
			image:
				"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~MS5SBOSEKEF0/CERTIFICATE_LANDING_PAGE~MS5SBOSEKEF0.jpeg",
			link: "https://coursera.org/share/e3b62b29e6198c25263c839ebc6464eb",
			description:
				"Coursera. Gained a strong foundation in Python programming.",
			skills: ["Python", "Data Science"],
		},
	];

	return (
		<section className="mx-auto max-w-5xl space-y-8">
			<header>
				<h1 className="text-2xl md:text-3xl font-bold">Certificates</h1>
				<p className="text-sm text-muted-foreground">
					Selected certifications and trainings.
				</p>
			</header>
			<CertificatesGrid
				informaticaCertificates={informaticaCertificates}
				otherCertificates={otherCertificates}
			/>
		</section>
	);
}
