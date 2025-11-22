import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		host: "https://resume.noruj.com",
		sitemap: "https://resume.noruj.com/sitemap.xml",
	};
}
