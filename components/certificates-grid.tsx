"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

type Certificate = {
  title: string
  image: string
  link?: string
  description: string
  skills: string[]
}

export default function CertificatesGrid({
  informaticaCertificates,
  otherCertificates,
}: {
  informaticaCertificates: Certificate[]
  otherCertificates: Certificate[]
}) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<Certificate | null>(null)

  function onCardClick(c: Certificate) {
    setSelected(c)
    setOpen(true)
  }

  return (
    <>
      {/* Informatica */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Informatica Certificates</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {informaticaCertificates.map((c) => (
            <div
              key={c.title}
              className="rounded-lg border p-0 overflow-hidden cursor-pointer"
              role="button"
              tabIndex={0}
              onClick={() => onCardClick(c)}
            >
              <div className="aspect-video w-full bg-muted relative">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-sm font-semibold">{c.title}</h3>
                <p className="text-xs text-muted-foreground">{c.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {c.skills.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center rounded-full border px-2 py-0.5 text-[11px]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Other */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Other Certificates</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {otherCertificates.map((c) => (
            <div
              key={c.title}
              className="rounded-lg border p-0 overflow-hidden cursor-pointer"
              role="button"
              tabIndex={0}
              onClick={() => onCardClick(c)}
            >
              <div className="aspect-video w-full bg-muted relative">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-sm font-semibold">{c.title}</h3>
                <p className="text-xs text-muted-foreground">{c.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {c.skills.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center rounded-full border px-2 py-0.5 text-[11px]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                {c.link && (
                  <div className="pt-3">
                    <a
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border bg-background text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground h-8 px-3"
                      href={c.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View certificate
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog
        open={open}
        onOpenChange={(o) => {
          setOpen(o)
          if (!o) setSelected(null)
        }}
      >
        <DialogContent className="sm:max-w-3xl p-0">
          {selected && (
            <>
              <DialogHeader className="p-6 pb-0">
                <DialogTitle>{selected.title}</DialogTitle>
                <DialogDescription>{selected.description}</DialogDescription>
              </DialogHeader>
              <div className="aspect-video w-full relative">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  unoptimized
                  className="object-contain bg-muted"
                />
              </div>
              {selected.link && (
                <div className="p-6 pt-4">
                  <a
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border bg-background text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground h-9 px-4"
                    href={selected.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open external certificate
                  </a>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

