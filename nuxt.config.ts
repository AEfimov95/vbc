export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],
  css: ["~/assets/css/fonts.css", "~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  imports: {
    dirs: ["composables"],
  },
  nitro: {
    preset: "github-pages",
  },
  app: {
    baseURL: "/vbc/", 
    buildAssetsDir: "assets",
  },
});
