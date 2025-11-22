import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://resume.noruj.com";
	const lastModified = new Date();
	const routes = [
		"/",
		"/about",
		"/resume",
		"/work-experience",
		"/skills",
		"/certificates",
		"/educations",
		"/contact",
	];

	return routes.map((path) => ({
		url: `${baseUrl}${path}`,
		lastModified,
		changeFrequency: "weekly",
		priority: path === "/" || path === "/about" ? 1 : 0.8,
	}));
}
