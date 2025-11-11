import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

const BodySchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  message: z.string().min(10, "Message is too short").max(5000),
})

const resendApiKey = process.env.RESEND_API_KEY
const toEmail = process.env.CONTACT_TO_EMAIL || "s.noorink@gmail.com"

export async function POST(req: Request) {
  try {
    if (!resendApiKey) {
      return NextResponse.json(
        { ok: false, error: "RESEND_API_KEY is not configured" },
        { status: 500 }
      )
    }

    const json = await req.json()
    const parsed = BodySchema.safeParse(json)
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Validation failed", details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const { name, email, message } = parsed.data
    const resend = new Resend(resendApiKey)

    const subject = `New contact message from ${name}`
    const text = `From: ${name} <${email}>\n\n${message}`

    const { data, error } = await resend.emails.send({
      from: "Shaik Noor <onboarding@resend.dev>",
      to: toEmail,
      subject,
      text,
      html: `
        <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; line-height:1.6">
          <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
          <p><strong>Message:</strong></p>
          <div style="white-space: pre-wrap">${escapeHtml(message)}</div>
        </div>
      `,
      replyTo: email,
    })

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
    }

    return NextResponse.json({ ok: true, id: data?.id ?? null })
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err)
    return NextResponse.json(
      { ok: false, error: msg || "Unexpected server error" },
      { status: 500 }
    )
  }
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}

export const runtime = "nodejs"