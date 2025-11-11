export const metadata = {
  title: "Projects — Shaik Noor",
}

export default function ProjectsPage() {
  const projects = [
    {
      name: "Data Integration Playbook",
      summary:
        "Internal toolkit and documentation to streamline PowerCenter/IDMC troubleshooting workflows.",
      tags: ["IDMC", "PowerCenter", "Support"],
    },
    {
      name: "Customer Diagnostics Scripts",
      summary:
        "Automation scripts for collecting environment diagnostics to accelerate issue triage.",
      tags: ["Automation", "Diagnostics", "Scripting"],
    },
  ]

  return (
    <section className="mx-auto max-w-5xl space-y-6">
      <header>
        <h1 className="text-2xl md:text-3xl font-bold">Projects</h1>
        <p className="text-sm text-muted-foreground">Selected initiatives and contributions.</p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.name} className="rounded-lg border p-4">
            <h2 className="text-lg font-semibold">{p.name}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{p.summary}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {p.tags.map((t) => (
                <span key={t} className="rounded-md bg-secondary px-2 py-1 text-secondary-foreground">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}