// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title:
        "Full-Stack-Entwickler mit Fokus auf kreative Lösungen | Igor Duspara",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "description",
          content:
            "Talentierter und engagierter Full-Stack-Entwickler mit kreativer Herangehensweise und umfassenden Fähigkeiten in Technologien wie Javascript, PHP, CSS und MySQL",
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
