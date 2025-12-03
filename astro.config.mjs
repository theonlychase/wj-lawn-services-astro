// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";
// import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  output: "server",

  site: "https://wj-lawn-services.netlify.app",

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify(),
  // integrations: [db()],
});
