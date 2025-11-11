export const metadata = {
  title: "Work Experience — Shaik Noor",
}

export default function WorkExperiencePage() {
  const roles = [
    {
      company: "Informatica",
      title: "Software Engineer",
      period: "2019 – Present",
      summary:
        "Support engineer focusing on PowerCenter and IICS products, delivering technical assistance and issue resolution.",
      highlights: [
        "Diagnosed and resolved complex product issues across customer environments",
        "Collaborated with engineering and product teams to drive fixes and improvements",
        "Created scalable troubleshooting guides and internal playbooks",
        "Improved resolution time and customer satisfaction metrics",
      ],
    },
  ]

  return (
    <section className="mx-auto max-w-4xl space-y-6">
      <header>
        <h1 className="text-2xl md:text-3xl font-bold">Work Experience</h1>
        <p className="text-sm text-muted-foreground">Key roles, responsibilities, and achievements.</p>
      </header>

      <div className="space-y-4">
        {roles.map((role) => (
          <article key={role.company} className="rounded-lg border p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-lg font-semibold">{role.title} · {role.company}</h2>
              <span className="text-xs text-muted-foreground">{role.period}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{role.summary}</p>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-sm">
              {role.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}