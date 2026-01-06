"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactSchema = z.object({
	name: z.string().min(2, "Please enter your name"),
	email: z.string().email("Please enter a valid email"),
	message: z.string().min(10, "Please write at least 10 characters").max(5000),
});

type ContactFormValues = z.infer<typeof ContactSchema>;

export default function ContactForm() {
	const [status, setStatus] = React.useState<
		"idle" | "sending" | "success" | "error"
	>("idle");
	const [error, setError] = React.useState<string | null>(null);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ContactFormValues>({
		resolver: zodResolver(ContactSchema),
		defaultValues: { name: "", email: "", message: "" },
		mode: "onBlur",
	});

	const onSubmit = async (values: ContactFormValues) => {
		setStatus("sending");
		setError(null);
		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(values),
			});
			const json = await res.json();
			if (!res.ok || !json?.ok) {
				throw new Error(json?.error || "Failed to send message");
			}
			setStatus("success");
			reset();
			setTimeout(() => {
				setStatus("idle");
			}, 3000);
		} catch (e) {
			setStatus("error");
			setError(e instanceof Error ? e.message : String(e));
		}
	};

	return (
		<Card className="h-full border-border/60 bg-card/50 shadow-sm relative overflow-hidden">
			<CardHeader>
				<CardTitle className="text-xl">Send a Message</CardTitle>
				<CardDescription>
					Use the form below to send me a direct message.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
					<div className="space-y-2">
						<Label htmlFor="name">Name</Label>
						<Input
							id="name"
							placeholder="Your name"
							{...register("name")}
							className="bg-background/50"
						/>
						{errors.name && (
							<p className="text-[0.8rem] font-medium text-destructive flex items-center gap-1">
								<AlertCircle className="w-3 h-3" /> {errors.name.message}
							</p>
						)}
					</div>

					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							type="email"
							placeholder="your.email@example.com"
							{...register("email")}
							className="bg-background/50"
						/>
						{errors.email && (
							<p className="text-[0.8rem] font-medium text-destructive flex items-center gap-1">
								<AlertCircle className="w-3 h-3" /> {errors.email.message}
							</p>
						)}
					</div>

					<div className="space-y-2">
						<Label htmlFor="message">Message</Label>
						<Textarea
							id="message"
							placeholder="How can I help you?"
							rows={5}
							{...register("message")}
							className="bg-background/50 resize-none min-h-[120px]"
						/>
						{errors.message && (
							<p className="text-[0.8rem] font-medium text-destructive flex items-center gap-1">
								<AlertCircle className="w-3 h-3" /> {errors.message.message}
							</p>
						)}
					</div>

					<div className="pt-2">
						<Button
							type="submit"
							className="w-full"
							disabled={status === "sending" || status === "success"}
						>
							{status === "sending" ? (
								<>
									<Loader2 className="mr-2 h-4 w-4 animate-spin" />
									Sending...
								</>
							) : status === "success" ? (
								<>
									<CheckCircle2 className="mr-2 h-4 w-4" />
									Sent Successfully
								</>
							) : (
								<>
									Send Message
									<Send className="ml-2 h-4 w-4" />
								</>
							)}
						</Button>
					</div>

					{status === "error" && (
						<div className="p-3 rounded-md bg-destructive/10 text-destructive text-sm flex items-center gap-2">
							<AlertCircle className="w-4 h-4 shrink-0" />
							{error || "Something went wrong. Please try again."}
						</div>
					)}

					<p className="text-xs text-muted-foreground text-center pt-2">
						Your message will be delivered directly to my inbox.
					</p>
				</form>
			</CardContent>
		</Card>
	);
}
