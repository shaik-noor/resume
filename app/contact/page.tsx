import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Contact — Shaik Noor",
}

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl space-y-6">
      <header>
        <h1 className="text-2xl md:text-3xl font-bold">Contact</h1>
        <p className="text-sm text-muted-foreground">Get in touch or leave a message.</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-4">
          <h2 className="text-sm font-semibold">Direct</h2>
          <ul className="mt-2 text-sm space-y-1">
            <li>
              Email: <Link href="mailto:you@example.com" className="text-primary">you@example.com</Link>
            </li>
            <li>
              LinkedIn: <Link href="https://linkedin.com/in/your-profile" target="_blank" className="text-primary">/your-profile</Link>
            </li>
          </ul>
        </div>
        <form className="rounded-lg border p-4 space-y-3">
          <h2 className="text-sm font-semibold">Message</h2>
          <Input placeholder="Your name" />
          <Input type="email" placeholder="Your email" />
          <Textarea placeholder="Your message" rows={5} />
          <Button type="button" variant="default">Send (placeholder)</Button>
          <p className="text-xs text-muted-foreground">Note: Hook up handler or service to submit.</p>
        </form>
      </div>
    </section>
  )
}