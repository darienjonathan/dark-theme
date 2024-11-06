export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ['~/assets/style/main.css'],
  modules: ["vuetify-nuxt-module", "@pinia/nuxt"],
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/ico', href: '/favicon.ico' }]
    }
  },
});
