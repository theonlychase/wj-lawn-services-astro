// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";
import AutoImport from "unplugin-auto-import/astro";

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),

  base: "/",

  integrations: [
    AutoImport({
      dirs: [
        {
          glob: "./src/{components,layouts,utils}/**",
          types: true,
        },
      ],
      eslintrc: {
        enabled: true,
      },
      include: [/\.[tj]s?$/, /\.astro$/],
    }),
  ],

  output: "server",

  site: "https://www.wjlawnservices.com",

  vite: {
    plugins: [tailwindcss()],
  },
});
