import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	output: "standalone",
	experimental: {
	useLightningcss: false,
    // reactCompiler: true,
	}
};

export default nextConfig;
