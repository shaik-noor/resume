import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Resume — Shaik Noor",
  description: "PDF resume viewer and download",
}

export default function ResumePage() {
  return (
    <section className="mx-auto max-w-5xl space-y-4">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold">Resume</h1>
        <Button asChild variant="outline">
          <Link href="/resume.pdf" target="_blank">Download PDF</Link>
        </Button>
      </header>

      <div className="rounded-lg border overflow-hidden">
        <object data="/resume.pdf" type="application/pdf" className="w-full h-[70vh]">
          <div className="p-6 space-y-2">
            <p className="text-sm text-muted-foreground">
              Unable to display the PDF inline. You can download it using the button above.
            </p>
            <p className="text-xs text-muted-foreground">
              Note: Place your file at <code>public/resume.pdf</code> to render it here.
            </p>
          </div>
        </object>
      </div>
    </section>
  )
}