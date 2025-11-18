import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <section className="mx-auto max-w-5xl min-h-[60vh] grid place-items-center text-center">
      <div className="flex flex-col items-center gap-4">
        <header>
          <h1 className="text-2xl md:text-3xl font-bold">Page not found</h1>
          <p className="text-sm text-muted-foreground">The page you are looking for doesn’t exist.</p>
        </header>

        <div className="mt-0 flex justify-center gap-3">
          <Button asChild>
            <Link href="/about">Go to About</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/resume">View Resume</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}