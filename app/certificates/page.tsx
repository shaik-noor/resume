export const metadata = {
	title: "Certificates — Shaik Noor",
};

import Image from "next/image";
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
				"Learned to design, build, test, and maintain real-world data integration systems with PowerCenter’s workbench tools. Learned to create and combine PowerCenter objects such as source and target definitions, data transformations, mappings, sessions, and workflows using best-practice methodology.",
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
			title: "PowerCenter Administration Fundamentals",
			image: "/assets/certificates/pc_admin_fundamentals.png",
			description:
				"Configuring, managing, securing, and monitoring the Informatica PowerCenter domain.",
			skills: ["Administration", "PowerCenter"],
		},
		{
			title: "Cloud Application Integration Services for Developers",
			image: "/assets/certificates/cai_for_developers.png",
			description:
				"Integrate applications and systems, implement business processes using process designer that can access data from on-premise as well as cloud, and expose them as composite APIs.",
			skills: ["Informatica", "ETL", "Data Integration", "CAI"],
		},
	];

	// Other certificates
	const otherCertificates: Certificate[] = [
		{
			title: "Unix Essential Training",
			image: "/assets/Unix-Essential-Training.png",
			link: "https://www.linkedin.com/learning/certificates/cf4c365df01bca16733b77fdf2bc677a06d979acb3788a3f99a085e5a6741294?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BPmDhBcr9RJKUgW0zwGu1Ng%3D%3D",
			description:
				"Learned the basics of working in Linux OS and using it for daily activities.",
			skills: ["Unix", "Linux"],
		},
		{
			title: "Programming with JavaScript",
			image:
				"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~QL5K32N2R2BY/CERTIFICATE_LANDING_PAGE~QL5K32N2R2BY.jpeg",
			link: "https://coursera.org/share/9cf2c0e12fb114548bc544deca3ad5c0",
			description:
				"Learned the basics of JavaScript and how it is used to build web applications.",
			skills: ["JavaScript", "Web Development"],
		},
		{
			title: "Python for Data Science, AI & Development",
			image:
				"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~MS5SBOSEKEF0/CERTIFICATE_LANDING_PAGE~MS5SBOSEKEF0.jpeg",
			link: "https://coursera.org/share/e3b62b29e6198c25263c839ebc6464eb",
			description:
				"Gained a strong foundation in Python programming, including functions, objects, loops, and classes.",
			skills: ["Python", "Data Engineering"],
		},
		{
			title: "Python Project for Data Engineering",
			image:
				"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~06OVSXNRSE2K/CERTIFICATE_LANDING_PAGE~06OVSXNRSE2K.jpeg",
			link: "https://www.coursera.org/account/accomplishments/verify/06OVSXNRSE2K",
			description:
				"Gained a strong foundation in Python programming, including functions, objects, loops, and classes.",
			skills: ["Python", "Data Engineering", "Flask", "SQL"],
		},
		{
			title: "Introduction to Back-End Development",
			image:
				"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~NETUFMJJTYBA/CERTIFICATE_LANDING_PAGE~NETUFMJJTYBA.jpeg",
			link: "https://www.coursera.org/account/accomplishments/verify/NETUFMJJTYBA",
			description:
				"Learned the basics of back-end development, including server-side scripting, database management, and API design.",
			skills: ["Backend", "JavaScript", "HTML", "CSS"],
		},
		{
			title: "Introduction to Cloud Computing",
			image:
				"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~92PBMQLY7YF3/CERTIFICATE_LANDING_PAGE~92PBMQLY7YF3.jpeg",
			link: "https://www.coursera.org/account/accomplishments/verify/92PBMQLY7YF3",
			description:
				"Learned the basics of cloud computing, including cloud services, cloud architecture, and cloud security.",
			skills: ["DevOps", "Serverless", "Microservices", "HybridMulticloud"],
		},
		{
			title: "Getting Started with Git and GitHub",
			image:
				"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~T8Z2BHCZZSFD/CERTIFICATE_LANDING_PAGE~T8Z2BHCZZSFD.jpeg",
			link: "https://www.coursera.org/account/accomplishments/verify/T8Z2BHCZZSFD",
			description:
				"Learned the basics of Git and GitHub, including creating repositories, committing changes, and collaborating with others.",
			skills: ["GitHub", "Git"],
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

			{/* Informatica */}
			<div className="space-y-4">
				<h2 className="text-lg font-semibold">Informatica Certificates</h2>
				<div className="grid gap-4 sm:grid-cols-2">
					{informaticaCertificates.map((c) => (
						<div
							key={c.title}
							className="rounded-lg border p-0 overflow-hidden"
						>
							<div className="aspect-video w-full bg-muted relative">
								<Image
									src={c.image}
									alt={c.title}
									fill
									unoptimized
									className="object-cover"
								/>
							</div>
							<div className="p-4 space-y-2">
								<h3 className="text-sm font-semibold">{c.title}</h3>
								<p className="text-xs text-muted-foreground">{c.description}</p>
								<div className="flex flex-wrap gap-1.5 pt-2">
									{c.skills.map((s) => (
										<span
											key={s}
											className="inline-flex items-center rounded-full border px-2 py-0.5 text-[11px]"
										>
											{s}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Other */}
			<div className="space-y-4">
				<h2 className="text-lg font-semibold">Other Certificates</h2>
				<div className="grid gap-4 sm:grid-cols-2">
					{otherCertificates.map((c) => (
						<div
							key={c.title}
							className="rounded-lg border p-0 overflow-hidden"
						>
							<div className="aspect-video w-full bg-muted relative">
								<Image
									src={c.image}
									alt={c.title}
									fill
									unoptimized
									className="object-cover"
								/>
							</div>
							<div className="p-4 space-y-2">
								<h3 className="text-sm font-semibold">{c.title}</h3>
								<p className="text-xs text-muted-foreground">{c.description}</p>
								<div className="flex flex-wrap gap-1.5 pt-2">
									{c.skills.map((s) => (
										<span
											key={s}
											className="inline-flex items-center rounded-full border px-2 py-0.5 text-[11px]"
										>
											{s}
										</span>
									))}
								</div>
								{c.link && (
									<div className="pt-3">
										<a
											className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border bg-background text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground h-8 px-3"
											href={c.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											View certificate
										</a>
									</div>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}