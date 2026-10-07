import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://muhammadiyah-majenang.vercel.app",
  output: "static",
  build: {
    inlineStylesheets: "auto",
  },
});
