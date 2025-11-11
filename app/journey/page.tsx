export const metadata = {
  title: "Journey — Shaik Noor",
}

export default function JourneyPage() {
  const timeline = [
    { year: "2019", title: "Joined Informatica", note: "Started focusing on PowerCenter/IICS support." },
    { year: "2021", title: "Cross-functional Collaboration", note: "Partnered with engineering to accelerate fixes." },
    { year: "2023", title: "Scalable Solutions", note: "Built playbooks to reduce time-to-resolution." },
    { year: "2024", title: "Mentorship", note: "Guided peers on troubleshooting best practices." },
  ]

  return (
    <section className="mx-auto max-w-3xl space-y-6">
      <header>
        <h1 className="text-2xl md:text-3xl font-bold">Journey</h1>
        <p className="text-sm text-muted-foreground">A simple timeline of milestones.</p>
      </header>

      <ol className="relative border-l pl-6 space-y-6">
        {timeline.map((t) => (
          <li key={t.year} className="ml-6">
            <div className="absolute -left-1.5 mt-1 size-3 rounded-full bg-primary" />
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">{t.year}</span>
              <h2 className="text-sm font-semibold">{t.title}</h2>
            </div>
            <p className="text-sm text-muted-foreground mt-1">{t.note}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}