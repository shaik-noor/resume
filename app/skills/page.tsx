import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Skills — Shaik Noor",
}

const skills = [
  "PowerCenter",
  "IICS",
  "ETL",
  "Data Integration",
  "Troubleshooting",
  "Technical Support",
  "Issue Resolution",
  "SQL",
  "REST APIs",
  "Linux/Windows",
  "Collaboration",
  "Documentation",
]

export default function SkillsPage() {
  return (
    <section className="mx-auto max-w-4xl space-y-6">
      <header>
        <h1 className="text-2xl md:text-3xl font-bold">Skills</h1>
        <p className="text-sm text-muted-foreground">Core competencies and tools.</p>
      </header>
      <div className="rounded-lg border p-4">
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <Badge key={s} variant="secondary">{s}</Badge>
          ))}
        </div>
      </div>
    </section>
  )
}