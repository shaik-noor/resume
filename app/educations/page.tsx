export const metadata = {
	title: "Educations — Shaik Noor",
};

export default function EducationsPage() {
	const schools = [
		{
			school: "Zero To Mastery Academy",
			degree: "Computer Programming",
			period: "2022",
			details:
				"Learned JavaScript, Python, full stack development, cloud computing, production application deployment, database management, version control, and more.",
		},
		{
			school: "Sri Krishnadevaraya University",
			degree: "Bachelor of Commerce (B.Com)",
			period: "2014 – 2017",
			details:
				"Focused on accounting, finance, and business management principles. Developed strong analytical and problem-solving skills essential for business operations.",
		},
	];

	return (
		<section className="mx-auto max-w-4xl space-y-6">
			<header>
				<h1 className="text-2xl md:text-3xl font-bold">Educations</h1>
				<p className="text-sm text-muted-foreground">
					Academic background and qualifications.
				</p>
			</header>

			<div className="space-y-4">
				{schools.map((s) => (
					<article key={s.school} className="rounded-lg border p-4">
						<div className="flex items-center justify-between gap-2">
							<h2 className="text-lg font-semibold">{s.degree}</h2>
							<span className="text-xs text-muted-foreground">{s.period}</span>
						</div>
						<p className="text-sm mt-1">{s.school}</p>
						<p className="text-sm text-muted-foreground mt-2">{s.details}</p>
					</article>
				))}
			</div>
		</section>
	);
}
