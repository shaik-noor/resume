import Link from "next/link";
import ContactForm from "@/components/contact-form";

export const metadata = {
	title: "Contact — Shaik Noor",
};

export default function ContactPage() {
	return (
		<section className="mx-auto max-w-3xl space-y-6">
			<header>
				<h1 className="text-2xl md:text-3xl font-bold">Contact</h1>
				<p className="text-sm text-muted-foreground">
					Get in touch or leave a message.
				</p>
			</header>

			<div className="grid gap-6 md:grid-cols-2">
				<div className="rounded-lg border p-4">
					<h2 className="text-sm font-semibold">Direct</h2>
					<ul className="mt-2 text-sm space-y-1">
						<li>
							Email:{" "}
							<Link href="mailto:s.noorink@gmail.com" className="text-primary">
								s.noorink@gmail.com
							</Link>
						</li>
						<li>
							LinkedIn:{" "}
							<Link
								href="https://www.linkedin.com/in/shaik-noor/"
								target="_blank"
								className="text-primary"
							>
								/shaik-noor
							</Link>
						</li>
					</ul>
				</div>
				<ContactForm />
			</div>
		</section>
	);
}
