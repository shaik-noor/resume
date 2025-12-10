import Link from "next/link";
import ContactForm from "@/components/contact-form";

export const metadata = {
	title: "Contact - Shaik Noor",
	alternates: { canonical: "/contact" },
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
					<h2 className="text-sm font-semibold">Contact Details</h2>
					<ul className="mt-3 text-sm space-y-2">
						<li>
							<span className="font-medium">Email:</span>{" "}
							<Link href="mailto:s.noorink@gmail.com" className="text-primary hover:underline">
								s.noorink@gmail.com
							</Link>
						</li>
						<li>
							<span className="font-medium">Phone:</span>{" "}
							<Link href="tel:+917799477206" className="text-primary hover:underline">
								+91-7799477206
							</Link>
							,{" "}
							<Link href="tel:+919398627571" className="text-primary hover:underline">
								+91-9398627571
							</Link>
						</li>
						<li>
							<span className="font-medium">Location:</span> Bangalore, India
						</li>
						<li>
							<span className="font-medium">LinkedIn:</span>{" "}
							<Link
								href="https://www.linkedin.com/in/shaik-noor/"
								target="_blank"
								className="text-primary hover:underline"
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
