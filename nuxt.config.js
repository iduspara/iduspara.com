// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/image-edge"],
  googleFonts: {
    display: "swap",
    download: true,
    prefetch: true,
    families: {
      Inter: [300, 400, 600],
    },
  },
  image: {},
});
