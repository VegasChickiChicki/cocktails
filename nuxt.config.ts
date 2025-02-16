// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: {
    enabled: true,
  },
  modules: ["@pinia/nuxt", "@nuxt/image", "@nuxt/eslint"],
  css: ["~/assets/styles/index.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/styles/variables/breakpoints.scss" as *;
            @use "~/assets/styles/mixins/media.scss" as *;
           `,
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      apiCocktailsUrl: process.env.API_COCKTACKS_URL,
    },
  },
});
