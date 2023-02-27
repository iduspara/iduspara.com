// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title:
        "Kreativer Full-Stack-Entwickler mit einem Auge für Design - Erfahren in JavaScript, PHP, CSS und MySQL",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "description",
          content:
            "Ein kreativer Full-Stack-Entwickler mit umfassenden Kenntnissen in Javascript, PHP, CSS und MySQL. Leidenschaftlich daran interessiert, komplexe Projekte erfolgreich abzuschließen.",
        },
      ],
    },
  },
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
