import react from "@vitejs/plugin-react";
import dns from "dns";
import { defineConfig } from "vite";
import svgrPlugin from "vite-plugin-svgr";
import viteTsconfigPaths from "vite-tsconfig-paths";

dns.setDefaultResultOrder("verbatim");

export default defineConfig({
  build: {
    outDir: "build",
  },
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
});
