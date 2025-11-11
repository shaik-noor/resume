export const metadata = {
  title: "Blog — Shaik Noor",
}

export default function BlogPage() {
  const posts = [
    {
      title: "Troubleshooting Patterns for IICS",
      summary:
        "A quick overview of diagnosing common integration issues and improving incident workflows.",
      date: "2024-08-15",
    },
    {
      title: "Reducing MTTR with Playbooks",
      summary:
        "How structured guides and checklists help teams resolve issues faster and more consistently.",
      date: "2023-11-02",
    },
  ]

  return (
    <section className="mx-auto max-w-4xl space-y-6">
      <header>
        <h1 className="text-2xl md:text-3xl font-bold">Blog</h1>
        <p className="text-sm text-muted-foreground">Notes and articles (placeholders).</p>
      </header>

      <div className="space-y-4">
        {posts.map((p) => (
          <article key={p.title} className="rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">{p.title}</h2>
              <span className="text-xs text-muted-foreground">{p.date}</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{p.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}