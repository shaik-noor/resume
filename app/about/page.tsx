export const metadata = {
  title: "About — Shaik Noor",
  description: "About Shaik Noor Mohammad",
}

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold">About</h1>
        <p className="text-muted-foreground">
          Hi, I&apos;m Shaik Noor Mohammad, a software engineer with over 5 years 10 months of
          experience. I currently work at Informatica, focusing on the PowerCenter and IICS products.
          My expertise includes technical assistance, troubleshooting, and software issue resolution.
          I collaborate with cross-functional teams to deliver efficient and scalable solutions.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border p-4">
          <h2 className="text-sm font-semibold">Focus Areas</h2>
          <ul className="mt-2 text-sm list-disc pl-4 space-y-1">
            <li>PowerCenter &amp; IICS product support</li>
            <li>Technical assistance and troubleshooting</li>
            <li>Issue triage and resolution</li>
            <li>Cross-functional collaboration</li>
          </ul>
        </div>
        <div className="rounded-lg border p-4">
          <h2 className="text-sm font-semibold">Current Role</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Delivering scalable support solutions and partnering with engineering teams to improve
            product reliability and customer outcomes.
          </p>
        </div>
      </div>
    </section>
  )
}