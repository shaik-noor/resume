"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const ContactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Please write at least 10 characters").max(5000),
})

type ContactFormValues = z.infer<typeof ContactSchema>

export default function ContactForm() {
  const [status, setStatus] = React.useState<
    "idle" | "sending" | "success" | "error"
  >("idle")
  const [error, setError] = React.useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: { name: "", email: "", message: "" },
    mode: "onBlur",
  })

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("sending")
    setError(null)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      const json = await res.json()
      if (!res.ok || !json?.ok) {
        throw new Error(json?.error || "Failed to send message")
      }
      setStatus("success")
      reset()
    } catch (e) {
      setStatus("error")
      setError(e instanceof Error ? e.message : String(e))
    }
  }

  return (
    <form className="rounded-lg border p-4 space-y-3" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-sm font-semibold">Message</h2>

      <div>
        <Input placeholder="Your name" {...register("name")} />
        {errors.name && (
          <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Input type="email" placeholder="Your email" {...register("email")} />
        {errors.email && (
          <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Textarea placeholder="Your message" rows={5} {...register("message")} />
        {errors.message && (
          <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>

      <div className="flex items-center gap-2">
        <Button type="submit" variant="default" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send"}
        </Button>
        {status === "success" && (
          <span className="text-xs text-green-600">Message sent successfully.</span>
        )}
        {status === "error" && (
          <span className="text-xs text-destructive">
            {error || "Something went wrong. Please try again."}
          </span>
        )}
      </div>

      <p className="text-xs text-muted-foreground">
        Your message will be delivered to the site owner.
      </p>
    </form>
  )
}