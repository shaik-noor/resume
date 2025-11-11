export const metadata = {
  title: "Certificates — Shaik Noor",
}

export default function CertificatesPage() {
  const items = [
    { name: "Informatica PowerCenter (placeholder)", year: "YYYY" },
    { name: "IICS Specialist (placeholder)", year: "YYYY" },
  ]

  return (
    <section className="mx-auto max-w-4xl space-y-6">
      <header>
        <h1 className="text-2xl md:text-3xl font-bold">Certificates</h1>
        <p className="text-sm text-muted-foreground">Add your certifications below.</p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((c) => (
          <div key={c.name} className="rounded-lg border p-4">
            <h2 className="text-sm font-semibold">{c.name}</h2>
            <p className="text-xs text-muted-foreground mt-1">{c.year}</p>
          </div>
        ))}
      </div>
    </section>
  )
}